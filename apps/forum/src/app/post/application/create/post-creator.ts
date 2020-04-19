import { Inject, Injectable } from '@nestjs/common'
import { Post, PostCounterComments, PostId, PostRanking, PostRepository, PostTitle } from '@forum/post/domain'
import { UserId } from '@backend/shared/domain/user/user-id'

@Injectable()
export class PostCreator {
    constructor(@Inject('PostRepository') private repository: PostRepository) {}

    async create(id: PostId, title: PostTitle, counterComments: PostCounterComments, ranking: PostRanking, userId: UserId): Promise<void> {
        if (await this.ensurePostNotExist(id)) {
            const post: Post = Post.create(id, title, counterComments, ranking, userId)

            await this.repository.save(post)

            post.commit()
        }
    }

    private async ensurePostNotExist(id: PostId): Promise<boolean> {
        const post: Post = await this.repository.search(id)
        return !post
    }
}
