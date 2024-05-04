class FavoritesApi {
    constructor({baseURL}) {
        this.baseURL = baseURL
    }

    getAuthorizationHeader(token) {
        return `Bearer ${token}`;
    }

    async getFavoritesItems(token) {
        if (token !== '')
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
            const res = await fetch(`${this.baseURL}/users/me/favourites/${id}`, {
                method: 'POST',
                headers: {
                    authorization: this.getAuthorizationHeader(token),
                    "Content-type": "application/json",
                }
            })
            return res.json()
        } catch (e) {
            console.log(e)
        }
    }
    async mapLocalFavoritesWithServer(token, favArr) {
        try {
            await fetch(`${this.baseURL}/users/me/favourites/map`, {
              method: 'POST',
              headers: {
                authorization: this.getAuthorizationHeader(token),
                "Content-type": "application/json",
              },
              body: JSON.stringify(favArr)
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export const favoritesApi = new FavoritesApi({
    baseURL: "http://35.211.88.42:8080",
});
