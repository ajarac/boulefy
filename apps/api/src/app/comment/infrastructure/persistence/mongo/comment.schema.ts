import { Column, Entity, Index, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity()
export class CommentSchema {
    @ObjectIdColumn()
    _id: MUUID

    @Column()
    content: string

    @Column()
    userId: MUUID

    @Index()
    @Column()
    postId: MUUID

    @Column()
    ranking: number
}
