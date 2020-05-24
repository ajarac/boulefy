import { HttpStatus, INestApplication } from '@nestjs/common'
import { Connection } from 'typeorm'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'

import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FindPostsController } from '@api/post/infrastructure/controllers/find-posts.controller'
import { PostMother } from '@api/test/post/domain/post.mother'
import { MongoPostRepository } from '@api/post/infrastructure/persistence/mongo/command/mongo-post.repository'
import { FindPostsQueryHandler } from '@api/post/application/findAll/find-posts-query.handler'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { PostRepository } from '@api/post/domain/post.repository'
import { PostFinderAll } from '@api/post/application/findAll/post-finder-all'
import { Post } from '@api/post/domain/post'
import { MongoPostFinderAllQuery } from '@api/post/infrastructure/persistence/mongo/query/mongo-post-finder-all.query'
import { PostResponse } from '@shared/models/post/post.response'
import { PostResponseMother } from '@api/test/post/application/post-response.mother'
import { mongoConfig } from '@api/test/shared/intrastructure/mongo/mongo-config.testing'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { UserSchemaMother } from '@api/test/shared/intrastructure/user/user-schema.mother'
import { User } from '@api/users/domain/user'
import { UserMapper } from '@api/users/infrastructure/persistence/mongo/command/user.mapper'
import { Pagination } from '@shared/models/pagination/pagination'

describe('FindPostsController', () => {
    let app: INestApplication
    let connection: Connection
    let mongoPostRepository: PostRepository

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                CqrsModule,
                TypeOrmModule.forRoot(mongoConfig('findPostsTest', [PostSchema, UserSchema])),
                TypeOrmModule.forFeature([PostSchema])
            ],
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

    test('Get Find Posts paginated', async () => {
        const userSchema: UserSchema = await UserSchemaMother.saveRandom()
        const user: User = UserMapper.fromSchema(userSchema)
        const list: Post[] = new Array(10).fill('').map(() => PostMother.random({ userId: user.id }))
        for (const post of list) {
            await mongoPostRepository.save(post)
        }

        const response: request.Response = await request(app.getHttpServer()).get('/posts')
        const responseBody: PostResponse[] = JSON.parse(response.text)

        expect(response.status).toBe(HttpStatus.OK)
        expect(responseBody).toEqual({
            metadata: { page: 1, limit: 25, total: list.length },
            results: list.map((post: Post) =>
                PostResponseMother.fromAggregate(post, {
                    id: user.id.value,
                    username: user.username.value
                })
            )
        } as Pagination<PostResponse>)
    })

    test('Get Find Posts empty list', () => {
        return request(app.getHttpServer())
            .get('/posts')
            .expect(HttpStatus.OK)
            .expect({ results: [] } as Pagination<PostResponse>)
    })
})
