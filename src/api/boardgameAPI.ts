class BoardgameApi {
  readonly baseURL: string;

  constructor({ baseURL }: { baseURL: string }) {
    this.baseURL = baseURL;
  }

  getAuthorizationHeader(token: string) {
    return `Bearer ${token}`;
  }

  async getAllBoardgames(
    searchValue: string,
    sortValue: string,
    encodeFilters: string,
    currentPage: number
  ) {
    const res = await fetch(
      `${this.baseURL}/boardgames?search=${searchValue}&sort=${sortValue}&filter=${encodeFilters}&page=${currentPage}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (res.status === 500)
      throw new Error(
        `Сталася помилка на сервері. Статус помилки - ${res.status}`
      );

    return res.json();
  }

  async getBoardgameById(id: number) {
    const res = await fetch(`${this.baseURL}/boardgames${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    return res.json();
  }

  async getFilters() {
    const res = await fetch(`${this.baseURL}/boardgames/filteringData`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    return res.json();
  }

  async getPriceBounds() {
    const res = await fetch(`${this.baseURL}/boardgames/priceBounds`, {
      headers: {
        "Cotent-type": "application/json",
      },
    });

    return res.json();
  }

  async getGameDurationBounds() {
    const res = await fetch(`${this.baseURL}/boardgames/gameDurationBounds`, {
      headers: {
        "Cotent-type": "application/json",
      },
    });

    return res.json();
  }

  async getBoardgamesByIds(ids: number[]) {
    return Promise.all(
      ids.map((id) =>
        fetch(`${this.baseURL}/boardgames/${id}`).then((res) => {
          if (res.status === 404) return { _id: id };
          return res.json();
        })
      )
    );
  }

  // async addBoardgame(value: object) {
  //     const res = await fetch(`${this.baseURL}/boardgames`, {
  //         method: 'POST',
  //         body: JSON.stringify(value),
  //         headers: {
  //             "Content-type": "application/json"
  //         }
  //     })

  //     return res.json();
  // }

  // async updateBoardgame(value : object, id: number) {
  //     const res = await fetch(`${this.baseURL}/boardgames${id}`, {
  //         method: 'PUT',
  //         body: JSON.stringify(value),
  //         headers: {
  //             "Content-type": "application/json"
  //         }
  //     })

  //     return res.json();
  // }

  // async deleteBoardgame(id: number) {
  //     const res = await fetch(`${this.baseURL}/boardgames${id}`, {
  //         method: 'DELETE',
  //         headers: {
  //             "Content-type": "application/json"
  //         }
  //     })

  //     return res.json();
  // }
}

export const boardgameApi = new BoardgameApi({
  baseURL: "http://35.211.88.42:8080",
});
