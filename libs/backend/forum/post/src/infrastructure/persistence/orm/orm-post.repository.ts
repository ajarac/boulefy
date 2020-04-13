import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

import { Post, PostId, PostRepository } from '@backend/forum/post/domain';
import { PostSchema } from '@backend/forum/post/infrastructure/persistence/orm/post.schema';
import { PostAdapter } from '@backend/forum/post/infrastructure/persistence/orm/post.adapter';

@Injectable()
export class OrmPostRepository extends PostRepository {
    constructor(@InjectRepository(PostSchema) private repository: Repository<PostSchema>) {
        super();
    }

    async save(post: Post): Promise<void> {
        const postSchema: PostSchema = PostAdapter.toSchema(post);
        postSchema._id = ObjectID.createFromTime(Date.now());
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
