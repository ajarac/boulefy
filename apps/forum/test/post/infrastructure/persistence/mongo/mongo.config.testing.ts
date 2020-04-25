import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'

export function mongoConfig(database: string): TypeOrmModuleOptions {
    return {
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database,
        entities: [PostSchema]
    }
}
