import { Inject, Injectable } from '@nestjs/common'
import { EventPublisher } from '@nestjs/cqrs'

import { UserId } from '@backend/shared/domain/user/user-id'
import { PostCounterComments } from '@api/forum/post/domain/post-counter-comments'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostRanking } from '@api/forum/post/domain/post-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'
import { PostRepository } from '@api/forum/post/domain/post.repository'
import { Post } from '@api/forum/post/domain/post'

@Injectable()
export class PostCreator {
    constructor(@Inject('PostRepository') private repository: PostRepository, private publisher: EventPublisher) {}

    async create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        userId: UserId
    ): Promise<void> {
        if (await this.ensurePostNotExist(id)) {
            const post: Post = this.publisher.mergeObjectContext(Post.create(id, title, content, counterComments, ranking, userId))

            await this.repository.save(post)

            post.commit()
        }
    }

    private async ensurePostNotExist(id: PostId): Promise<boolean> {
        const post: Post = await this.repository.search(id)
        return !post
    }
}
