import { Column, Entity, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity()
export class PostSchema {
    @ObjectIdColumn()
    _id: MUUID

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    counterComments: number

    @Column()
    ranking: number

    @Column()
    user: {
        id: string
        username: string
    }
}
