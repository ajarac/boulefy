import { HttpStatus, INestApplication } from '@nestjs/common'
import { Connection } from 'typeorm'
import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { PostFinder } from '@api/post/application/find/post-finder'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FindPostController } from '@api/post/infrastructure/controllers/find-post.controller'
import { mongoConfig } from '@api/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@api/post/infrastructure/persistence/mongo/command/mongo-post.repository'
import { CqrsModule } from '@nestjs/cqrs'
import { PostId } from '@api/shared/domain/post/post-id'
import { PostRepository } from '@api/post/domain/post.repository'
import { PostMother } from '@api/test/post/domain/post.mother'
import { PostIdMother } from '@api/test/shared/domain/post/post-id.mother'
import { HttpError } from '@shared/http.error'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { FindPostQueryHandler } from '@api/post/application/find/find-post-query.handler'
import { Post } from '@api/post/domain/post'
import { MongoPostFinderQuery } from '@api/post/infrastructure/persistence/mongo/query/mongo-post-finder.query'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { from } from 'uuid-mongodb'
import { PostResponseMother } from '@api/test/post/application/post-response.mother'
import { UserSchemaMother } from '@api/test/shared/intrastructure/user/user-schema.mother'

describe('FindPostController', () => {
    let app: INestApplication
    let connection: Connection
    let mongoPostRepository: PostRepository

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CqrsModule, TypeOrmModule.forRoot(mongoConfig('findPostTest')), TypeOrmModule.forFeature([PostSchema])],
            controllers: [FindPostController],
            providers: [
                {
                    provide: PostFinder,
                    useClass: MongoPostFinderQuery
                },
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
        const userSchema: UserSchema = UserSchemaMother.randomById(post.userId)
        await userSchema.save()

        const response: request.Response = await request(app.getHttpServer())
            .get('/posts/' + post.id.value)
            .expect(HttpStatus.OK)

        expect(JSON.parse(response.text)).toEqual(
            PostResponseMother.fromAggregate(post, { id: userSchema._id.toString(), username: userSchema.username })
        )
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
