class ShoppingCartApi {
    constructor({ baseURL }) {
        this.baseURL = baseURL;
    }

    getAuthorizationHeader(token) {
        return `Bearer ${token}`;
    }

    async addProductToCart(id, token) {
        const res = await fetch(`${this.baseURL}/shoppingCart/${id}`, {
            method: "POST",
            headers: {
              authorization: this.getAuthorizationHeader(token),
              "Content-type": "application/json",
            },
        })

        return res.json();
    }
}

export const boardgameApi = new ShoppingCartApi({
    baseURL: "http://35.211.88.42:8080",
  });