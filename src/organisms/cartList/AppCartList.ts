import { AppCartItem } from '../../molecules';
import { TCartItem } from '../../types';

export function AppCartList(cartItems: TCartItem[]): HTMLDivElement {
    const cartList = document.createElement('div');
    cartList.classList.add(
        'flex',
        'flex-col',
        'items-start',
        'gap-6',
        'w-[44.69rem]',
        'px-6',
        'py-5',
        'border',
        'border-border-gray',
        'rounded-2xl'
    );

    cartItems.forEach((item, index) => {
        const cartItem = AppCartItem(item);
        cartList.appendChild(cartItem);

        if (index !== cartItems.length - 1) {
            const separator = createSeparator();
            cartList.appendChild(separator);
        }
    });

    return cartList;
}

function createSeparator(): HTMLDivElement {
    const separator = document.createElement('div');
    separator.classList.add('w-full', 'h-px', 'border-t', 'border-border-gray');
    return separator;
}
