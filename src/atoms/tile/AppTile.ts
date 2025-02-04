import { TTile } from '../../types';

export function AppTile({
    height,
    width = 'w-full',
    textContent,
    textSize,
    imgUrl,
    imgAlt = 'product image',
    imgOptions,
    classes,
    onClick,
}: TTile): HTMLElement {
    const tile = document.createElement('div');
    tile.classList.add(
        'rounded-3xl',
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
        tile.classList.add('justify-center', 'items-center');
        tile.append(img);
    } else if (textContent) {
        tile.textContent = textContent;
        tile.classList.add(
            'font-rubik',
            'text-black',
            'font-bold',
            'break-all'
        );
        if (textSize) {
            tile.classList.add(textSize);
        }
    }

    if (classes) {
        tile.classList.add(...classes);
    }

    if (onClick) {
        tile.addEventListener('click', onClick);
        tile.classList.add('cursor-pointer');
    }

    return tile;
}
