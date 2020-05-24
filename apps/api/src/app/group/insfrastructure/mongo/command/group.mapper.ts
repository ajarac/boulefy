import { GroupSchema } from '@api/group/insfrastructure/mongo/group.schema'
import { Group } from '@api/group/domain/group'
import { GroupId } from '@api/shared/domain/group/group-id'
import { from } from 'uuid-mongodb'
import { GroupName } from '@api/group/domain/group-name'
import { GroupDescription } from '@api/group/domain/group-description'
import { GroupCounterPosts } from '@api/group/domain/group-counter-posts'
import { GroupCounterUsers } from '@api/group/domain/group-counter-users'
import { GroupCreatedDate } from '@api/group/domain/group-created-date'
import { UserId } from '@api/shared/domain/user/user-id'

export class GroupMapper {
    static fromSchema(groupSchema: GroupSchema): Group {
        return new Group({
            id: new GroupId(from(groupSchema._id).toString()),
            name: new GroupName(groupSchema.name),
            description: new GroupDescription(groupSchema.description),
            userId: new UserId(from(groupSchema.userId).toString()),
            counterPosts: new GroupCounterPosts(groupSchema.counterPosts),
            counterUsers: new GroupCounterUsers(groupSchema.counterUsers),
            createdDate: new GroupCreatedDate(groupSchema.createdDate)
        })
    }

    static toSchema(group: Group): GroupSchema {
        const groupSchema: GroupSchema = new GroupSchema()
        groupSchema._id = from(group.id.value)
        groupSchema.name = group.name.value
        groupSchema.description = group.description.value
        groupSchema.userId = from(group.userId.value)
        groupSchema.counterPosts = group.counterPosts.value
        groupSchema.counterUsers = group.counterUsers.value
        groupSchema.createdDate = group.createdDate.value
        return groupSchema
    }
}
