import { CreatePostCommandHandler } from '@forum/../../../../../src/forum/post/application/create/create-post-command.handler'
import { PostCreator } from '@forum/../../../../../src/forum/post/application/create/post-creator'
import { CreatePostCommandMother } from '@forum/test/forum/post/application/create/create-post-command.mother'
import { CreatePostCommand } from '@forum/../../../../../src/forum/post/application/create/create-post-command'
import { PostMother } from '@forum/test/forum/post/domain/post.mother'
import { PostRepository } from '@forum/../../../../../src/forum/post/domain/post.repository'
import { Post } from '@forum/../../../../../src/forum/post/domain/post'

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

        postCreator = new PostCreator(repositoryMock, null)
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
