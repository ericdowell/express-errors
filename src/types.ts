import { ValidationError } from 'express-validator'

export interface HttpExceptionOptions {
    errors?: ValidationError[]
    message?: string
}
