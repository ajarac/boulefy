import { Group } from '@api/group/domain/group'

export abstract class GroupRepository {
    abstract save(group: Group): Promise<void>
}
