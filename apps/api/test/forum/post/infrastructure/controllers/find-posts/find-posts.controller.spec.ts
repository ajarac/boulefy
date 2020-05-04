import { HttpStatus, INestApplication } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'

import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FindPostsController } from '@api/post/infrastructure/controllers/find-posts.controller'
import { PostMother } from '@api/test/forum/post/domain/post.mother'
import { mongoConfig } from '@api/test/forum/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@api/post/infrastructure/persistence/mongo/command/mongo-post.repository'
import { FindPostsQueryHandler } from '@api/post/application/findAll/find-posts-query.handler'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { PostRepository } from '@api/post/domain/post.repository'
import { PostFinderAll } from '@api/post/application/findAll/post-finder-all'
import { PostResponse } from '@api/post/application/post.response'
import { Post } from '@api/post/domain/post'

describe('FindPostsController', () => {
    let app: INestApplication
    let connection: Connection
    let mongoPostRepository: PostRepository

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CqrsModule, TypeOrmModule.forRoot(mongoConfig('findPostsTest')), TypeOrmModule.forFeature([PostSchema])],
            controllers: [FindPostsController],
            providers: [
                PostFinderAll,
                FindPostsQueryHandler,
                {
                    provide: PostRepository,
                    useClass: MongoPostRepository
                }
            ]
        }).compile()

        app = moduleRef.createNestApplication()
        connection = moduleRef.get<Connection>(Connection)
        mongoPostRepository = moduleRef.get<PostRepository>(PostRepository)
        await app.init()
    })

    beforeEach(async () => {
        await connection.dropDatabase()
    })

    afterAll(async () => {
        await connection.dropDatabase()
        await connection.close()
    })

    test('Get Find Posts', async () => {
        const list: Post[] = new Array(10).fill('').map(() => PostMother.random())
        for (const post of list) {
            await mongoPostRepository.save(post)
        }

        const response: request.Response = await request(app.getHttpServer()).get('/posts')
        const responseBody: PostResponse[] = JSON.parse(response.text)

        expect(response.status).toBe(HttpStatus.OK)
        expect(responseBody).toEqual(list.map((post: Post) => PostResponse.fromAggregate(post)))
    })

    test('Get Find Posts empty list', () => {
        return request(app.getHttpServer()).get('/posts').expect(HttpStatus.OK).expect([])
    })
})
