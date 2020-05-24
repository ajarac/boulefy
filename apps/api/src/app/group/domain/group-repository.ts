import { Group } from '@api/group/domain/group'
import { GroupId } from '@api/shared/domain/group/group-id'

export abstract class GroupRepository {
    abstract save(group: Group): Promise<void>

    abstract search(groupId: GroupId): Promise<Group>
}
