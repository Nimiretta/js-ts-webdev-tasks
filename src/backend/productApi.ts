import { TProduct } from '../types';

/**
 * Fetches a product by its ID
 * @param {string | number} productId - The ID of the product to fetch.
 */
export async function getProductById(
    productId: string | number
): Promise<TProduct | null> {
    const selectParams = [
        'title',
        'description',
        'category',
        'price',
        'discountPercentage',
        'rating',
        'stock',
        'brand',
        'images',
        'thumbnail',
    ];
    try {
        const response = await fetch(
            `https://dummyjson.com/products/${productId}?select=${selectParams.join(',')}`
        );
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('getProductById', error);
        return null;
    }
}
