import { HttpStatus, INestApplication } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'

import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FindPostsController } from '@api/post/infrastructure/controllers/find-posts.controller'
import { PostMother } from '@api/test/post/domain/post.mother'
import { mongoConfig } from '@api/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@api/post/infrastructure/persistence/mongo/command/mongo-post.repository'
import { FindPostsQueryHandler } from '@api/post/application/findAll/find-posts-query.handler'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { PostRepository } from '@api/post/domain/post.repository'
import { PostFinderAll } from '@api/post/application/findAll/post-finder-all'
import { Post } from '@api/post/domain/post'
import { MongoPostFinderAllQuery } from '@api/post/infrastructure/persistence/mongo/query/mongo-post-finder-all.query'
import { PostResponse } from '@shared/models/post/post.response'
import { PostResponseMother } from '@api/test/post/application/post-response.mother'

describe('FindPostsController', () => {
    let app: INestApplication
    let connection: Connection
    let mongoPostRepository: PostRepository

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CqrsModule, TypeOrmModule.forRoot(mongoConfig('findPostsTest')), TypeOrmModule.forFeature([PostSchema])],
            controllers: [FindPostsController],
            providers: [
                {
                    provide: PostFinderAll,
                    useClass: MongoPostFinderAllQuery
                },
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
        expect(responseBody).toEqual(list.map((post: Post) => PostResponseMother.fromAggregate(post, null)))
    })

    test('Get Find Posts empty list', () => {
        return request(app.getHttpServer()).get('/posts').expect(HttpStatus.OK).expect([])
    })
})
