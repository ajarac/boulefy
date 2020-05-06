import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity()
export class PostSchema extends BaseEntity {
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
    userId: MUUID

    @Column()
    createdDate: Date

    @Column()
    updatedDate: Date
}
