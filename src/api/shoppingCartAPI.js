class ShoppingCartApi {
  constructor({ baseURL }) {
    this.baseURL = baseURL;
  }

  getAuthorizationHeader(token) {
    return `Bearer ${token}`;
  }

  async addProductToCart(productId, token) {
    const res = await fetch(`${this.baseURL}/shoppingCart/${productId}`, {
      method: 'POST',
      headers: {
        authorization: this.getAuthorizationHeader(token),
        'Content-type': 'application/json',
      },
    });

    if (res.status >= 500) throw new Error(`статус помилки ${res.status}`);

    return res.json();
  }

  async deleteProductFromCart(productInCartId, token) {
    const res = await fetch(`${this.baseURL}/shoppingCart/${productInCartId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.getAuthorizationHeader(token),
        'Content-type': 'application/json',
      },
    });
    return res;
  }

  async addProductsToCart(ids, token) {
    return Promise.all(
      ids.map((id) =>
        fetch(`${this.baseURL}/shoppingCart/${id}`, {
          method: 'POST',
          headers: {
            authorization: this.getAuthorizationHeader(token),
            'Content-type': 'application/json',
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
        'Content-type': 'application/json',
      },
    });
    return res.json();
  }

  async clearCart(token) {
    const res = await fetch(`${this.baseURL}/shoppingCart/`, {
      method: 'DELETE',
      headers: {
        authorization: this.getAuthorizationHeader(token),
        'Content-type': 'application/json',
      },
    });

    return res; //.json().productsInShoppingCartDto;
  }

  async changeProductQuantity(productID, newQuantity, token) {
    const res = await fetch(`${this.baseURL}/shoppingCart/${productID}`, {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: newQuantity,
      }),
      headers: {
        authorization: this.getAuthorizationHeader(token),
        'Content-type': 'application/json',
      },
    });
    return res;
  }
}

export const shoppingCartApi = new ShoppingCartApi({
  baseURL: 'http://34.88.172.149:8080',
});
