import { UserId } from '@backend/shared/domain/user/user-id'
import { ValueObject } from '@backend/shared/domain/value-object'
import { UserName } from '@backend/shared/domain/user/user-name'

interface PostUserModel {
    userId: UserId
    username: UserName
}

export class PostUser extends ValueObject<PostUserModel> {
    constructor(userId: UserId, username: UserName) {
        super({ userId, username })
    }
}
