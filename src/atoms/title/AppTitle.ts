import { TitleTag, TTitle } from '../../types';

export function AppTitle({
    tag = TitleTag.H1,
    textContent = '',
    innerHTML = '',
    classes = [],
}: TTitle): HTMLElement {
    const title = document.createElement(tag);

    if (innerHTML) {
        title.innerHTML = innerHTML;
    } else {
        title.textContent = textContent;
    }

    title.classList.add('font-bold', 'text-black', ...classes);

    return title;
}
