import { TitleTag, TTitle } from '../../types';

export function AppTitle({
    tag = TitleTag.H1,
    textContent = '',
    classes = [],
}: TTitle): HTMLElement {
    const title = document.createElement(tag);
    title.textContent = textContent;

    title.classList.add('font-bold', 'text-black', ...classes);

    return title;
}
