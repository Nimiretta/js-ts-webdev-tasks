import { TButtonLink } from '../../types';

export function AppButtonLink({
    icon,
    linkValue,
    target = '_blank',
    width = 'w-6',
    height = 'auto',
}: TButtonLink): HTMLDivElement {
    const block = document.createElement('div');
    const link = document.createElement('a');
    link.href = linkValue;
    link.target = target;
    const iconLink = document.createElement('img');
    iconLink.src = icon;
    block.append(link);
    link.append(iconLink);

    block.classList.add(width, height);

    iconLink.classList.add('w-full');

    console.log(block.className);

    return block;
}
