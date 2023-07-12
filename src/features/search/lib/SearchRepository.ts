import { Product } from './types';

export class SearchRepository {
    private config;

    constructor() {
        this.config = useAppConfig();
    }

    autoCompleteCache: { [key: string]: Array<Product> } = {};

    async queryAutocomplete(searchString: string) {
        if (searchString in this.autoCompleteCache) {
            return this.autoCompleteCache[searchString];
        }
        try {
            const response = await fetch(`http://sch.vrybalko.dv/autocomplete?term=${searchString}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const foundProducts = await response.json();
            this.putToCache(searchString, foundProducts);
            return foundProducts;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    putToCache(searchString: string, foundProducts: Product[]) {
        this.autoCompleteCache[searchString] = foundProducts;
    }
}
