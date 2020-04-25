import { ArgumentsHost, BadRequestException, Catch, HttpStatus } from '@nestjs/common'
import { IdentifierNotValid } from '@backend/shared/domain/identifier-not-valid'
import { HttpErrorResponse } from '@backend/shared/intrastructure/filters/http-error.response'

@Catch(IdentifierNotValid)
export class IdentifierNotValidFilter extends BadRequestException {
    catch(exception: IdentifierNotValid, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const request = ctx.getRequest()
        const status = HttpStatus.BAD_REQUEST

        const error: HttpErrorResponse = new HttpErrorResponse(status, exception.message, request.url)

        response.status(status).json(error.toJSON())
    }
}
