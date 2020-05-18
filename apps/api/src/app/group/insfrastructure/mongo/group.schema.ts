import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity({ synchronize: true })
export class GroupSchema extends BaseEntity {
    @ObjectIdColumn()
    _id: MUUID

    @Column({ unique: true })
    name: string

    @Column()
    description: string

    @Column()
    userId: MUUID

    @Column()
    counterPosts: number

    @Column()
    counterUsers: number

    @Column()
    createdDate: Date
}
