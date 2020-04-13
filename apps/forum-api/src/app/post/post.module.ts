import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CONTROLLERS } from '@forum-api/post/infrastructure/controller';
import { PostRepository } from '@forum-api/post/domain';
import { OrmPostRepository } from '@forum-api/post/infrastructure/persistence/orm/orm-post.repository';
import { APPLICATION_SERVICES, COMMAND_HANDLERS, QUERY_HANDLERS } from '@forum-api/post/application';
import { PostSchema } from '@forum-api/post/infrastructure/persistence/orm/post.schema';

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([ PostSchema ])
    ],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        ...CONTROLLERS,
        {
            provide: PostRepository,
            useClass: OrmPostRepository
        }
    ]
})
export class PostModule {
}
