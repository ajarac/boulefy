import { Module } from '@nestjs/common'
import { PostModule } from '@forum/post/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MONGO_DB_CONFIG } from '@forum/config/mongo.config'
import { ClientModule } from '@forum/client.module'

@Module({
    imports: [PostModule, TypeOrmModule.forRoot(MONGO_DB_CONFIG), ClientModule],
    providers: []
})
export class AppModule {}
