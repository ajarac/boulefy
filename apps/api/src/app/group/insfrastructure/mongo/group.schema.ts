import { BaseEntity, Entity, ObjectIdColumn } from 'typeorm'
import { MUUID } from 'uuid-mongodb'

@Entity({ synchronize: true })
export class GroupSchema extends BaseEntity {
    @ObjectIdColumn()
    _id: MUUID
}
