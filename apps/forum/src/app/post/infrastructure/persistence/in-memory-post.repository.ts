import { Injectable } from '@nestjs/common'
import { PostId } from '@forum/shared/domain/post-id'
import { PostRepository } from '@forum/post/domain/post.repository'
import { Post } from '@forum/post/domain/post'


@Injectable()
export class InMemoryPostRepository implements PostRepository {
    private readonly posts: Map<string, Post> = new Map<string, Post>()

    async save(post: Post): Promise<void> {
        this.posts.set(post.id.value, post)
    }

    async search(id: PostId): Promise<Post> {
        return this.posts.get(id.value)
    }

    async searchAll(): Promise<Array<Post>> {
        return Array.from(this.posts.values())
    }
}
