import { HttpStatus } from '@nestjs/common'
import { HttpError } from '@shared/http.error'

export class HttpErrorResponse {
    constructor(public readonly status: HttpStatus, public readonly message: string, public readonly path: string) {}

    toJSON(): HttpError {
        return {
            status: this.status,
            message: this.message,
            path: this.path
        }
    }
}
