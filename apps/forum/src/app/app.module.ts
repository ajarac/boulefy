import { Module } from '@nestjs/common'
import { PostModule } from '@forum/post/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MONGO_DB_CONFIG } from '@forum/config/mongo.config'
import { ClientModule } from '@forum/client.module'
import { CommentModule } from '@forum/comment/comment.module'

@Module({
    imports: [PostModule, CommentModule, TypeOrmModule.forRoot(MONGO_DB_CONFIG), ClientModule],
    providers: []
})
export class AppModule {}
