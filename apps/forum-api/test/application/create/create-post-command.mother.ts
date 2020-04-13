import { PostCounterMessages, PostId, PostRanking, PostTitle } from '@forum-api/post/domain';
import { PostCounterMessagesMother, PostIdMother, PostRankingMother, PostTitleMother } from '@forum-api/test/domain';
import { CreatePostCommand } from '@forum-api/post/application/create/create-post-command';

export class CreatePostCommandMother {
    static create(id: PostId, title: PostTitle, counterMessages: PostCounterMessages, ranking: PostRanking): CreatePostCommand {
        return new CreatePostCommand(id.value, title.value, counterMessages.value, ranking.value);
    }

    static random(): CreatePostCommand {
        return CreatePostCommandMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostCounterMessagesMother.random(),
            PostRankingMother.random()
        );
    }
}
