import { FindPostsQueryHandler } from '@forum/../../../../../src/forum/post/application/findAll/find-posts-query.handler'
import { PostFinderAll } from '@forum/../../../../../src/forum/post/application/findAll/post-finder-all'
import { PostResponse } from '@forum/../../../../../src/forum/post/application/post.response'
import { PostMother } from '@forum/test/forum/post/domain/post.mother'
import { PostRepository } from '@forum/../../../../../src/forum/post/domain/post.repository'
import { Post } from '@forum/../../../../../src/forum/post/domain/post'

describe('FindPostsQuery', () => {
    let handler: FindPostsQueryHandler
    let postFinderAll: PostFinderAll
    let repositoryMock

    beforeEach(() => {
        const Mock = jest.fn<Partial<PostRepository>, []>(() => ({
            searchAll: jest.fn()
        }))

        repositoryMock = new Mock()

        postFinderAll = new PostFinderAll(repositoryMock)
        handler = new FindPostsQueryHandler(postFinderAll)
    })

    test('should return a list of valid posts', async () => {
        const list: Array<Post> = new Array(5).map(() => PostMother.random())
        repositoryMock.searchAll.mockReturnValue(list)

        const posts: Array<PostResponse> = await handler.execute()

        expect(posts.length).toBe(5)
        expect(posts).toEqual(list.map((post: Post) => PostResponse.fromAggregate(post)))
    })
})
