import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { CommentSchema } from '@api/comment/infrastructure/persistence/mongo/comment.schema'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'

export const MONGO_DB_CONFIG: TypeOrmModuleOptions = {
    type: 'mongodb',
    useNewUrlParser: true,
    host: process.env.DB_HOST || 'localhost:27017',
    database: 'agora',
    entities: [UserSchema, PostSchema, CommentSchema]
}
