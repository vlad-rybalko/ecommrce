import { defineStore } from 'pinia';

type State = {
    token: string | null;
};

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        token: null,
    }),
    getters: {
        isAuth(): boolean {
            return !!this.token;
        },
    },
    actions: {
        setToken() {
            this.token = 'token';
        },
        clearToken() {
            this.token = null;
        },
    },
});
