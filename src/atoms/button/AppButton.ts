import { TButton } from '../../types';

export function AppButton({
    type = 'button',
    label = '',
    innerHTML,
    textColor = 'text-white',
    backgroundColor = 'bg-black',
    onClick,
    classes = [],
    isDefaultStyle = false,
}: TButton): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = type;

    if (isDefaultStyle) {
        button.classList.add('p-0', 'w-auto', 'h-auto', 'bg-transparent');
    } else {
        button.classList.add(
            backgroundColor,
            textColor,
            'rounded-full',
            'text-base',
            'font-medium',
            'font-rubik',
            'w-full',
            'text-center',
            ...classes
        );
    }

    if (innerHTML) {
        button.innerHTML = innerHTML;
    } else {
        button.textContent = label;
    }

    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}
