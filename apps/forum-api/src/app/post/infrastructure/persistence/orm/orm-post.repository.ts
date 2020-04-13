import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

import { PostAdapter } from '@forum-api/post/infrastructure/persistence/orm/post.adapter';
import { Post, PostId, PostRepository } from '@forum-api/post/domain';
import { PostSchema } from '@forum-api/post/infrastructure/persistence/orm/post.schema';

@Injectable()
export class OrmPostRepository extends PostRepository {
    constructor(@InjectRepository(PostSchema) private repository: Repository<PostSchema>) {
        super();
    }

    async save(post: Post): Promise<void> {
        const postSchema: PostSchema = PostAdapter.toSchema(post);
        postSchema._id = ObjectId.createFromTime(Date.now()).toHexString();
        await this.repository.save(postSchema);
    }

    async search(id: PostId): Promise<Post> {
        const schema: PostSchema = await this.repository.findOne({ id: id.value });
        return schema ? PostAdapter.fromSchema(schema) : null;
    }

    async searchAll(): Promise<Array<Post>> {
        const schemas: Array<PostSchema> = await this.repository.find();
        return schemas.map((schema: PostSchema) => PostAdapter.fromSchema(schema));
    }

}
