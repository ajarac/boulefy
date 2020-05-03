import { InMemoryPostRepository } from '@forum/../../../../../src/forum/post/infrastructure/persistence/in-memory-post.repository'
import { PostMother } from '@forum/test/forum/post/domain/post.mother'
import { PostIdMother } from '@forum/test/forum/post/domain/post-id.mother'
import { PostId } from '@forum/../../../../../src/forum/shared/domain/post-id'
import { Post } from '@forum/../../../../../src/forum/post/domain/post'

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
