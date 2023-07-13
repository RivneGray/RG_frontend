class BoardgameApi {
    readonly baseURL: string;

    constructor({baseURL}: {baseURL: string}) {
        this.baseURL = baseURL;
    }

    async getAllBoardgames() {
        const res = await fetch(`${this.baseURL}/boardgames`, {
            headers: {
                "Content-type": "application/json"
            }
        })

        return res.json();
    }

    async addBoardgame(value: object) {
        const res = await fetch(`${this.baseURL}/boardgames`, {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                "Content-type": "application/json"
            }
        })

        return res.json();
    }

    async getBoardgameById(id: number) {
        const res = await fetch(`${this.baseURL}/boardgames${id}`, {
            headers: {
                "Content-type": "application/json"
            }
        })

        return res.json();
    }

    async updateBoardgame(value : object, id: number) {
        const res = await fetch(`${this.baseURL}/boardgames${id}`, {
            method: 'PUT',
            body: JSON.stringify(value),
            headers: {
                "Content-type": "application/json"
            }
        })

        return res.json();
    }

    async deleteBoardgame(id: number) {
        const res = await fetch(`${this.baseURL}/boardgames${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })

        return res.json();
    }
}

export const boardgameApi = new BoardgameApi({baseURL: 'domen.com'})
