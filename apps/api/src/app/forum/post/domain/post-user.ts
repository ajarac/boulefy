import { UserId } from '@backend/shared/domain/user/user-id'
import { ValueObject } from '@backend/shared/domain/value-object'
import { UserName } from '@backend/shared/domain/user/user-name'

export interface PostUserModel {
    id: string
    username: string
}

export class PostUser extends ValueObject<PostUserModel> {
    constructor(private _id: UserId, private _username: UserName) {
        super({ id: _id.value, username: _username.value })
    }

    get id(): UserId {
        return this._id
    }

    get username(): UserName {
        return this._username
    }

    get value(): PostUserModel {
        return {
            id: this._id.value,
            username: this._username.value
        }
    }
}
