import { Test } from '@nestjs/testing'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as request from 'supertest'
import { Connection } from 'typeorm'

import { Post } from '@forum/post/domain'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { PostIdMother, PostTitleMother } from '@forum/test/post/domain'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { mongoConfig } from '@forum/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { CreatePostController } from '@forum/post/infrastructure/controllers/create-post.controller'
import { CreatePostCommandHandler } from '@forum/post/application/create/create-post-command.handler'
import { PostCreator } from '@forum/post/application/create/post-creator'
import { HttpStatus, INestApplication } from '@nestjs/common'

describe('CreatePostController', () => {
    let app: INestApplication
    let controller: CreatePostController
    let connection: Connection
    let mongoPostRepository: MongoPostRepository

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ CqrsModule, TypeOrmModule.forRoot(mongoConfig('createPostTest')), TypeOrmModule.forFeature([ PostSchema ]) ],
            controllers: [ CreatePostController ],
            providers: [
                PostCreator,
                CreatePostCommandHandler,
                {
                    provide: 'PostRepository',
                    useClass: MongoPostRepository
                }
            ]
        }).compile()

        app = moduleRef.createNestApplication()
        connection = moduleRef.get<Connection>(Connection)
        controller = moduleRef.get<CreatePostController>(CreatePostController)
        mongoPostRepository = moduleRef.get<MongoPostRepository>('PostRepository')
        await app.init()
    })

    beforeEach(async () => {
        await connection.dropDatabase()
    })

    afterAll(async () => {
        await connection.dropDatabase()
        await connection.close()
    })

    test('POST Create post', () => {
        const id = PostIdMother.random().value
        const body = {
            title: PostTitleMother.random().value,
            userId: UserIdMother.random().value
        }
        return request(app.getHttpServer())
            .post('/posts/' + id)
            .send(body)
            .expect(HttpStatus.ACCEPTED)
    })

    test('POST Create a valid post', async () => {
        const id = PostIdMother.random().value
        const body = {
            title: PostTitleMother.random().value,
            userId: UserIdMother.random().value
        }

        await controller.createPost(id, body)

        const post: Post = await mongoPostRepository.search(PostIdMother.create(id))

        expect(post.id.value).toEqual(id)
        expect(post.title.value).toEqual(body.title)
        expect(post.userId.value).toEqual(body.userId)
    })
})
