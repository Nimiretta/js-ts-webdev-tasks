import { AppTile, AppTitle, AppPrice } from '../../atoms';
import router from '../../router';
import { TCartItem, TitleTag } from '../../types';

export function AppCartItem({
    productId,
    productTitle,
    fullPrice,
    discountRate,
    showDiscountedPrice = false,
    imgUrl,
    imgAlt,
}: TCartItem): HTMLDivElement {
    const cartItem = document.createElement('div');
    cartItem.classList.add(
        'w-[667px]',
        'h-[118px]',
        'cursor-pointer',
        'flex',
        'items-center',
        'gap-4',
        'border-none',
        'relative',
        'rounded-md',
        'p-4'
    );

    const imgTile = AppTile({
        height: 'h-[94px]',
        width: 'w-[94px]',
        imgUrl,
        imgAlt,
        classes: ['object-contain', 'rounded-md'],
    });

    const description = document.createElement('div');
    description.classList.add(
        'h-full',
        'flex',
        'flex-col',
        'justify-between',
        'py-1'
    );

    const title = AppTitle({
        tag: TitleTag.H3,
        textContent: productTitle,
        classes: ['font-rubik', 'text-[20px]', 'leading-normal'],
    });

    const price = AppPrice({
        fullPrice,
        discountRate,
        showDiscountedPrice,
    });

    description.append(title, price);
    cartItem.append(imgTile, description);

    cartItem.addEventListener('click', () => {
        router.navigate(`/product/${productId}`);
    });

    return cartItem;
}
