import { Injectable } from '@angular/core'
import { UserFinder } from '@api/users/application/find-user/user-finder'
import { InjectRepository } from '@nestjs/typeorm'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { MongoRepository } from 'typeorm'
import { UserResponse } from '@shared/models/user/user.response'
import { UserId } from '@backend/shared/domain/user/user-id'
import { from } from 'uuid-mongodb'

@Injectable()
export class MongoUserFinderQuery extends UserFinder {
    constructor(@InjectRepository(UserSchema) private repository: MongoRepository<UserSchema>) {
        super()
    }

    async find(id: UserId): Promise<UserResponse> {
        const userSchema: UserSchema = await this.repository.findOne({ _id: from(id.value) })
        return {
            id: from(userSchema._id).toString(),
            username: userSchema.username,
            email: userSchema.email,
            counterComments: userSchema.counterComments,
            counterPosts: userSchema.counterPosts
        }
    }
}
