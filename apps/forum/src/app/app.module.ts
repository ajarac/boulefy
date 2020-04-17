import { Module } from '@nestjs/common'
import { PostModule } from '@forum/post/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MONGO_DB_CONFIG } from '@forum/config/mongo.config'

@Module({
    imports: [PostModule, TypeOrmModule.forRoot(MONGO_DB_CONFIG)],
    providers: []
})
export class AppModule {}
