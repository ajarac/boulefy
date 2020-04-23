import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'

export const MONGO_DB_CONFIG: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '27017'),
    database: 'users',
    entities: [UserSchema]
}
