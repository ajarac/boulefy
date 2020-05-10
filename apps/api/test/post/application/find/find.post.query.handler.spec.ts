import { PostFinder } from '@api/post/application/find/post-finder'
import { PostMother } from '@api/test/post/domain/post.mother'
import { PostNotFound } from '@api/post/domain/post-not-found'
import { FindPostQueryMother } from '@api/test/post/application/find/find-post-query.mother'
import { PostIdMother } from '@api/test/post/domain/post-id.mother'
import { FindPostQuery } from '@api/post/application/find/find-post-query'
import { FindPostQueryHandler } from '@api/post/application/find/find-post-query.handler'
import { PostRepository } from '@api/post/domain/post.repository'
import { Post } from '@api/post/domain/post'
import { PostResponse } from '@shared/models/post/post.response'

describe('FindPostQueryHandler', () => {
    let handler: FindPostQueryHandler
    let postFinder: PostFinder
    let repositoryMock

    beforeEach(() => {
        const Mock = jest.fn<Partial<PostRepository>, []>(() => ({
            search: jest.fn()
        }))

        repositoryMock = new Mock()

        postFinder = new PostFinder(repositoryMock)
        handler = new FindPostQueryHandler(postFinder)
    })

    test('should return a valid Post', async () => {
        const post: Post = PostMother.random()
        const query: FindPostQuery = FindPostQueryMother.create(post.id)
        repositoryMock.search.mockImplementation(async () => post)

        const postResponse: PostResponse = await handler.execute(query)

        expect(postResponse).toEqual(PostResponse.fromAggregate(post))
    })

    test('should return an error of PostNotFound', async () => {
        const query: FindPostQuery = FindPostQueryMother.create(PostIdMother.random())
        repositoryMock.search.mockReturnValue(null)

        try {
            await handler.execute(query)
        } catch (error) {
            expect(error).toBeInstanceOf(PostNotFound)
            expect(error).toHaveProperty('message', `Post with id: ${query.id} not found`)
        }
    })
})
