import { TProduct } from '../types';

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
        if (!productId) {
            throw new Error('Incorrect or empty ID');
        }
        const response = await fetch(
            `https://dummyjson.com/products/${productId}?select=${selectParams.join(',')}`
        );
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(
            `getProductById with productId = ${productId} fails: `,
            error
        );
        return null;
    }
}
