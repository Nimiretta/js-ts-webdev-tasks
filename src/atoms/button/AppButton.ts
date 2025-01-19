import { TButton } from '../../types';

export function AppButton({
    type = 'button',
    label = '',
    innerHTML,
    textColor = 'text-white',
    backgroundColor = 'bg-black',
    onClick,
    classes = [],
    minimal = false,
}: TButton): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = type;

    if (minimal) {
        button.classList.add('p-0', 'w-auto', 'h-auto', 'bg-transparent');
    } else {
        button.classList.add(
            backgroundColor,
            textColor,
            'rounded-full',
            'text-base',
            'font-medium',
            'font-rubik',
            'py-4',
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
