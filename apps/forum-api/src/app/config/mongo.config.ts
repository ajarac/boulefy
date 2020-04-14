import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { PostSchema } from '@forum-api/post/infrastructure/persistence/mongo/post.schema'

export const MONGO_DB_CONFIG: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'forum',
    entities: [PostSchema]
}
