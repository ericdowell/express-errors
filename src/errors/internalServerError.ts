import { ValidationError } from 'express-validator'
import { InternalServerError as HttpErrorsInternalServerError } from 'http-errors'
import { ErrorMessage } from '~/errorMessage'
import { HttpExceptionOptions } from '~/types'

export class InternalServerError extends HttpErrorsInternalServerError {
    errors: ValidationError[]
    message: string

    constructor(options?: HttpExceptionOptions) {
        super()
        this.errors = options?.errors || []
        this.message = options?.message || ErrorMessage.INTERNAL_SERVER_ERROR
    }
}
