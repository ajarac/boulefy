import { Column, Entity, ObjectIdColumn } from 'typeorm'

@Entity()
export class PostSchema {
    @ObjectIdColumn()
    _id: string

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    counterComments: number

    @Column()
    ranking: number

    @Column()
    userId: string
}
