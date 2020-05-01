import { FindUserController } from '@users/users/infrastructure/controller/find-user.controller'
import { RegisterUserController } from '@users/users/infrastructure/controller/register-user.controller'
import { LoginUserController } from '@users/users/infrastructure/controller/login-user.controller'
import { ValidateUserController } from '@users/users/infrastructure/controller/validate-user.controller'
import { PostCreatedController } from '@users/users/infrastructure/controller/post-created.controller'

export const CONTROLLERS = [FindUserController, RegisterUserController, LoginUserController, ValidateUserController, PostCreatedController]
