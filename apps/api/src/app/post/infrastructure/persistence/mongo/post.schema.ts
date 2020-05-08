import { BaseEntity, Column, Entity, Index, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity({ synchronize: true })
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
    @Index()
    userId: MUUID

    @Column()
    createdDate: Date

    @Column()
    updatedDate: Date
}
