import { TProductCategory, TProduct, sortOptions } from '../types';

export async function getProductsCategories(): Promise<TProductCategory[]> {
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
        return [];
    }
}

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

export async function getProductsByCategory({
    category,
    sortOptions,
}: {
    category: string;
    sortOptions?: sortOptions;
}): Promise<TProduct[]> {
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
    ].join(',');

    const sort = sortOptions
        ? `&sortBy=${sortOptions.sortBy}&order=${sortOptions.order}`
        : '';

    try {
        if (!category) {
            throw new Error('Incorrect or empty category');
        }
        const response = await fetch(
            `https://dummyjson.com/products/category/${category}?select=${selectParams}&limit=0${sort}`
        );
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return (await response.json()).products;
    } catch (error) {
        console.error(
            `getProductsByCategory with category = ${category} fails: `,
            error
        );
        return [];
    }
}
