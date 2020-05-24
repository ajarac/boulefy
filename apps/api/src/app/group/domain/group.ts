import { AggregateRoot } from '@nestjs/cqrs'
import { GroupId } from '@api/shared/domain/group/group-id'
import { GroupName } from '@api/group/domain/group-name'
import { GroupDescription } from '@api/group/domain/group-description'
import { GroupCounterPosts } from '@api/group/domain/group-counter-posts'
import { GroupCounterUsers } from '@api/group/domain/group-counter-users'
import { GroupCreatedDate } from '@api/group/domain/group-created-date'
import { GroupCreatedEvent } from '@api/shared/domain/group/group-created-event'
import { UserId } from '@api/shared/domain/user/user-id'

export interface GroupArgs {
    id: GroupId
    name: GroupName
    description: GroupDescription
    userId: UserId
    counterPosts: GroupCounterPosts
    counterUsers: GroupCounterUsers
    createdDate: GroupCreatedDate
}

export interface GroupCreateArgs {
    id: GroupId
    name: GroupName
    description: GroupDescription
    userId: UserId
}

export class Group extends AggregateRoot {
    private readonly _id: GroupId
    private readonly _name: GroupName
    private readonly _description: GroupDescription
    private readonly _userId: UserId
    private readonly _counterPosts: GroupCounterPosts
    private readonly _counterUsers: GroupCounterUsers
    private readonly _createdDate: GroupCreatedDate

    constructor(groupArgs: GroupArgs) {
        super()
        this._id = groupArgs.id
        this._name = groupArgs.name
        this._description = groupArgs.description
        this._userId = groupArgs.userId
        this._counterPosts = groupArgs.counterPosts
        this._counterUsers = groupArgs.counterUsers
        this._createdDate = groupArgs.createdDate
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

    get userId(): UserId {
        return this._userId
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

    static create({ id, name, description, userId }: GroupCreateArgs): Group {
        const counterPosts: GroupCounterPosts = new GroupCounterPosts(0)
        const counterUsers: GroupCounterUsers = new GroupCounterUsers(0)
        const createdDate: GroupCreatedDate = GroupCreatedDate.create()

        const group: Group = new Group({ id, name, description, userId, counterPosts, counterUsers, createdDate })

        group.apply(
            new GroupCreatedEvent({
                id: id.value,
                name: name.value,
                description: description.value,
                counterPosts: counterPosts.value,
                counterUsers: counterUsers.value,
                createdDate: createdDate.value
            })
        )

        return group
    }
}
