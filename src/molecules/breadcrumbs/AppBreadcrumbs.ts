import { AppLabelLink } from '../../atoms';
import { TBreadcrumbs } from '../../types';

export function AppBreadcrumbs({
    category,
    product,
    page,
}: TBreadcrumbs): HTMLDivElement {
    const breadcrumbs = document.createElement('div');
    breadcrumbs.classList.add('flex', 'gap-4', 'flex-wrap', 'items-center');
    const items = ['Home'];

    if (category) {
        items.push(category);
    }

    if (product) {
        items.push(product);
    }

    switch (page) {
        case 'cart':
        case 'checkout':
        case 'payment':
            items.push(page);
            break;
        case 'confirmation':
            items.push('Order Confirmation');
            break;
        default:
            break;
    }

    items.forEach((item, index) => {
        const isLast = index === items.length - 1;
        const itemElement = createItem(item, isLast);
        breadcrumbs.append(itemElement);
    });

    return breadcrumbs;
}

function createItem(itemLabel: string, isLast: boolean): HTMLDivElement {
    itemLabel = itemLabel
        .split('-')
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(' ');
    const item = document.createElement('div');
    item.classList.add('flex', 'gap-2.5', 'items-center');
    const label = AppLabelLink(itemLabel, isLast);
    item.append(label);
    if (!isLast) {
        const divider = document.createElement('img');
        divider.classList.add('w-3', 'lg:w-4', 'h-3', 'lg:h-4');
        divider.src = new URL('./divider.svg', import.meta.url).href;
        divider.alt = 'divider';
        item.append(divider);
    }
    return item;
}
