import { CreatePostCommand } from '../../../src/application/create/create-post.command';
import { PostCounterMessages, PostId, PostRanking, PostTitle } from '../../../src/domain';
import { PostCounterMessagesMother, PostIdMother, PostRankingMother, PostTitleMother } from '../../domain';

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
