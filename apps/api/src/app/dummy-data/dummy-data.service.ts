import { Injectable } from '@nestjs/common'
import { RegisterUserCommand } from '@api/users/application/register/register-user-command'
import * as faker from 'faker'
import { CommandBus } from '@nestjs/cqrs'
import { CreatePostCommand } from '@api/post/application/create/create-post-command'
import { CreateCommentCommand } from '@api/comment/application/create/create-comment-command'
import { CreateGroupCommand } from '@api/group/application/create/create-group-command'

@Injectable()
export class DummyDataService {
    constructor(private commandBus: CommandBus) {}

    private static generateRegisterUserCommand(): RegisterUserCommand {
        return new RegisterUserCommand({
            id: faker.random.uuid(),
            username: faker.internet.userName(),
            password: faker.lorem.word(),
            email: faker.internet.email()
        })
    }

    private static generateCreateGroupCommand(userId: string): CreateGroupCommand {
        return new CreateGroupCommand({
            id: faker.random.uuid(),
            name: faker.lorem.words() + faker.random.uuid(),
            description: faker.lorem.paragraph(),
            userId
        })
    }

    private static generateCreatePostCommand(userId: string, groupId: string): CreatePostCommand {
        return new CreatePostCommand({
            id: faker.random.uuid(),
            title: faker.lorem.words(),
            content: faker.lorem.paragraphs(),
            userId,
            groupId
        })
    }

    private static generateCreateCommentCommand(postId: string, userId: string): CreateCommentCommand {
        return new CreateCommentCommand({
            id: faker.random.uuid(),
            content: faker.lorem.paragraphs(),
            userId,
            postId
        })
    }

    async generate(): Promise<void> {
        const users: RegisterUserCommand[] = this.registerUsers(50)
        const userIds: string[] = users.map((user) => user.id)
        const groups: CreateGroupCommand[] = this.createGroups(20, userIds)
        const groupIds: string[] = groups.map((group) => group.id)
        const posts: CreatePostCommand[] = this.createPosts(500, userIds, groupIds)
        const postsId: string[] = posts.map((post) => post.id)
        const comments: CreateCommentCommand[] = this.createComments(200, userIds, postsId)

        for (const user of users) {
            await this.commandBus.execute(user)
        }
        for (const group of groups) {
            await this.commandBus.execute(group)
        }
        for (const post of posts) {
            await this.commandBus.execute(post)
        }
        for (const comment of comments) {
            await this.commandBus.execute(comment)
        }
    }

    registerUsers(count: number): RegisterUserCommand[] {
        return new Array(count).fill('').map(() => DummyDataService.generateRegisterUserCommand())
    }

    createGroups(count: number, userIds: string[]): CreateGroupCommand[] {
        return new Array(count).fill('').map(() => DummyDataService.generateCreateGroupCommand(faker.random.arrayElement(userIds)))
    }

    createPosts(count: number, userIds: string[], groupIds: string[]): CreatePostCommand[] {
        return new Array(count)
            .fill('')
            .map(() => DummyDataService.generateCreatePostCommand(faker.random.arrayElement(userIds), faker.random.arrayElement(groupIds)))
    }

    createComments(countByPost: number, userIds: string[], postIds: string[]): CreateCommentCommand[] {
        const list: CreateCommentCommand[] = []
        for (const postId of postIds) {
            for (let i = 0; i < faker.random.number({ max: countByPost }); i++) {
                list.push(DummyDataService.generateCreateCommentCommand(postId, faker.random.arrayElement(userIds)))
            }
        }
        return list
    }
}
