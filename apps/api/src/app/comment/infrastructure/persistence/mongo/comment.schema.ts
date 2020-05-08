import { Column, Entity, Index, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity({ synchronize: true })
export class CommentSchema {
    @ObjectIdColumn()
    _id: MUUID

    @Column()
    content: string

    @Column()
    userId: MUUID

    @Column()
    @Index()
    postId: MUUID

    @Column()
    ranking: number

    @Column()
    createdDate: Date

    @Column()
    updatedDate: Date
}
