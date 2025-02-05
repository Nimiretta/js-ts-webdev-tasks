import { AppBreadcrumbs } from '../../molecules';
import { AppTitleText } from '../../molecules';
import { TitleTag, TOrderConfirmation } from '../../types';

export function AppOrderConfirmation({
    title = 'Order Confirmation',
    description = 'Success! Your order has been confirmed. Please check out your email address to track delivery progress.',
    page = 'confirmation',
}: TOrderConfirmation): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add('mt-6', 'mb-[29rem]');

    const breadcrumbs = AppBreadcrumbs({ page });
    breadcrumbs.classList.add('pb-10');

    const titleTextBlock = AppTitleText({
        titleText: title,
        tagText: TitleTag.H1,
        paragraph: description,
        paragraphClasses: [
            'text-sm',
            'font-rubik',
            'font-bold',
            'leading-[1.375rem]',
            'text-text-primary',
            'border',
            'border-border-gray',
            'rounded-[1.25rem]',
            'p-[1.25rem_1.5rem]',
            'mt-[1.125rem]',
            'max-w-[44.6875rem]',
        ],
        titleClasses: [
            'text-[2.5rem]',
            'font-poppins',
            'font-bold',
            'text-black',
        ],
        widthClass: 'w-auto',
        heightClass: 'h-auto',
    });

    container.append(breadcrumbs, titleTextBlock);

    return container;
}
