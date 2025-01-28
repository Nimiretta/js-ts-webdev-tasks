import { TIconLink } from '../../types';

export function AppIconLink({
    pathToIcon,
    linkValue,
    width = 'w-6',
    height = 'auto',
}: TIconLink): HTMLDivElement {
    const block = document.createElement('div');
    const link = document.createElement('a');
    if (linkValue) {
        link.href = linkValue;
    }
    const iconLink = document.createElement('img');
    iconLink.src = new URL(`${pathToIcon}.src`, import.meta.url).href;
    block.append(link);
    link.append(iconLink);

    block.classList.add(width, height);

    iconLink.classList.add('w-full');

    return block;
}
