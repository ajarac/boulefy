import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ObjectId } from 'mongodb'

import { UserRepository } from '@users/users/domain/user.repository'
import { User } from '@users/users/domain/user'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'
import { UserMapper } from '@users/users/infrastructure/persistence/mongo/user.mapper'

@Injectable()
export class MongoUserRepository extends UserRepository {
    constructor(@InjectRepository(UserSchema) private repository: Repository<UserSchema>) {
        super()
    }

    async register(user: User): Promise<void> {
        const userSchema: UserSchema = UserMapper.toSchema(user)
        userSchema._id = ObjectId.createFromTime(Date.now()).toHexString()
        await this.repository.save(userSchema)
    }

    async search(id: UserId): Promise<User> {
        const userSchema: UserSchema = await this.repository.findOne({ id: id.value })
        return userSchema ? UserMapper.fromSchema(userSchema) : null
    }

    async update(user: User): Promise<void> {
        const userSchema: UserSchema = UserMapper.toSchema(user);
        await this.repository.update({id: user.id.value}, userSchema)
    }
}
