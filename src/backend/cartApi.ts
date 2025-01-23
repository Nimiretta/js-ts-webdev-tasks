import { TCartDiscTotal } from '../types';

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
