import { Injectable } from '@nestjs/common'
import { EventPublisher } from '@nestjs/cqrs'
import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post-id'
import { PostRepository } from '@api/post/domain/post.repository'
import { Post } from '@api/post/domain/post'
import { UserId } from '@backend/shared/domain/user/user-id'

@Injectable()
export class PostCreator {
    constructor(private repository: PostRepository, private publisher: EventPublisher) {}

    async create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        userId: UserId
    ): Promise<void> {
        const post: Post = this.publisher.mergeObjectContext(Post.create(id, title, content, counterComments, ranking, userId))

        await this.repository.save(post)

        post.commit()
    }
}
