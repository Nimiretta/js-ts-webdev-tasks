import { TProductCategory } from '../types';

export async function getProductsCategories(): Promise<
    TProductCategory[] | void
> {
    try {
        const response = await fetch(
            'https://dummyjson.com/products/categories'
        );
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('getProductsCategories', error);
    }
}
