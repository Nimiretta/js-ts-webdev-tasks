import { AppButton, AppTitle, AppText } from '../../atoms';
import router from '../../router';
import { TextTag, TitleTag, TOrderSummary } from '../../types';

export function AppOrderSummary({
    total,
    discountedTotal,
    btnText,
    btnPath,
    btnForm,
}: TOrderSummary): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add(
        'flex',
        'flex-col',
        'w-[31.5625rem]',
        'px-[1.25rem]',
        'pt-[1.25rem]',
        'pb-8',
        'gap-[1.5rem]',
        'rounded-[1.25rem]',
        'border',
        'border-border-gray'
    );

    const title = AppTitle({
        tag: TitleTag.H3,
        textContent: 'Order Summary',
        classes: ['font-rubik', 'text-2xl'],
    });

    const subTotalBlock = createLineBlock({
        textContent: 'Subtotal',
        value: `$${total}`,
        valueColor: 'text-black',
        valueSize: 'text-xl',
    });

    const discountBlock = createLineBlock({
        textContent: `Discount (-${Math.round(((total - discountedTotal) / total) * 100)}%)`,
        value: `-$${total - discountedTotal}`,
        valueColor: 'text-discount-text-red',
        valueSize: 'text-xl',
    });

    const divider = document.createElement('div');
    divider.classList.add('h-[0.0625rem]', 'border', 'border-border-gray');

    const totalBlock = createLineBlock({
        textContent: 'Total',
        textColor: 'text-black',
        value: `$${discountedTotal}`,
        valueColor: 'text-black',
        valueSize: 'text-2xl',
    });

    const iconSrc = new URL('./arrow.svg', import.meta.url).href;
    const btn = AppButton({
        type: btnForm?.btnType,
        innerHTML: `${btnText} <img src="${iconSrc}" alt="arrow" class="w-6 h-6" />`,
        classes: ['flex', 'gap-3', 'justify-center'],
        onClick: () => router.navigate(btnPath),
    });
    if (btnForm) {
        btn.setAttribute('form', btnForm.formId);
    }

    container.append(
        title,
        subTotalBlock,
        discountBlock,
        divider,
        totalBlock,
        btn
    );
    return container;
}

function createLineBlock({
    textContent,
    textColor,
    value,
    valueColor,
    valueSize,
}: {
    textContent: string;
    textColor?: string;
    value: string;
    valueColor: string;
    valueSize: string;
}): HTMLDivElement {
    const block = document.createElement('div');
    block.classList.add('flex', 'justify-between', 'items-center');

    const nameBlock = AppText({
        tag: TextTag.P,
        textContent,
        textColor,
        classes: ['font-rubik', 'text-xl'],
    });

    const valueBlock = AppText({
        tag: TextTag.P,
        textContent: value,
        textColor: valueColor,
        classes: ['font-rubik', 'font-bold', 'text-right', valueSize],
    });

    block.append(nameBlock, valueBlock);
    return block;
}
