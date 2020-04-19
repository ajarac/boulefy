import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'

export const MONGO_DB_TESTING_CONFIG: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    entities: [PostSchema]
}
