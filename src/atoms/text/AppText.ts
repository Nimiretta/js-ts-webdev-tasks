import { TextTag, TText } from '../../types';

export function AppText({
    tag = TextTag.SPAN,
    textContent = '',
    innerHTML = '',
    classes = [],
    textColor = 'text-discount-gray',
}: TText): HTMLElement {
    const textElement = document.createElement(innerHTML ? 'div' : tag);

    if (innerHTML) {
        textElement.innerHTML = innerHTML;
    } else {
        textElement.textContent = textContent;
    }

    textElement.classList.add(textColor, ...classes);

    return textElement;
}
