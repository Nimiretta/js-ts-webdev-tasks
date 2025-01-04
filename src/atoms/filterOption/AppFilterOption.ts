/**
 * attribute's data-filter-selected presence shows whether the filter is selected or not for further use
 */
export function AppFilterOption(text: string): HTMLDivElement {
    const filterOption = document.createElement('div');
    filterOption.classList.add(
        'text-text-primary',
        'text-base',
        'cursor-pointer'
    );
    filterOption.textContent = text;

    filterOption.addEventListener('click', () => {
        filterOption.classList.toggle('font-bold');
        filterOption.toggleAttribute('data-filter-selected');
    });

    return filterOption;
}
