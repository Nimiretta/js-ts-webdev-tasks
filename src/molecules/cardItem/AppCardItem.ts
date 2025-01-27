import { AppTile, AppTitle, AppPrice } from '../../atoms';
import router from '../../router';
import { TCardItem, TitleTag } from '../../types';

export function AppCardItem({
    productId,
    productTitle,
    fullPrice,
    imgUrl,
    imgAlt,
}: TCardItem): HTMLDivElement {
    const cardItem = document.createElement('div');
    cardItem.classList.add(
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
        classes: [
            'font-rubik',
            'text-[20px]',
            'font-bold',
            'leading-normal',
            'text-black',
        ],
    });

    const price = AppPrice({
        fullPrice,
    });

    description.append(title, price);
    cardItem.append(imgTile, description);

    cardItem.addEventListener('click', () => {
        router.navigate(`/product/${productId}`);
    });

    return cardItem;
}
