import { Post, PostCounterMessages, PostId, PostRanking, PostTitle } from '@forum-api/post/domain';
import { PostSchema } from '@forum-api/post/infrastructure/persistence/orm/post.schema';

export class PostAdapter {
    static fromSchema(postSchema: PostSchema): Post {
        const id: PostId = new PostId(postSchema.id);
        const title: PostTitle = new PostTitle(postSchema.title);
        const counterMessages: PostCounterMessages = new PostCounterMessages(postSchema.counterMessages);
        const ranking: PostRanking = new PostRanking(postSchema.ranking);
        return new Post(id, title, counterMessages, ranking);
    }

    static toSchema(post: Post): PostSchema {
        const postSchema: PostSchema = new PostSchema();
        postSchema.id = post.id.value;
        postSchema.title = post.title.value;
        postSchema.counterMessages = post.counterMessages.value;
        postSchema.ranking = post.ranking.value;
        return postSchema;
    }
}
