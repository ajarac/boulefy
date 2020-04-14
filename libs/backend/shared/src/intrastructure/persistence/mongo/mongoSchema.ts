import { Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm'

@Entity()
export abstract class MongoSchema {
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string
}
