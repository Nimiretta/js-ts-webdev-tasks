import { TCartDiscPrice, TNewCartParams } from '../types';

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
