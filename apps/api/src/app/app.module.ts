import { Module } from '@nestjs/common'
import { UserModule } from './users/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MONGO_DB_CONFIG } from '@api/config/mongo.config'
import { PostModule } from '@api/post/post.module'
import { CommentModule } from '@api/comment/comment.module'
import { DummyDataModule } from '@api/dummy-data/dummy-data.module'

@Module({
    imports: [UserModule, PostModule, CommentModule, TypeOrmModule.forRoot(MONGO_DB_CONFIG), DummyDataModule]
})
export class AppModule {}
