import { Test } from '@nestjs/testing'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import * as request from 'supertest'
import { of } from 'rxjs'
import { HttpStatus, INestApplication } from '@nestjs/common'
import { mongoConfig } from '@api/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@api/post/infrastructure/persistence/mongo/command/mongo-post.repository'
import { PostRepository } from '@api/post/domain/post.repository'
import { PostCreator } from '@api/post/application/create/post-creator'
import { PostContentMother } from '@api/test/post/domain/post-content.mother'
import { CreatePostCommandHandler } from '@api/post/application/create/create-post-command.handler'
import { CreatePostController } from '@api/post/infrastructure/controllers/create-post.controller'
import { PostTitleMother } from '@api/test/post/domain/post-title.mother'
import { PostIdMother } from '@api/test/post/domain/post-id.mother'
import { ClientProxy } from '@nestjs/microservices'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { AuthGuard } from '@api/shared/infrastructure/guards/auth.guard'
import { Post } from '@api/post/domain/post'

describe('CreatePostController', () => {
    let app: INestApplication
    let controller: CreatePostController
    let connection: Connection
    let mongoPostRepository: PostRepository
    let clientProxyMock

    beforeAll(async () => {
        const Mock = jest.fn<Partial<ClientProxy>, []>(() => ({
            send: jest.fn()
        }))
        clientProxyMock = new Mock()
        const [moduleRef] = await Promise.all([
            Test.createTestingModule({
                imports: [CqrsModule, TypeOrmModule.forRoot(mongoConfig('createPostTest')), TypeOrmModule.forFeature([PostSchema])],
                controllers: [CreatePostController],
                providers: [
                    PostCreator,
                    CreatePostCommandHandler,
                    {
                        provide: PostRepository,
                        useClass: MongoPostRepository
                    },
                    AuthGuard,
                    {
                        provide: 'FORUM_SERVICE',
                        useValue: clientProxyMock
                    }
                ]
            }).compile()
        ])

        app = moduleRef.createNestApplication()
        connection = moduleRef.get<Connection>(Connection)
        controller = moduleRef.get<CreatePostController>(CreatePostController)
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

    test('POST Create post', () => {
        const id = PostIdMother.random().value
        const body = {
            title: PostTitleMother.random(),
            content: PostContentMother.random()
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
            title: PostTitleMother.random(),
            content: PostContentMother.random()
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
        expect(post.user.value).toEqual(request.user.sub)
    })
})
