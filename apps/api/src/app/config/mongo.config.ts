import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { CommentSchema } from '@api/forum/comment/infrastructure/persistence/mongo/comment.schema'
import { PostSchema } from '@api/forum/post/infrastructure/persistence/mongo/post.schema'

export const MONGO_DB_CONFIG: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '27017'),
    database: 'agora',
    entities: [UserSchema, PostSchema, CommentSchema]
}
