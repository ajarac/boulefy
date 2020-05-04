import { FindUserController } from './find-user.controller'
import { RegisterUserController } from './register-user.controller'
import { LoginUserController } from './login-user.controller'
import { ProfileController } from '@api/users/infrastructure/controller/profile.controller'

export const CONTROLLERS = [FindUserController, RegisterUserController, LoginUserController, ProfileController]
