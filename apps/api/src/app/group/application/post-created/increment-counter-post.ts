import { Injectable } from '@nestjs/common'
import { GroupRepository } from '@api/group/domain/group-repository'
import { GroupId } from '@api/shared/domain/group/group-id'
import { Group } from '@api/group/domain/group'

@Injectable()
export class IncrementCounterPost {
    constructor(private repository: GroupRepository) {}

    async increment(groupId: GroupId): Promise<void> {
        const group: Group = await this.repository.search(groupId)

        group.incrementCounterPosts()

        await this.repository.save(group)
    }
}
