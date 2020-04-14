import { Injectable } from '@nestjs/common'
import { Post, PostCounterComments, PostId, PostRanking, PostRepository, PostTitle } from '@forum-api/post/domain'

@Injectable()
export class PostCreator {
    constructor(private repository: PostRepository) {}

    async create(id: PostId, title: PostTitle, counterComments: PostCounterComments, ranking: PostRanking): Promise<void> {
        if (await this.ensurePostNotExist(id)) {
            const post: Post = Post.create(id, title, counterComments, ranking)

            await this.repository.save(post)

            post.commit()
        }
    }

    private async ensurePostNotExist(id: PostId): Promise<boolean> {
        const post: Post = await this.repository.search(id)
        return !post
    }
}
