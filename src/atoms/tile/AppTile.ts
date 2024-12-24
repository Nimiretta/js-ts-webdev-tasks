import { TTile } from '../../types';

export function AppTile({
    width,
    height,
    content,
    textSize,
    imgOptions,
    onClick,
}: TTile): HTMLElement {
    const tile = document.createElement('div');
    tile.className = `rounded-lg bg-tile-bg-gray flex`;
    tile.classList.add(width, height);

    if (content.startsWith('http')) {
        const img = document.createElement('img');
        if (imgOptions) {
            img.classList.add(...imgOptions);
        }
        img.src = content;
        tile.classList.add('justify-center', 'items-center');
        tile.append(img);
    } else {
        tile.textContent = content;
        tile.classList.add(
            'font-rubik',
            'text-black',
            'font-bold',
            'items-center'
        );
        if (textSize) {
            tile.classList.add(textSize);
        }
    }

    if (onClick) {
        tile.addEventListener('click', onClick);
    }

    return tile;
}
