import { createCart, updateCart } from '../../backend';
import {
    AppTitle,
    AppRating,
    AppPrice,
    AppText,
    AppCounter,
    AppButton,
} from '../../atoms';
import { TextTag, TitleTag, TProduct } from '../../types';
import { getRandomCartId, getRandomUserId } from '../../helpers/randomIds';

export function AppProductDesc({
    title,
    rating,
    price,
    discountPercentage,
    description,
    brand,
    stock,
    id,
}: TProduct): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add(
        'flex',
        'flex-col',
        'justify-between',
        'gap-6',
        'w-[36.875rem]'
    );

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('flex', 'flex-col', 'gap-3.5');
    const productTitle = AppTitle({
        tag: TitleTag.H1,
        textContent: title,
        classes: ['font-poppins', 'text-black', 'text-[40px]'],
    });
    const productRating = AppRating(rating);
    const productPrice = AppPrice({
        fullPrice: price,
        discountRate: discountPercentage,
        isBigText: true,
    });
    titleContainer.append(productTitle, productRating, productPrice);

    const productDescription = AppText({
        tag: TextTag.P,
        textContent: description,
        classes: ['font-rubik', 'text-base'],
    });

    const productBrand = AppText({
        tag: TextTag.P,
        textContent: 'Brand',
        classes: ['font-rubik', 'text-base'],
    });

    const brandValue = AppTitle({
        tag: TitleTag.H3,
        textContent: brand,
        classes: ['font-poppins', 'text-black', 'text-2xl'],
    });

    const productInStock = AppText({
        tag: TextTag.P,
        textContent: 'In Stock',
        classes: ['font-rubik', 'text-base'],
    });

    const amountInStock = AppTitle({
        tag: TitleTag.H3,
        textContent: `${stock} items`,
        classes: ['font-poppins', 'text-black', 'text-2xl'],
    });

    const btnBlock = document.createElement('div');
    btnBlock.classList.add('flex', 'gap-5');
    const counter = AppCounter('w-1/3');
    const btn = AppButton({
        label: 'Add to Cart',
        classes: ['h-12', 'w-2/3'],
        onClick: async () => {
            const quantity = counter.getValue();
            await addToCart({ id, quantity });
        },
    });
    btnBlock.append(counter.counterNode, btn);

    container.append(
        titleContainer,
        productDescription,
        divider(),
        productBrand,
        brandValue,
        divider(),
        productInStock,
        amountInStock,
        divider(),
        btnBlock
    );
    return container;
}

function divider() {
    const divider = document.createElement('div');
    divider.classList.add('h-[0.0625rem]', 'border', 'border-border-gray');
    return divider;
}

async function addToCart(cartParams: { id: number; quantity: number }) {
    const randomCartId = getRandomCartId();
    if (randomCartId > 50) {
        await createCart({
            userId: getRandomUserId(),
            products: [cartParams],
        });
    } else {
        await updateCart(randomCartId, {
            products: [cartParams],
        });
    }
}
