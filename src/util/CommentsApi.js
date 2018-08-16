export default class CommentsApi {

    constructor(baseUrl, childEndpoint) {
        this.baseUrl = baseUrl;
        this.childEndpoint = childEndpoint;
    }

    getComments(parentId) {
        const url = this.baseUrl + '/' + parentId + '/' + this.childEndpoint;
        return this.makeRequest(url);
    }

    putComment(id, data) {
        const url = this.baseUrl + '/' + id;
        return this.makeRequest(url, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    deleteComment(comment) {
        const url = this.baseUrl + '/' + comment.id;
        return this.makeRequest(url, {
            method: 'DELETE'
        });
    }

    postComment(parentId, data) {
        const url = this.baseUrl + '/' + parentId + '/' + this.childEndpoint;
        return this.makeRequest(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    makeRequest(url, options = {}) {
        let request = new Request(url, options);
        return fetch(request)
            .then(response => {
                if ((response.status >= 200) && (response.status < 300)) {
                    return response.json();
                } else {
                    throw new Error(response.json() || 'Unexpected error');
                }
            })
            .then(responseData => {
                return responseData.data;
            });
    }
}