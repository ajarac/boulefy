import { Injectable } from '@nestjs/common'
import { Post, PostId, PostRepository } from '@forum-api/post/domain'

@Injectable()
export class InMemoryPostRepository extends PostRepository {
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
