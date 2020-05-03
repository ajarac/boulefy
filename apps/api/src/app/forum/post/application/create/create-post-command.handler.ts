import { CommandHandler, ICommandHandler, QueryBus } from '@nestjs/cqrs'
import { PostCreator } from '@api/forum/post/application/create/post-creator'
import { CreatePostCommand } from '@api/forum/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostCounterComments } from '@api/forum/post/domain/post-counter-comments'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostRanking } from '@api/forum/post/domain/post-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'
import { UserName } from '@backend/shared/domain/user/user-name'
import { FindUserQuery } from '@api/users/application/find-user/find-user-query'
import { PostUser } from '@api/forum/post/domain/post-user'
import { UserResponse } from '@api/users/application/user.response'

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler implements ICommandHandler<CreatePostCommand> {
    constructor(private creator: PostCreator, private queryBus: QueryBus) {}

    async execute(command: CreatePostCommand): Promise<void> {
        const id: PostId = new PostId(command.id)
        const title: PostTitle = new PostTitle(command.title)
        const content: PostContent = new PostContent(command.content)
        const counterComments: PostCounterComments = new PostCounterComments(0)
        const ranking: PostRanking = new PostRanking(0)
        const user: PostUser = await this.getPostUser(command.userId)

        return this.creator.create(id, title, content, counterComments, ranking, user)
    }

    private async getPostUser(userId: string): Promise<PostUser> {
        const { id, username }: UserResponse = await this.queryBus.execute(new FindUserQuery(userId))
        return new PostUser(new UserId(id), new UserName(username))
    }
}
