import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { ForumModule } from './forum/forum.module'
import { ApiClientsModule } from '@api/api-clients.Module'

@Module({
    imports: [UserModule, ForumModule, ApiClientsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
