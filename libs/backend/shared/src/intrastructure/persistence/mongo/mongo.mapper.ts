import { MongoSchema } from '@backend/shared/intrastructure/persistence/mongo/mongoSchema'

export interface MongoMapper<T> {
    fromSchema(schema: MongoSchema): T

    toSchema(item: T): MongoSchema
}
