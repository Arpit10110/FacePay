class ErrorHandler extends Error {
    status: number;
    success: boolean;

    constructor(message: string, statuscode: number, success: boolean) {
        super(message);
        this.status = statuscode;
        this.success = success;
    }
}

export default ErrorHandler;