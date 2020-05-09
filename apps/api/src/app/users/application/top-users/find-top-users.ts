import { UserResponse } from '@shared/models/user/user.response'

export abstract class FindTopUsers {
    abstract find(): Promise<UserResponse[]>
}
