import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { PostCounterMessages, PostId, PostRanking, PostTitle } from '@backend/forum/post/domain';
import { PostCreator } from '@backend/forum/post/application/create/post-creator';
import { CreatePostCommand } from '@backend/forum/post/application/create/create-post.command';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {

  constructor(private creator: PostCreator) {
  }

  async execute(command: CreatePostCommand): Promise<void> {
    const id: PostId = new PostId(command.id);
    const title: PostTitle = new PostTitle(command.title);
    const counterMessages: PostCounterMessages = new PostCounterMessages(command.counterMessages);
    const ranking: PostRanking = new PostRanking(command.ranking);

    return this.creator.create(id, title, counterMessages, ranking);
  }

}
