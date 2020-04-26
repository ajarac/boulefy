import { LocalStrategy } from '@users/users/infrastructure/passport/local/local.strategy'
import { LocalAuthGuard } from '@users/users/infrastructure/passport/local/local-auth.guard'

export const PASSPORT = [LocalStrategy, LocalAuthGuard]
