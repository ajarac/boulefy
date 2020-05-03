import { PostCreator } from '@api/forum/post/application/create/post-creator'
import { CreatePostCommand } from '@api/forum/post/application/create/create-post-command'
import { PostMother } from '@api/test/forum/post/domain/post.mother'
import { CreatePostCommandHandler } from '@api/forum/post/application/create/create-post-command.handler'
import { CreatePostCommandMother } from '@api/test/forum/post/application/create/create-post-command.mother'
import { PostRepository } from '@api/forum/post/domain/post.repository'
import { Post } from '@api/forum/post/domain/post'

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
