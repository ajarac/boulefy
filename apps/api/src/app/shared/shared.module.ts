import { Global, Module } from '@nestjs/common'
import { AuthGuard } from '@api/shared/infrastructure/guards/auth.guard'
import { CqrsModule } from '@nestjs/cqrs'

@Global()
@Module({
    imports: [CqrsModule],
    providers: [AuthGuard]
})
export class SharedModule {}
