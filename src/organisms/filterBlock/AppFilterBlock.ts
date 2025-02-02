import {
    AppTitle,
    AppSlider,
    AppButton,
    AppFilterOption,
    AppText,
} from '../../atoms';
import { TextTag, TFilterCbParams, TitleTag, TSlider } from '../../types';

export function AppFilterBlock(
    brands: string[],
    applyFilterCb: (params: TFilterCbParams) => void
): HTMLDivElement {
    const filterBlock = document.createElement('div');
    filterBlock.setAttribute('id', 'filterBlock');
    filterBlock.classList.add(
        'flex',
        'flex-col',
        'gap-6',
        'p-6',
        'rounded-[1.25rem]',
        'border',
        'border-border-gray',
        'font-rubik',
        'w-1/4',
        'h-fit'
    );

    const header = document.createElement('div');
    header.classList.add('flex', 'justify-between', 'items-center');
    const headerTitle = createTitle('Filters');
    const filterIcon = document.createElement('img');
    filterIcon.classList.add('w-6', 'h-6');
    filterIcon.src = new URL('./filterIcon.svg', import.meta.url).href;
    filterIcon.alt = 'filter icon';
    header.append(headerTitle, filterIcon);

    const brandSection = createFilterSection('Brand', brands);

    const sortSection = createFilterSection('Sort', [
        'Ascending',
        'Descending',
    ]);

    const { priceSection, slider } = createPriceSection();

    const applyBtn = AppButton({
        label: 'Apply Filter',
        classes: ['h-12'],
        onClick: async () => await applyFilter(slider, applyFilterCb),
    });
    const resetBtn = AppButton({
        label: 'Reset Filter',
        textColor: 'text-black',
        backgroundColor: 'bg-btn-bg-gray',
        classes: ['h-12'],
        onClick: async () => await resetFilter(slider, applyFilterCb),
    });

    filterBlock.append(
        header,
        divider(),
        brandSection,
        divider(),
        sortSection,
        divider(),
        priceSection,
        divider(),
        applyBtn,
        resetBtn
    );
    return filterBlock;
}

function divider() {
    const divider = document.createElement('div');
    divider.classList.add('h-[0.0625rem]', 'border', 'border-border-gray');
    return divider;
}

function createTitle(textContent: string) {
    return AppTitle({
        tag: TitleTag.H3,
        textContent,
        classes: ['text-xl'],
    });
}

function createFilterSection(title: string, options: string[]) {
    const section = document.createElement('div');
    section.setAttribute('id', title.toLowerCase());
    section.classList.add('flex', 'flex-col', 'gap-5');

    const sectionTitle = createTitle(title);
    const filterOptions = [...new Set(options)].map((option) => {
        if (option !== undefined) {
            return AppFilterOption(option);
        } else {
            return AppText({
                tag: TextTag.P,
                textContent: 'No available brands',
                classes: ['text-base'],
            });
        }
    });

    section.append(sectionTitle, ...filterOptions);
    return section;
}

function createPriceSection() {
    const priceSection = document.createElement('div');
    priceSection.classList.add('flex', 'flex-col', 'gap-5');

    const priceHeader = document.createElement('div');
    priceHeader.classList.add('flex', 'justify-between', 'items-center');

    const priceTitle = createTitle('Price');

    const priceIcon = document.createElement('img');
    priceIcon.classList.add('w-4', 'h-4');
    priceIcon.src = new URL('./priceIcon.svg', import.meta.url).href;
    priceIcon.alt = 'price icon';

    priceHeader.append(priceTitle, priceIcon);

    const slider = AppSlider();

    priceSection.append(priceHeader, slider.sliderNode);

    return { priceSection, slider };
}

function getSelectedElements(id: string): HTMLElement[] | null {
    const filter = document.getElementById(id);
    if (filter) {
        return Array.from(filter.querySelectorAll('[data-filter-selected]'));
    }
    return null;
}

async function applyFilter(
    slider: TSlider,
    applyFilterCb: (params: TFilterCbParams) => void
) {
    try {
        let selectedBrands: (string | null)[] = [];
        const selectedBrandElements = getSelectedElements('brand');
        if (selectedBrandElements) {
            selectedBrands = selectedBrandElements.map((el) => el.textContent);
        }

        let selectedSort: 'asc' | 'desc' | null = null;
        const sortElements = getSelectedElements('sort');
        if (sortElements) {
            const sortSelectedOptions = sortElements.map(
                (el) => el.textContent
            );
            if (sortSelectedOptions.length === 1) {
                selectedSort =
                    sortSelectedOptions[0] === 'Ascending' ? 'asc' : 'desc';
            }
        }

        const priceFilter = {
            min: slider.getLowValue(),
            max: slider.getHighValue(),
        };

        await applyFilterCb({
            brands: selectedBrands,
            sort: selectedSort,
            price: priceFilter,
        });
    } catch (err) {
        console.error('Filtering failed: ', err);
    }
}

async function resetFilter(
    slider: TSlider,
    applyFilterCb: (params: TFilterCbParams) => void
) {
    try {
        const selectedFilters = getSelectedElements('filterBlock');
        if (selectedFilters) {
            selectedFilters.forEach((el) => {
                el.classList.toggle('font-bold');
                el.toggleAttribute('data-filter-selected');
            });
        }

        slider.reset();

        await applyFilterCb({
            brands: [],
            sort: null,
            price: {
                min: Number.MIN_VALUE,
                max: Number.MAX_VALUE,
            },
        });
    } catch (err) {
        console.error('Resetting filter failed: ', err);
    }
}
