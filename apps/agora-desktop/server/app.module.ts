import { Module } from '@nestjs/common'
import { AngularUniversalModule } from '@nestjs/ng-universal'
import { join } from 'path'
import { AppServerModule } from '../src/main.server'
import { environment } from './environments/environment'

@Module({
    imports: [
        AngularUniversalModule.forRoot({
            bootstrap: AppServerModule,
            viewsPath: join(process.cwd(), environment.path)
        })
    ]
})
export class AppModule {}
