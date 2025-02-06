import { AppTile } from '../../atoms';
import { TGrid } from '../../types';
import { AppCard } from '../card/AppCard';

export function AppGrid({
    width,
    height = 'h-auto',
    rows,
    columns,
    tiles,
    cards,
    gap = 'gap-4',
    classes,
}: TGrid): HTMLElement {
    const tileCount = tiles ? tiles.length : cards ? cards.length : 0;
    const calculatedRows = rows || Math.ceil(tileCount / columns);

    const grid = document.createElement('div');
    grid.classList.add(
        width,
        height,
        'grid',
        `grid-rows-${calculatedRows}`,
        `lg:grid-cols-${columns}`,
        gap
    );

    if (tiles) {
        tiles.forEach((tile) => {
            grid.appendChild(AppTile(tile));
        });
    }

    if (cards) {
        cards.forEach((card) => {
            grid.appendChild(AppCard(card));
        });
    }

    if (classes) {
        grid.classList.add(...classes);
    }

    return grid;
}
