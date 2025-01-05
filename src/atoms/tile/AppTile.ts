import { TTile } from '../../types';

export function AppTile({
    height,
    width = 'w-full',
    textContent,
    textSize,
    imgUrl,
    imgAlt = 'product image',
    imgOptions,
    onClick,
}: TTile): HTMLElement {
    const tile = document.createElement('div');
    tile.classList.add(
        'rounded-lg',
        'bg-tile-bg-gray',
        'flex',
        'items-center',
        width,
        height
    );

    if (imgUrl) {
        const img = document.createElement('img');
        if (imgOptions) {
            img.classList.add(...imgOptions);
        }
        img.src = imgUrl;
        img.alt = imgAlt;
        tile.classList.add('justify-center');
        tile.append(img);
    } else if (textContent) {
        tile.textContent = textContent;
        tile.classList.add('font-rubik', 'text-black', 'font-bold');
        if (textSize) {
            tile.classList.add(textSize);
        }
    }

    if (onClick) {
        tile.addEventListener('click', onClick);
        tile.classList.add('cursor-pointer');
    }

    return tile;
}
