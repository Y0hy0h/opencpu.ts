export class Session {
    constructor(public location: string, public responseText: string) {}

    async get(resource: string): Promise<Response> {
        return fetch(this.location + '/' + resource);
    }

    async getObject(): Promise<object> {
        const response = await fetch(this.location + '/R/.val/json');
        return response.json();
    }
}
