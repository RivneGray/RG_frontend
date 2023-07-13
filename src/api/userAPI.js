class UserAPI {
    constructor({ baseURL }) {
        this.baseURL = baseURL;
    }

    async getAllUsers() {
        const res = await fetch(`${this.baseURL}/users`, {
            headers: {
                "Content-type": "application/json"
            }
        });

        return res.json();
    }

    async addUserWithRole(values) {
        const res = await fetch(`${this.baseURL}/users`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(values)
        });

        return res.json();
    }

    async addUserCustomer(values) {
        const res = await fetch(`${this.baseURL}/users/customer`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(values)
        })

        return res.json()
    }

    async getUserById(id) {
        const res = await fetch(`${this.baseURL}/users/${id}`, {
            headers: {
                "Content-type": "application/json",
            },
        })

        return res.json()
    }

    async deleteUserById(id) {
        const res = await fetch(`${this.baseURL}/users/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
            },
        })

        return res.json()
    }

    async updateUserName(userId, values) {
        const res = await fetch(`${this.baseURL}/users/${userId}/username`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        });

        return res.json();
    }

    async updateUserPassword(userId, values) {
        const res = await fetch(`${this.baseURL}/users/${userId}/password`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        });

        return res.json();
    }

    async updateUserEmail(userId, values) {
        const res = await fetch(`${this.baseURL}/user/${userId}/email`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        });

        return res.json();
    }

    async updateUserPhone(userId, values) {
        const res = await fetch(`${this.baseURL}/user/${userId}/phone`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        });

        return res.json();
    }

    async addUserAddress(userId, values) {
        const res = await fetch(`${this.baseURL}/users/${userId}/address`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        })

        return res.json()
    }

    async updateUserAddress(userId, addressId, values) {
        const res = await fetch(`${this.baseURL}/users/${userId}/address/${addressId}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        })

        return res.json()
    }

    async deleteUserAddress(userId, addressId) {
        const res = await fetch(`${this.baseURL}/users/${userId}/address/${addressId}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
            }
        })

        return res.json()
    }

    async getUsersByRole(role) {
        const res = await fetch(`${this.baseURL}/users/role/${role}`, {
            headers: {
                "Content-type": "application/json",
            }
        })

        return res.json()
    }

    async checkEmailIsAvailable(values) {
        const res = await fetch(`${this.baseURL}/users/availability/email`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        })

        return res.json()
    }

    async checkUsernameIsAvailable(values) {
        const res = await fetch(`${this.baseURL}/users/availability/username`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values)
        })

        return res.json()
    }

    async getAddressOfUserByAddressId(userId, addressId) {
        const res = await fetch(`${this.baseURL}/users/${userId}/addresses/${addressId}`, {
            headers: {
                "Content-type": "application/json",
            }
        })

        return res.json()
    }
    
    async getAllAddressesOfUser(userId) {
        const res = await fetch(`${this.baseURL}/users/${userId}/addresses`, {
            headers: {
                "Content-type": "application/json",
            }
        })

        return res.json()
    }
}

export const userApi = new UserAPI({ baseURL: '' });