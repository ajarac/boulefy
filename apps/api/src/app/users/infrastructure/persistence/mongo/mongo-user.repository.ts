import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { from } from 'uuid-mongodb'
import { Repository } from 'typeorm'

import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@backend/shared/domain/user/user-name'
import { UserMapper } from '@api/users/infrastructure/persistence/mongo/user.mapper'
import { UserRepository } from '@api/users/domain/user.repository'
import { UserPassword } from '@api/users/domain/user-password'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { User } from '@api/users/domain/user'

@Injectable()
export class MongoUserRepository extends UserRepository {
    constructor(@InjectRepository(UserSchema) private repository: Repository<UserSchema>) {
        super()
    }

    async validateUser(username: UserName, password: UserPassword): Promise<User> {
        const userSchema: UserSchema = await this.repository.findOne({
            username: username.value,
            password: password.value
        })
        return userSchema ? UserMapper.fromSchema(userSchema) : null
    }

    async register(user: User): Promise<void> {
        const userSchema: UserSchema = UserMapper.toSchema(user)
        await this.repository.save(userSchema)
    }

    async search(id: UserId): Promise<User> {
        const userSchema: UserSchema = await this.repository.findOne({ _id: from(id.value) })
        return userSchema ? UserMapper.fromSchema(userSchema) : null
    }

    async update(user: User): Promise<void> {
        const userSchema: UserSchema = UserMapper.toSchema(user)
        await this.repository.update({ _id: from(user.id.value) }, userSchema)
    }
}
