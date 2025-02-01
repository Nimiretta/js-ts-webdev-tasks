import { TIconLink } from '../../types';

/**
 * All icon's files for this component must be placed into src/assets/icons with svg extension
 * @param iconName just name of file w/o extension.
 */
export function AppIconLink({
    iconName,
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
    iconLink.src = new URL(
        `../../assets/icons/${iconName}.svg`,
        import.meta.url
    ).href;
    block.append(link);
    link.append(iconLink);

    block.classList.add(width, height);

    iconLink.classList.add('w-full');

    return block;
}
