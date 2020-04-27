import { Column, Entity, ObjectIdColumn } from 'typeorm'

@Entity()
export class UserSchema {
    @ObjectIdColumn()
    _id: string

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
