import { TGrid } from '../../types';

export function AppGrid({
    width,
    height,
    rows,
    columns,
    tiles,
    gap = 'gap-4',
}: TGrid): HTMLElement {
    const tileCount = tiles.length;

    const calculatedRows = rows || Math.ceil(tileCount / columns);

    const grid = document.createElement('div');
    grid.classList.add(
        width,
        height,
        'grid',
        `grid-rows-${calculatedRows}`,
        `grid-cols-${columns}`,
        gap
    );

    tiles.forEach((tile) => {
        grid.appendChild(tile);
    });

    return grid;
}
