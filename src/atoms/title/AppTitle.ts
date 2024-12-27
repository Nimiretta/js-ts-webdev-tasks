import { TTitle } from '../../types';

export function AppTitle({
    tag = 'h1',
    textContent = '',
    innerHTML,
    classes = [],
}: TTitle): HTMLElement {
    const headerTags: (keyof HTMLElementTagNameMap)[] = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
    ];
    const headerTag = headerTags.includes(tag) ? tag : 'h1';
    const title = document.createElement(headerTag);

    if (innerHTML) {
        title.innerHTML = innerHTML;
    } else {
        title.textContent = textContent;
    }

    title.classList.add('font-bold', 'text-black', ...classes);

    return title;
}
