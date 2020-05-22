import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'

export function mongoConfig(database: string): TypeOrmModuleOptions {
    return {
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database,
        entities: [PostSchema, UserSchema]
    }
}
