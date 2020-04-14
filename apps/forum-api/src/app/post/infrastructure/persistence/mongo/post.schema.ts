import { Column, Entity, PrimaryColumn } from 'typeorm'
import { MongoSchema } from '@backend/shared/intrastructure/persistence/mongo/mongoSchema'

@Entity()
export class PostSchema extends MongoSchema {
    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    counterComments: number

    @Column()
    ranking: number
}
