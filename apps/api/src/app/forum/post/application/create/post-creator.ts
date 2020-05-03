import { Injectable } from '@nestjs/common'
import { EventPublisher } from '@nestjs/cqrs'
import { PostCounterComments } from '@api/forum/post/domain/post-counter-comments'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostRanking } from '@api/forum/post/domain/post-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'
import { PostRepository } from '@api/forum/post/domain/post.repository'
import { Post } from '@api/forum/post/domain/post'
import { PostUser } from '@api/forum/post/domain/post-user'

@Injectable()
export class PostCreator {
    constructor(private repository: PostRepository, private publisher: EventPublisher) {}

    async create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        userId: PostUser
    ): Promise<void> {
        const post: Post = this.publisher.mergeObjectContext(Post.create(id, title, content, counterComments, ranking, userId))

        await this.repository.save(post)

        post.commit()
    }
}
