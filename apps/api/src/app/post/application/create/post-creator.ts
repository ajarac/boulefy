import { Injectable } from '@nestjs/common'
import { EventPublisher } from '@nestjs/cqrs'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostId } from '@api/shared/domain/post/post-id'
import { PostRepository } from '@api/post/domain/post.repository'
import { Post } from '@api/post/domain/post'
import { UserId } from '@api/shared/domain/user/user-id'
import { GroupId } from '@api/shared/domain/group/group-id'

@Injectable()
export class PostCreator {
    constructor(private repository: PostRepository, private publisher: EventPublisher) {}

    async create(id: PostId, title: PostTitle, content: PostContent, userId: UserId, groupId: GroupId): Promise<Post> {
        const post: Post = this.publisher.mergeObjectContext(Post.create({ id, title, content, userId, groupId }))

        await this.repository.save(post)

        post.commit()

        return post
    }
}
