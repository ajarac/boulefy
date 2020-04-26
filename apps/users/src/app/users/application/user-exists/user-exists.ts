import { Injectable } from '@nestjs/common'
import { UserRepository } from '@users/users/domain/user.repository'
import { UserId } from '@backend/shared/domain/user/user-id'
import { User } from '@users/users/domain/user'

@Injectable()
export class UserExists {
    constructor(private repository: UserRepository) {}

    async exists(id: UserId): Promise<boolean> {
        const user: User = await this.repository.search(id)
        return !!user
    }
}
