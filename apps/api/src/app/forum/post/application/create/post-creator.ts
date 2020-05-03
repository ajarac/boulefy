import { Inject, Injectable } from '@nestjs/common'

import { UserId } from '@backend/shared/domain/user/user-id'
import { EventPublisher } from '@nestjs/cqrs'
import { PostId } from '../../../shared/domain/post-id'
import { PostCounterComments } from '../../domain/post-counter-comments'
import { PostContent } from '../../domain/post-content'
import { PostTitle } from '../../domain/post-title'
import { PostRanking } from '../../domain/post-ranking'
import { PostRepository } from '../../domain/post.repository'
import { Post } from '../../domain/post'

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
