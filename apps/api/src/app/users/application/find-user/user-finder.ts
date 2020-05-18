import { UserResponse } from '@shared/models/user/user.response'
import { UserId } from '@api/shared/domain/user/user-id'

export abstract class UserFinder {
    abstract find(id: UserId): Promise<UserResponse>
}
