export function AppRating(rating: number): HTMLDivElement {
    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('flex', 'gap-2.5', 'items-center');

    const starContainer = document.createElement('div');
    starContainer.classList.add('w-fit', 'h-5');
    const starImg = document.createElement('img');
    starImg.classList.add('h-full', 'object-left', 'object-none');
    starImg.src = new URL('./stars.svg', import.meta.url).href;
    starImg.alt = 'Rating';
    starContainer.append(starImg);
    const starWidth = 100 * (rating / 5) - 3;
    starImg.style.width = `${starWidth}%`;

    const ratingValue = document.createElement('div');
    ratingValue.classList.add(
        'font-rubik',
        'text-sm',
        'relative',
        'align-middle'
    );
    ratingValue.style.left = `-${(5 - rating) * 25}px`;
    const actualRating = document.createElement('span');
    actualRating.classList.add('text-black');
    actualRating.textContent = Number.isInteger(rating)
        ? `${rating}.0/`
        : `${rating}/`;
    const maxRating = document.createElement('span');
    maxRating.classList.add('text-text-primary');
    maxRating.textContent = '5';
    ratingValue.append(actualRating, maxRating);

    ratingContainer.append(starContainer, ratingValue);

    return ratingContainer;
}
