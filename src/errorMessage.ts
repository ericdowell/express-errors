export enum ErrorMessage {
    CSRF_TOKEN_MISMATCH = 'CSRF token mismatch.',
    GONE = 'Invalid field(s) provided.',
    INTERNAL_SERVER_ERROR = 'Something went wrong.',
    NOT_FOUND = 'Not found.',
    NOT_IMPLEMENTED = 'Not implemented.',
    RESOURCE_NOT_FOUND = 'Resource not found based on data provided.',
    UNAUTHORIZED = 'This action is unauthorized.',
    UNPROCESSABLE_ENTITY = 'The given data was invalid.',
    UNEXPECTED_ERROR = 'An unexpected error has occurred. Please try again.',
}
