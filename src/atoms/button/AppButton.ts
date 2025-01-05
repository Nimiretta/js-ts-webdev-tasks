import { TButton } from '../../types';

export function AppButton({
    label = '',
    innerHTML,
    textColor = 'text-white',
    backgroundColor = 'bg-black',
    onClick,
}: TButton): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    if (innerHTML) {
        button.innerHTML = innerHTML;
    } else {
        button.textContent = label;
    }
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
        'cursor-pointer'
    );

    button.addEventListener('click', onClick);

    return button;
}
