import { Injectable } from '@nestjs/common'
import { GroupRepository } from '@api/group/domain/group-repository'
import { EventPublisher } from '@nestjs/cqrs'
import { GroupId } from '@api/shared/domain/group/group-id'
import { GroupName } from '@api/group/domain/group-name'
import { GroupDescription } from '@api/group/domain/group-description'
import { Group } from '@api/group/domain/group'
import { UserId } from '@api/shared/domain/user/user-id'

@Injectable()
export class GroupCreator {
    constructor(private repository: GroupRepository, private publisher: EventPublisher) {}

    async create(id: GroupId, name: GroupName, description: GroupDescription, userId: UserId): Promise<void> {
        const group: Group = this.publisher.mergeObjectContext(Group.create(id, name, description, userId))

        await this.repository.save(group)

        group.commit()
    }
}
