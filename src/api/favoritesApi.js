class FavoritesApi {
    constructor({baseURL}) {
        this.baseURL = baseURL
    }

    getAuthorizationHeader(token) {
        return `Bearer ${token}`;
    }

    async getFavoritesItems(token) {
        try {
            const res = await fetch(`${this.baseURL}/users/me/favourites`, {
                method: "GET",
                headers: {
                    authorization: this.getAuthorizationHeader(token),
                    "Content-type": "application/json",
                },
            });
            return res.json()
        } catch (e) {
            console.log(e)
        }
    }

    async deleteFavoritesItemById(id, token) {
        try {
            return await fetch(`${this.baseURL}/users/me/favourites/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: this.getAuthorizationHeader(token),
                    "Content-type": "application/json",
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    async addFavoritesItemById(id, token) {
        try {
            await fetch(`${this.baseURL}/users/me/favourites/${id}`, {
                method: 'POST',
                headers: {
                    authorization: this.getAuthorizationHeader(token),
                    "Content-type": "application/json",
                }
            }).then(res => res)
        } catch (e) {
            console.log(e)
        }
    }
}

export const favoritesApi = new FavoritesApi({
    baseURL: "http://35.211.88.42:8080",
});
