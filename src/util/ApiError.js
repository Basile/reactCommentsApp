export default class ApiError extends Error {

    constructor(message, data) {
        super(message);
        this.data = data;
    }
}