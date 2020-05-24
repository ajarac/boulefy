import { PostCreator } from '@api/post/application/create/post-creator'
import { CreatePostCommand } from '@api/post/application/create/create-post-command'
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
            save: jest.fn().mockReturnValue(null)
        }))
        repositoryMock = new MockRepository()
        publisherMock = {
            mergeObjectContext: (value) => value
        }

        postCreator = new PostCreator(repositoryMock, publisherMock)
        handler = new CreatePostCommandHandler(postCreator)
    })

    test('should call repository save with a new post', async () => {
        const command: CreatePostCommand = CreatePostCommandMother.random()

        const post: Post = await handler.execute(command)

        expect(repositoryMock.save).toHaveBeenCalledWith(post)
    })

    test('should create a new post', async () => {
        const command: CreatePostCommand = CreatePostCommandMother.random()

        const post: Post = await handler.execute(command)

        expect(post.id.value).toBe(command.id)
        expect(post.title.value).toBe(command.title)
        expect(post.content.value).toBe(command.content)
        expect(post.userId.value).toBe(command.userId)
        expect(post.groupId.value).toBe(command.groupId)
    })
})
