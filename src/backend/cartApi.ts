import { TCartDiscPrice, TUpdateCartParams } from '../types';

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
