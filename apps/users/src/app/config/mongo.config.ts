import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'

export const MONGO_DB_CONFIG: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'users',
    entities: [UserSchema]
}
