import { MongoPostRepository } from '@forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { Test } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import * as faker from 'faker'

import { mongoConfig } from '@forum/test/post/infrastructure/persistence/mongo/mongo.config.testing'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { PostMother } from '@forum/test/post/domain'
import { Post } from '@forum/post/domain'

describe('MongoPostRepository', () => {
    let mongoPostRepository: MongoPostRepository
    let connection: Connection

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [TypeOrmModule.forRoot(mongoConfig('mongoPostTest')), TypeOrmModule.forFeature([PostSchema])],
            providers: [MongoPostRepository]
        }).compile()
        mongoPostRepository = moduleRef.get<MongoPostRepository>(MongoPostRepository)
        connection = moduleRef.get<Connection>(Connection)
    })

    beforeEach(async () => {
        await connection.dropDatabase()
    })

    afterAll(async () => {
        await connection.dropDatabase()
        await connection.close()
    })

    test('should connect to mongodb', () => {
        expect(connection.isConnected).toBeTruthy()
    })

    test('should save a valid post', async () => {
        const post: Post = PostMother.random()

        await mongoPostRepository.save(post)
    })

    test('should return an existing post ', async () => {
        const post: Post = PostMother.random()

        await mongoPostRepository.save(post)

        const response: Post = await mongoPostRepository.search(post.id)

        expect(response).toEqual(post)
    })

    test('should return a list of posts', async () => {
        const count: number = faker.random.number({ min: 5, max: 10 })
        const list: Array<Post> = []
        for (let i = 0; i < count; i++) {
            list.push(PostMother.random())
        }
        for (const post of list) {
            await mongoPostRepository.save(post)
        }

        const response: Array<Post> = await mongoPostRepository.searchAll()

        expect(response.length).toBe(count)
        expect(response).toEqual(list)
    })
})
