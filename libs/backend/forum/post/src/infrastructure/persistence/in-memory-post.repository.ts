import { Injectable } from '@nestjs/common';

import { Post, PostId, PostRepository } from '../../domain';

@Injectable()
export class InMemoryPostRepository extends PostRepository {
    private readonly posts: Map<string, Post> = new Map<string, Post>();

    save(post: Post): void {
        this.posts.set(post.id.value, post);
    }

    search(id: PostId): Post {
        return this.posts.get(id.value);
    }

    searchAll(): Array<Post> {
        return Array.from(this.posts.values());
    }

}
