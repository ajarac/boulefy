import { HttpStatus, INestApplication } from '@nestjs/common'
import { Connection } from 'typeorm'
import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { PostFinder } from '@api/forum/post/application/find/post-finder'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FindPostController } from '@api/forum/post/infrastructure/controllers/find-post.controller'
import { mongoConfig } from '@api/test/forum/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@api/forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { CqrsModule } from '@nestjs/cqrs'
import { PostId } from '@api/forum/shared/domain/post-id'
import { PostRepository } from '@api/forum/post/domain/post.repository'
import { PostMother } from '@api/test/forum/post/domain/post.mother'
import { PostIdMother } from '@api/test/forum/post/domain/post-id.mother'
import { HttpError } from '@shared/http.error'
import { PostSchema } from '@api/forum/post/infrastructure/persistence/mongo/post.schema'
import { FindPostQueryHandler } from '@api/forum/post/application/find/find-post-query.handler'
import { PostResponse } from '@api/forum/post/application/post.response'
import { Post } from '@api/forum/post/domain/post'

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
