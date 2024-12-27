import { TPrice } from '../../types';

export function AppPrice({
    fullPrice,
    discountRate,
    showDiscountedPrice = true,
    isBigText = false,
}: TPrice): HTMLElement {
    // isBigText = true is needed for product detail page
    const mainTextSize = isBigText ? 'text-3xl' : 'text-2xl';

    const price = document.createElement('div');
    price.classList.add(
        'font-rubik',
        'flex',
        'gap-2',
        mainTextSize,
        'items-center'
    );
    const elementsToAppend = [];

    let discountedPriceEl;
    let discountEl;

    const fullPriceEl = document.createElement('span');
    fullPriceEl.classList.add('font-bold', 'text-black');
    fullPriceEl.textContent = `$${fullPrice}`;

    if (discountRate) {
        const discountTextSize = isBigText ? 'text-sm' : 'text-xs';
        discountRate = Math.round(discountRate);
        discountEl = document.createElement('div');
        discountEl.classList.add(
            'text-discount-text-red',
            'font-medium',
            'bg-discount-bg-red',
            'rounded-full',
            discountTextSize,
            'flex',
            'items-center',
            'justify-center',
            'py-1.5',
            'px-3.5',
            'h-7'
        );
        discountEl.textContent = `-${discountRate}%`;
        if (showDiscountedPrice) {
            fullPriceEl.classList.replace('text-black', 'text-discount-gray');
            fullPriceEl.classList.add('line-through');
            const discountedPrice = (
                fullPrice -
                (fullPrice * discountRate) / 100
            ).toFixed(2);
            discountedPriceEl = document.createElement('span');
            discountedPriceEl.classList.add('text-black', 'font-bold');
            discountedPriceEl.textContent = `$${discountedPrice}`;
            elementsToAppend.push(discountedPriceEl, fullPriceEl);
        } else {
            elementsToAppend.push(fullPriceEl);
        }
        elementsToAppend.push(discountEl);
    } else {
        elementsToAppend.push(fullPriceEl);
    }

    price.append(...elementsToAppend);
    return price;
}
