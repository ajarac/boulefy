import { AggregateRoot } from '@nestjs/cqrs'
import { GroupId } from '@api/shared/domain/group/group-id'
import { GroupName } from '@api/group/domain/group-name'
import { GroupDescription } from '@api/group/domain/group-description'
import { GroupCounterPosts } from '@api/group/domain/group-counter-posts'
import { GroupCounterUsers } from '@api/group/domain/group-counter-users'
import { GroupCreatedDate } from '@api/group/domain/group-created-date'
import { GroupCreateEvent } from '@api/shared/domain/group/group-create-event'
import { UserId } from '@api/shared/domain/user/user-id'

export class Group extends AggregateRoot {
    constructor(
        private _id: GroupId,
        private _name: GroupName,
        private _description: GroupDescription,
        private _userId: UserId,
        private _counterPosts: GroupCounterPosts,
        private _counterUsers: GroupCounterUsers,
        private _createdDate: GroupCreatedDate
    ) {
        super()
    }

    get id(): GroupId {
        return this._id
    }

    get name(): GroupName {
        return this._name
    }

    get description(): GroupDescription {
        return this._description
    }

    get counterPosts(): GroupCounterPosts {
        return this._counterPosts
    }

    get counterUsers(): GroupCounterUsers {
        return this._counterUsers
    }

    get createdDate(): GroupCreatedDate {
        return this._createdDate
    }

    static create(id: GroupId, name: GroupName, description: GroupDescription, userId: UserId): Group {
        const counterPosts: GroupCounterPosts = new GroupCounterPosts(0)
        const counterUsers: GroupCounterUsers = new GroupCounterUsers(0)
        const createdDate: GroupCreatedDate = GroupCreatedDate.create()

        const group: Group = new Group(id, name, description, userId, counterPosts, counterUsers, createdDate)

        group.apply(
            new GroupCreateEvent(id.value, name.value, description.value, counterPosts.value, counterUsers.value, createdDate.value)
        )

        return group
    }
}
