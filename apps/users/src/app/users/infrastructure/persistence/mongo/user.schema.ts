import { Column, Entity, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity()
export class UserSchema {
    @ObjectIdColumn()
    _id: MUUID

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    counterComments: number

    @Column()
    counterPosts: number
}
