import { Test } from '@nestjs/testing'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import * as request from 'supertest'
import { of } from 'rxjs'

import { Post } from '@forum/post/domain'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { PostContentMother, PostIdMother, PostTitleMother } from '@forum/test/post/domain'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { mongoConfig } from '@forum/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { CreatePostController } from '@forum/post/infrastructure/controllers/create-post.controller'
import { CreatePostCommandHandler } from '@forum/post/application/create/create-post-command.handler'
import { PostCreator } from '@forum/post/application/create/post-creator'
import { HttpStatus, INestApplication } from '@nestjs/common'
import { AuthGuard } from '@forum/post/infrastructure/guards/auth.guard'
import { ClientProxy } from '@nestjs/microservices'
import { UserResponseMother } from '@backend/shared/test/application/user/user-response.mother'
import { UserResponse } from '@users/users/application/user.response'

describe('CreatePostController', () => {
    let app: INestApplication
    let controller: CreatePostController
    let connection: Connection
    let mongoPostRepository: MongoPostRepository
    let clientProxyMock

    beforeAll(async () => {
        const Mock = jest.fn<Partial<ClientProxy>, []>(() => ({
            send: jest.fn()
        }))
        clientProxyMock = new Mock()
        const moduleRef = await Test.createTestingModule({
            imports: [CqrsModule, TypeOrmModule.forRoot(mongoConfig('createPostTest')), TypeOrmModule.forFeature([PostSchema])],
            controllers: [CreatePostController],
            providers: [
                PostCreator,
                CreatePostCommandHandler,
                {
                    provide: 'PostRepository',
                    useClass: MongoPostRepository
                },
                AuthGuard,
                {
                    provide: 'FORUM_SERVICE',
                    useValue: clientProxyMock
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
            content: PostContentMother.random().value
        }
        const userRequest = { sub: id }
        clientProxyMock.send.mockReturnValue(of(userRequest))

        return request(app.getHttpServer())
            .post('/posts/' + id)
            .set({ authorization: 'Bearer tokensuperseguro' })
            .send(body)
            .expect(HttpStatus.ACCEPTED)
    })

    test('POST Create a valid post', async () => {
        const id = PostIdMother.random().value
        const body = {
            title: PostTitleMother.random().value,
            content: PostContentMother.random().value
        }
        const request = {
            user: {
                sub: id
            }
        }

        await controller.createPost(id, body, request)

        const post: Post = await mongoPostRepository.search(PostIdMother.create(id))

        expect(post.id.value).toEqual(id)
        expect(post.title.value).toEqual(body.title)
        expect(post.content.value).toEqual(body.content)
        expect(post.userId.value).toEqual(request.user.sub)
    })
})
