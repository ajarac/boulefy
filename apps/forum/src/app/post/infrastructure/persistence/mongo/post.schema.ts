import { Column, Entity, Index, ObjectIdColumn, PrimaryColumn } from 'typeorm'

@Entity()
export class PostSchema {
    @ObjectIdColumn()
    _id: string

    @Index()
    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    counterComments: number

    @Column()
    ranking: number

    @Column()
    userId: string
}
