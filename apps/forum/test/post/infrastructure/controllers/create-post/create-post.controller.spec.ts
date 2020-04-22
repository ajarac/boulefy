import { Test } from '@nestjs/testing'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

import { Post } from '@forum/post/domain'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { PostIdMother, PostTitleMother } from '@forum/test/post/domain'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { MONGO_DB_TESTING_CONFIG } from '@forum/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { MongoPostRepository } from '@forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { CreatePostController } from '@forum/post/infrastructure/controllers/create-post.controller'
import { CreatePostCommandHandler } from '@forum/post/application/create/create-post-command.handler'
import { PostCreator } from '@forum/post/application/create/post-creator'

xdescribe('CreatePostController', () => {
    let controller: CreatePostController
    let connection: Connection
    let mongoPostRepository: MongoPostRepository

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CqrsModule, TypeOrmModule.forRoot(MONGO_DB_TESTING_CONFIG), TypeOrmModule.forFeature([PostSchema])],
            controllers: [CreatePostController],
            providers: [
                PostCreator,
                CreatePostCommandHandler,
                {
                    provide: 'PostRepository',
                    useClass: MongoPostRepository
                }
            ]
        }).compile()

        connection = moduleRef.get<Connection>(Connection)
        controller = moduleRef.get<CreatePostController>(CreatePostController)
        mongoPostRepository = moduleRef.get<MongoPostRepository>('PostRepository')
    })

    beforeEach(async () => {
        await connection.dropDatabase()
    })

    afterAll(async () => {
        await connection.dropDatabase()
        await connection.close()
    })

    it('should create a valid post', async () => {
        const event = {
            id: PostIdMother.random().value,
            title: PostTitleMother.random().value,
            userId: UserIdMother.random().value
        }

        await controller.createPost(event)

        const post: Post = await mongoPostRepository.search(PostIdMother.create(event.id))

        expect(post.id.value).toEqual(event.id)
        expect(post.title.value).toEqual(event.title)
        expect(post.userId.value).toEqual(event.userId)
    })
})
