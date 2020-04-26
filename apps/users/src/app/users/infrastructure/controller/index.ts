import { FindUserController } from '@users/users/infrastructure/controller/find-user.controller'
import { RegisterUserController } from '@users/users/infrastructure/controller/register-user.controller'
import { UserExistsController } from '@users/users/infrastructure/controller/user-exists.controller'

export const CONSTROLLERS = [FindUserController, RegisterUserController, UserExistsController]
