class CustomError extends Error {
    private readonly errorMessage: string;
    private readonly displayMessage: string;
    private readonly errorCode: number;

    constructor(errorMessage: string, displayMessage: string, errorCode: number) {
        super(errorMessage);
        this.errorMessage = errorMessage;
        this.displayMessage = displayMessage;
        this.errorCode = errorCode;
    }

}

export default CustomError;