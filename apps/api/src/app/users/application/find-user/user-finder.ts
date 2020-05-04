import { UserId } from '@backend/shared/domain/user/user-id'
import { UserResponse } from '@shared/models/user/user.response'

export abstract class UserFinder {
    abstract find(id: UserId): Promise<UserResponse>
}
