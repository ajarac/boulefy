import { HttpStatus, INestApplication } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'
import { MongoPostRepository } from '@forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { mongoConfig } from '@forum/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { FindPostsController } from '@forum/post/infrastructure/controllers/find-posts.controller'
import { PostFinderAll } from '@forum/post/application/findAll/post-finder-all'
import { FindPostsQueryHandler } from '@forum/post/application/findAll/find-posts-query.handler'
import { PostResponse } from '@forum/post/application/post.response'
import { Post } from '@forum/post/domain/post'
import { PostMother } from '@forum/test/post/domain/post.mother'
import { PostRepository } from '@forum/post/domain/post.repository'

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
