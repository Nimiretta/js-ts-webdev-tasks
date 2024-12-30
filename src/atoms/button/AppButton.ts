import { TButton } from './types';

export function AppButton({
    label,
    backgroundColor = 'rgba(0, 0, 0, 1)',
    textColor = 'rgba(255, 255, 255, 1)',
    borderRadius = '62px',
    padding,
    fontSize,
    fontWeight,
    fontFamily = 'Rubik',
    onClick,
}: TButton): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
    button.style.borderRadius = borderRadius;
    button.style.padding = padding;
    button.style.fontSize = fontSize;
    button.style.fontWeight = fontWeight;
    button.style.fontFamily = fontFamily;

    button.addEventListener('click', onClick);

    return button;
}
