import { TButton } from '../../types';

export function AppButton({
    label = '',
    innerHTML,
    textColor = 'text-white',
    backgroundColor = 'bg-black',
    //padding,
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
        'w-full',
        'cursor-pointer'
    );
    //button.style.padding = padding;

    button.addEventListener('click', onClick);

    return button;
}
