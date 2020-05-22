import { GroupId } from '@api/shared/domain/group/group-id'
import { IdentifierMother } from '@api/test/shared/domain/identifier.mother'

export class GroupIdMother {
    static create(value: string): GroupId {
        return new GroupId(value)
    }

    static random(): GroupId {
        return GroupIdMother.create(IdentifierMother.random())
    }
}
