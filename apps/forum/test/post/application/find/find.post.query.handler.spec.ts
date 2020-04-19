import { FindPostQueryHandler } from '@forum/post/application/find/find-post-query.handler'
import { PostFinder } from '@forum/post/application/find/post-finder'
import { Post, PostRepository } from '@forum/post/domain'
import { PostIdMother, PostMother } from '@forum/test/post/domain'
import { FindPostQuery } from '@forum/post/application/find/find-post-query'
import { FindPostQueryMother } from '@forum/test/post/application/find/find-post-query.mother'
import { PostResponse } from '@forum/post/application/post.response'
import { PostNotFound } from '@forum/post/domain/post-not-found'

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
