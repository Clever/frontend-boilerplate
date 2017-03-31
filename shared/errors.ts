export class HTTPError extends Error {
    public response;

    constructor(response) {
        super(response.statusText);
        this.response = response;
    }
}