import {
    TCartDiscPrice,
    TNewCartParams,
    TCartDeleted,
    TCartDiscTotal,
    TUpdateCartParams,
} from '../types';

export async function createCart(
    body: TNewCartParams
): Promise<TCartDiscPrice | null> {
    try {
        const response = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('createCart', error);
        return null;
    }
}

export async function getCart(
    cartId: string | number
): Promise<TCartDiscTotal | null> {
    try {
        if (!cartId) {
            throw new Error('Incorrect or empty cart ID');
        }
        const response = await fetch(`https://dummyjson.com/carts/${cartId}`);
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`getCart for cartId = ${cartId} failed: `, error);
        return null;
    }
}

/**
 * @param params.merge - A boolean indicating whether to merge the new products with the existing ones. Defaults to true.
 */
export async function updateCart(
    cartId: string | number,
    { merge = true, products }: TUpdateCartParams
): Promise<TCartDiscPrice | null> {
    try {
        if (!cartId) {
            throw new Error('Incorrect or empty cart ID');
        }
        const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ merge, products }),
        });
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`updateCart for cartId = ${cartId} failed: `, error);
        return null;
    }
}

export async function deleteCart(
    cartId: string | number
): Promise<TCartDeleted | null> {
    try {
        if (!cartId) {
            throw new Error('Incorrect or empty cart ID');
        }
        const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`deleteCart for cartId = ${cartId} failed: `, error);
        return null;
    }
}
