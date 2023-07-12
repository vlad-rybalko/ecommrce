import { defineStore } from 'pinia';

type State = {
    items: string[];
};

export const useBasketStore = defineStore('basket', {
    state: (): State => ({
        items: [],
    }),
    getters: {
        allItems(): string[] {
            return this.items;
        },
        count(): number {
            return this.items?.length;
        },
    },
    actions: {
        addItem(name: string) {
            this.items.push(name);
        },
        clearItems() {
            this.items = [];
        },
    },
});
