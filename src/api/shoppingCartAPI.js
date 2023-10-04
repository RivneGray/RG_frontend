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
    });

    return res.json();
  }

  async addProductsToCart(ids, token) {
    return Promise.all(
      ids.map((id) =>
        fetch(`${this.baseURL}/shoppingCart/${id}`, {
          method: "POST",
          headers: {
            authorization: this.getAuthorizationHeader(token),
            "Content-type": "application/json",
          },
        }).then((res) => {
          if (res.status === 404) return { _id: id };
          return res.json();
        })
      )
    );
  }

  async getCart(token) {
    const res = await fetch(`${this.baseURL}/shoppingCart/`, {
      headers: {
        authorization: this.getAuthorizationHeader(token),
        "Content-type": "application/json",
      },
    });
    return res.json();
  }

  async clearCart(token) {
    const res = await fetch(`${this.baseURL}/shoppingCart/`, {
      method: "DELETE",
      headers: {
        authorization: this.getAuthorizationHeader(token),
        "Content-type": "application/json",
      },
    });

    return res.json().productsInShoppingCartDto;
  }
}

export const shoppingCartApi = new ShoppingCartApi({
  baseURL: "http://35.211.88.42:8080",
});