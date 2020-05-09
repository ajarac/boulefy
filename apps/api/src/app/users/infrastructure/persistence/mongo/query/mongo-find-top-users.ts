import { Injectable } from '@nestjs/common'
import { FindTopUsers } from '@api/users/application/top-users/find-top-users'
import { UserResponse } from '@shared/models/user/user.response'
import { InjectRepository } from '@nestjs/typeorm'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { MongoRepository } from 'typeorm'
import { from } from 'uuid-mongodb'

@Injectable()
export class MongoFindTopUsers extends FindTopUsers {
    constructor(@InjectRepository(UserSchema) private repository: MongoRepository<UserSchema>) {
        super()
    }

    async find(): Promise<UserResponse[]> {
        const schemas: UserSchema[] = await this.repository.find({ order: { counterComments: 'DESC' }, take: 10 })
        return schemas.map((user: UserSchema) => ({
            id: from(user._id).toString(),
            username: user.username,
            email: user.email,
            counterComments: user.counterComments,
            counterPosts: user.counterPosts,
            createdDate: user.createdDate
        }))
    }
}
