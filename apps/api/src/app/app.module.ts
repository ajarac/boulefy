import { Module } from '@nestjs/common'
import { ForumModule } from './forum/forum.module'
import { UserModule } from './users/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MONGO_DB_CONFIG } from '@api/config/mongo.config'

@Module({
    imports: [ForumModule, UserModule,  TypeOrmModule.forRoot(MONGO_DB_CONFIG)]
})
export class AppModule {}
