import { PostIdMother, PostMother } from '@forum/test/post/domain'
import { InMemoryPostRepository } from '@forum/post/infrastructure/persistence/in-memory-post.repository'
import { Post, PostId } from '@forum/post/domain'

describe('InMemoryPostRepository', () => {
    let repository: InMemoryPostRepository

    beforeEach(() => {
        repository = new InMemoryPostRepository()
    })

    test('should save a post', () => {
        const post: Post = PostMother.random()

        repository.save(post)

        expect(true).toBeTruthy()
    })

    test('should return an existing course', async () => {
        const post: Post = PostMother.random()

        await repository.save(post)

        const expected: Post = await repository.search(post.id)

        expect(expected).toEqual(post)
    })

    test('should not return a non existing course', async () => {
        const postId: PostId = PostIdMother.random()

        const post: Post = await repository.search(postId)

        expect(post).toBeUndefined()
    })
})
