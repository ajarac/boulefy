import { LocalStrategy } from './local/local.strategy'
import { LocalAuthGuard } from './local/local-auth.guard'
import { JwtStrategy } from './jwt/jwt.strategy'
import { JwtAthGuard } from './jwt/jwt-ath.guard'

export const PASSPORT = [LocalStrategy, LocalAuthGuard, JwtStrategy, JwtAthGuard]
