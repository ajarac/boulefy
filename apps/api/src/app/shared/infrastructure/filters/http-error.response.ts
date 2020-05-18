import { HttpStatus } from '@nestjs/common'
import { HttpError } from '@shared/http.error'

export class HttpErrorResponse {
    constructor(public readonly status: HttpStatus, public readonly error: Error, public readonly path: string) {}

    toJSON(): HttpError {
        return {
            status: this.status,
            error: this.error.name,
            message: this.error.message,
            path: this.path
        }
    }
}
