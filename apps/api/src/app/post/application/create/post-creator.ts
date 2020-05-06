import { Injectable } from '@nestjs/common'
import { EventPublisher } from '@nestjs/cqrs'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostId } from '@api/shared/domain/post-id'
import { PostRepository } from '@api/post/domain/post.repository'
import { Post } from '@api/post/domain/post'
import { UserId } from '@backend/shared/domain/user/user-id'

@Injectable()
export class PostCreator {
    constructor(private repository: PostRepository, private publisher: EventPublisher) {}

    async create(id: PostId, title: PostTitle, content: PostContent, userId: UserId): Promise<void> {
        const post: Post = this.publisher.mergeObjectContext(Post.create(id, title, content, userId))

        await this.repository.save(post)

        post.commit()
    }
}
