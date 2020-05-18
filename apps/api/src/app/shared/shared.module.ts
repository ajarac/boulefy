import { Global, Module } from '@nestjs/common'
import { AuthGuard } from '@api/shared/infrastructure/guards/auth.guard'

@Global()
@Module({
    providers: [AuthGuard]
})
export class SharedModule {}
