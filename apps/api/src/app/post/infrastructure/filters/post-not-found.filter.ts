import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common'
import { PostNotFound } from '@api/post/domain/post-not-found'
import { HttpErrorResponse } from '@api/shared/infrastructure/filters/http-error.response'

@Catch(PostNotFound)
export class PostNotFoundFilter implements ExceptionFilter {
    catch(exception: PostNotFound, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const request = ctx.getRequest()
        const status = HttpStatus.NOT_FOUND

        const error: HttpErrorResponse = new HttpErrorResponse(status, exception, request.url)

        response.status(status).json(error.toJSON())
    }
}
