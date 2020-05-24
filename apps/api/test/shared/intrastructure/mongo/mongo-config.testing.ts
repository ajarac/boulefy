import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { EntitySchema } from 'typeorm'

export function mongoConfig(database: string, entities: ((Function | string | EntitySchema<any>))[]): TypeOrmModuleOptions {
    return {
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database,
        entities
    }
}
