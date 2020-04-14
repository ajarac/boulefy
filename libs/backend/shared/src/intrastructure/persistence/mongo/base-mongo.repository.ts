import { Repository } from 'typeorm'
import { ObjectId } from 'mongodb'

import { MongoSchema } from '@backend/shared/intrastructure/persistence/mongo/mongoSchema'
import { MongoMapper } from '@backend/shared/intrastructure/persistence/mongo/mongo.mapper'
import { Identifier } from '@backend/shared/domain/identifier'

export abstract class BaseMongoRepository<T> {
    protected constructor(protected repository: Repository<MongoSchema>, protected mapper: MongoMapper<T>) {}

    async save(item: T): Promise<void> {
        const schema: MongoSchema = this.mapper.toSchema(item)
        schema._id = ObjectId.createFromTime(Date.now()).toHexString()
        await this.repository.save(schema)
    }

    async search(id: Identifier): Promise<T> {
        const schema: MongoSchema = await this.repository.findOne({ id: id.value })
        return schema ? this.mapper.fromSchema(schema) : null
    }

    async searchAll(): Promise<Array<T>> {
        const schemas: Array<MongoSchema> = await this.repository.find()
        return schemas.map((schema: MongoSchema) => this.mapper.fromSchema(schema))
    }
}
