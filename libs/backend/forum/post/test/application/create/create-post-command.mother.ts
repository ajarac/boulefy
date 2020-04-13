import { PostCounterMessages, PostId, PostRanking, PostTitle } from '@backend/forum/post/domain';
import { CreatePostCommand } from '@backend/forum/post/application/create/create-post.command';
import {
    PostCounterMessagesMother,
    PostIdMother,
    PostRankingMother,
    PostTitleMother
} from '@backend/forum/post/test/domain';

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
