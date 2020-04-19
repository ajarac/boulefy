import { PostCreator } from '@forum/post/application/create/post-creator'
import { Post, PostId, PostRepository } from '@forum/post/domain'
import { PostIdMother, PostMother } from '@forum/test/post/domain'

describe('PostCreator', () => {
    let postCreator: PostCreator
    let repositoryMock
    beforeEach(() => {
        const Mock = jest.fn<PostRepository, []>(() => ({
            save: jest.fn(),
            search: jest.fn(),
            searchAll: jest.fn()
        }))
        repositoryMock = new Mock()

        postCreator = new PostCreator(repositoryMock)
    })

    test('should create a valid post', () => {
        repositoryMock.search = jest.fn(async () => await PostMother.random())
        repositoryMock.save = jest.fn(async () => null)
        const post: Post = PostMother.random()

        postCreator.create(post.id, post.title, post.counterComments, post.ranking, post.userId)

        expect(repositoryMock.save).toHaveBeenCalled()
    })
})
