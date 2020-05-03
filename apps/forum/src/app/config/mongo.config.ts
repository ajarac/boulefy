import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { CommentSchema } from '@forum/comment/infrastructure/persistence/mongo/comment.schema'

export const MONGO_DB_CONFIG: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '27017'),
    database: 'forum',
    entities: [PostSchema, CommentSchema]
}
