import { CreatePostCommandHandler } from '@forum/post/application/create/create-post-command.handler'
import { PostCreator } from '@forum/post/application/create/post-creator'
import { Post, PostRepository } from '@forum/post/domain'
import { PostMother } from '@forum/test/post/domain'
import { CreatePostCommandMother } from '@forum/test/post/application/create/create-post-command.mother'
import { CreatePostCommand } from '@forum/post/application/create/create-post-command'

describe('CreatePostCommandHandler', () => {
    let handler: CreatePostCommandHandler
    let postCreator: PostCreator
    let repositoryMock

    beforeEach(() => {
        const Mock = jest.fn<Partial<PostRepository>, []>(() => ({
            search: jest.fn(),
            save: jest.fn().mockReturnValue(null)
        }))

        repositoryMock = new Mock()

        postCreator = new PostCreator(repositoryMock)
        handler = new CreatePostCommandHandler(postCreator)
    })

    test('should create a new post', async () => {
        repositoryMock.search.mockReturnValue(null)

        const command: CreatePostCommand = CreatePostCommandMother.random()
        const post: Post = PostMother.fromRequest(command)
        await handler.execute(command)

        expect(repositoryMock.save).toHaveBeenCalledWith(post)
    })

    test('should not create a post existed', async () => {
        repositoryMock.search.mockReturnValue(PostMother.random())
    })
})
