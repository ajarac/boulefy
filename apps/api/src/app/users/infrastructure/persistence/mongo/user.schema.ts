import { Column, Entity, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity()
export class UserSchema {
    @ObjectIdColumn()
    _id: MUUID

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column({ unique: true })
    email: string

    @Column()
    counterComments: number

    @Column()
    counterPosts: number

    @Column()
    createdDate: Date
}
