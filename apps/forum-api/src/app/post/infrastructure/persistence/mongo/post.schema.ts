import { Column, Entity } from 'typeorm'
import { MongoSchema } from '@backend/shared/intrastructure/persistence/mongo/mongoSchema'

@Entity()
export class PostSchema extends MongoSchema {
    @Column()
    title: string

    @Column()
    counterComments: number

    @Column()
    ranking: number

    @Column()
    userId: string
}
