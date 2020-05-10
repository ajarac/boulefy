import { PostCreator } from '@api/post/application/create/post-creator'
import { CreatePostCommand } from '@api/post/application/create/create-post-command'
import { PostMother } from '@api/test/post/domain/post.mother'
import { CreatePostCommandHandler } from '@api/post/application/create/create-post-command.handler'
import { CreatePostCommandMother } from '@api/test/post/application/create/create-post-command.mother'
import { PostRepository } from '@api/post/domain/post.repository'
import { Post } from '@api/post/domain/post'

describe('CreatePostCommandHandler', () => {
    let handler: CreatePostCommandHandler
    let postCreator: PostCreator
    let repositoryMock
    let publisherMock

    beforeEach(() => {
        const MockRepository = jest.fn<Partial<PostRepository>, []>(() => ({
            search: jest.fn(),
            save: jest.fn().mockReturnValue(null)
        }))
        repositoryMock = new MockRepository()
        publisherMock = {
            mergeObjectContext: (value) => value
        }

        postCreator = new PostCreator(repositoryMock, publisherMock)
        handler = new CreatePostCommandHandler(postCreator)
    })

    test('should create a new post', async () => {
        repositoryMock.search.mockReturnValue(null)

        const command: CreatePostCommand = CreatePostCommandMother.random()
        const post: Post = PostMother.fromRequest(command)
        await handler.execute(command)

        expect(repositoryMock.save).toHaveBeenCalledWith(post)
    })
})
