import { TProduct } from '../types';

/**
 * Fetches a product by its ID
 * @param {string | number} productId - The ID of the product to fetch.
 * @param {string[]} selectFields - An optional array of fields to select from the product data. To get all fields use [] instead of default value.
 */
export async function getProductById(
    productId: string | number,
    selectFields: string[] = [
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
    ]
): Promise<TProduct | null> {
    const selectParam = selectFields.length
        ? `?select=${selectFields.join(',')}`
        : '';
    try {
        const response = await fetch(
            `https://dummyjson.com/products/${productId}${selectParam}`
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
