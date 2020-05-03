import { HttpStatus, INestApplication } from '@nestjs/common'
import { Connection } from 'typeorm'
import * as request from 'supertest'

import { MongoPostRepository } from '@forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { Test } from '@nestjs/testing'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { mongoConfig } from '@forum/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { PostResponse } from '@forum/post/application/post.response'
import { PostFinder } from '@forum/post/application/find/post-finder'
import { FindPostQueryHandler } from '@forum/post/application/find/find-post-query.handler'
import { FindPostController } from '@forum/post/infrastructure/controllers/find-post.controller'
import { HttpError } from '@shared/http.error'
import { Post } from '@forum/post/domain/post'
import { PostMother } from '@forum/test/post/domain/post.mother'
import { PostIdMother } from '@forum/test/post/domain/post-id.mother'
import { PostId } from '@forum/shared/domain/post-id'
import { PostRepository } from '@forum/post/domain/post.repository'

describe('FindPostController', () => {
    let app: INestApplication
    let connection: Connection
    let mongoPostRepository: PostRepository

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CqrsModule, TypeOrmModule.forRoot(mongoConfig('findPostTest')), TypeOrmModule.forFeature([PostSchema])],
            controllers: [FindPostController],
            providers: [
                PostFinder,
                FindPostQueryHandler,
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

    test('Get Find Post', async () => {
        const post: Post = PostMother.random()
        await mongoPostRepository.save(post)

        const response: request.Response = await request(app.getHttpServer())
            .get('/posts/' + post.id.value)
            .expect(HttpStatus.OK)

        expect(JSON.parse(response.text)).toEqual(PostResponse.fromAggregate(post))
    })

    test('Get Find post not found', () => {
        const id: PostId = PostIdMother.random()
        return request(app.getHttpServer())
            .get('/posts/' + id.value)
            .expect(HttpStatus.NOT_FOUND)
            .expect({
                message: `Post with id: ${id.value} not found`,
                error: 'Error',
                status: HttpStatus.NOT_FOUND,
                path: '/posts/' + id.value
            } as HttpError)
    })
})
