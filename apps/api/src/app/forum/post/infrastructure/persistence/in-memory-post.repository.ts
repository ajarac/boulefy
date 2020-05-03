import { Injectable } from '@nestjs/common'
import { PostId } from '../../../shared/domain/post-id'
import { PostRepository } from '../../domain/post.repository'
import { Post } from '../../domain/post'

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

    async update(post: Post): Promise<void> {
        this.posts.set(post.id.value, post)
    }
}
