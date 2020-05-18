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
        const id: GroupId = new GroupId(from(groupSchema._id).toString())
        const name: GroupName = new GroupName(groupSchema.name)
        const description: GroupDescription = new GroupDescription(groupSchema.description)
        const userId: UserId = new UserId(from(groupSchema.userId).toString())
        const counterPosts: GroupCounterPosts = new GroupCounterPosts(groupSchema.counterPosts)
        const counterUsers: GroupCounterUsers = new GroupCounterUsers(groupSchema.counterUsers)
        const createdDate: GroupCreatedDate = new GroupCreatedDate(groupSchema.createdDate)

        return new Group(id, name, description, userId, counterPosts, counterUsers, createdDate)
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
