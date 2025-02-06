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
    const commonTextProps = {
        tag: TextTag.P,
        classes: ['font-rubik', 'lg:text-base', 'text-sm'],
    };
    const commonTitleProps = {
        tag: TitleTag.H3,
        classes: ['font-poppins', 'text-black', 'lg:text-2xl', 'text-xl'],
    };

    const container = document.createElement('div');
    container.classList.add('flex', 'flex-col', 'justify-between', 'gap-4');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('flex', 'flex-col', 'gap-2');
    const productTitle = AppTitle({
        tag: TitleTag.H1,
        textContent: title,
        classes: ['font-poppins', 'text-black', 'lg:text-[40px]', 'text-2xl'],
    });
    const productRating = AppRating(rating);
    const productPrice = AppPrice({
        fullPrice: price,
        discountRate: discountPercentage,
        isBigText: true,
    });
    titleContainer.append(productTitle, productRating, productPrice);

    const productDescription = AppText({
        textContent: description,
        ...commonTextProps,
    });

    const productBrand = AppText({
        textContent: 'Brand',
        ...commonTextProps,
    });

    const brandValue = AppTitle({
        textContent: brand ? brand : 'N/A',
        ...commonTitleProps,
    });

    const productInStock = AppText({
        textContent: 'In Stock',
        ...commonTextProps,
    });

    const amountInStock = AppTitle({
        textContent: stock ? `${stock} items` : 'Out of Stock',
        ...commonTitleProps,
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
    try {
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
    } catch (err) {
        console.error('Adding to Cart failed: ', err);
    }
}
