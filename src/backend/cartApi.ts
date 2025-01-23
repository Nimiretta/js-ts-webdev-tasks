import { TCartDeleted } from '../types';

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
