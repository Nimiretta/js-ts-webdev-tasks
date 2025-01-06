import { AppTile, AppTitle, AppRating, AppPrice } from '../../atoms';
import router from '../../router';
import { TCard, TitleTag } from '../../types';

export function AppCard({
    productId,
    productTitle,
    fullPrice,
    discountRate,
    ratingValue,
    imgUrl,
    imgAlt,
}: TCard): HTMLDivElement {
    const card = document.createElement('div');
    card.classList.add(
        'w-72',
        'h-[25.375rem]',
        'cursor-pointer',
        'flex',
        'flex-col',
        'gap-4'
    );

    const imgTile = AppTile({
        height: 'h-[18.625rem]',
        imgUrl,
        imgAlt,
    });

    const description = document.createElement('div');
    description.classList.add('flex', 'flex-col', 'gap-2.5');

    const title = AppTitle({
        tag: TitleTag.H3,
        textContent: productTitle,
        classes: ['font-rubik', 'text-xl'],
    });

    const rating = AppRating(ratingValue);

    const price = AppPrice({
        fullPrice,
        discountRate,
    });

    description.append(title, rating, price);
    card.append(imgTile, description);

    card.addEventListener('click', () => {
        router.navigate(`/product/${productId}`);
    });

    return card;
}
