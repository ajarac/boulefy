import { FindUserController } from './find-user.controller'
import { RegisterUserController } from './register-user.controller'
import { LoginUserController } from './login-user.controller'
import { ProfileController } from '@api/users/infrastructure/controller/profile.controller'
import { FindTopUserController } from '@api/users/infrastructure/controller/find-top-user.controller'

export const CONTROLLERS = [FindUserController, RegisterUserController, LoginUserController, ProfileController, FindTopUserController]
