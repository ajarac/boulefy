import { LocalStrategy } from '@users/users/infrastructure/passport/local/local.strategy'
import { LocalAuthGuard } from '@users/users/infrastructure/passport/local/local-auth.guard'
import { JwtStrategy } from '@users/users/infrastructure/passport/jwt/jwt.strategy'
import { JwtAthGuard } from '@users/users/infrastructure/passport/jwt/jwt-ath.guard'

export const PASSPORT = [LocalStrategy, LocalAuthGuard, JwtStrategy, JwtAthGuard]
