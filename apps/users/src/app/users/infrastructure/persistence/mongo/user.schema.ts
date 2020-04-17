import { Column, Entity } from 'typeorm'
import { MongoSchema } from '@backend/shared/intrastructure/persistence/mongo/mongoSchema'

@Entity()
export class UserSchema extends MongoSchema {
    @Column()
    name: string

    @Column()
    counterComments: number

    @Column()
    counterPosts: number
}
