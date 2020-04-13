import { Module } from '@nestjs/common';

import { HealthCheckController } from '@forum-api/shared/intrastructure/controller/health-check/health-check.controller';
import { PostModule } from '@forum-api/post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MONGO_DB_CONFIG } from '@forum-api/config/mongo.config';

@Module({
    imports: [
        PostModule,
        /*
            ClientsModule.register([ {
            name: 'FORUM_SERVICES',
            transport: Transport.REDIS,
            options: { url: 'redis://localhost:6379' }
        } ]),
        */
        TypeOrmModule.forRoot(MONGO_DB_CONFIG)
    ],
    controllers: [
        HealthCheckController
    ],
    providers: []
})
export class AppModule {
}
