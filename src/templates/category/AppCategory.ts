import { AppBreadcrumbs, AppGrid } from '../../molecules';
import { AppText, AppTitle } from '../../atoms';
import { AppFilterBlock } from '../../organisms';
import { TCategory, TextTag, TFilterCbParams, TitleTag } from '../../types';
import { getProductsByCategory } from '../../backend';

export function AppCategory({
    category,
    brands,
    cards,
}: TCategory): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add('mt-6');

    const breadcrumbs = AppBreadcrumbs({ category });
    breadcrumbs.classList.add('pb-10');

    const mainBlock = document.createElement('div');
    mainBlock.classList.add('flex', 'gap-5');

    const filterBlock = AppFilterBlock(brands, applyFilterCb);

    const gridBlock = document.createElement('div');
    gridBlock.classList.add('border-b', 'border-border-gray', 'pb-8', 'w-3/4');
    const gridTitle = AppTitle({
        tag: TitleTag.H3,
        textContent: category
            .split('-')
            .map((el) => el[0].toUpperCase() + el.slice(1))
            .join(' '),
        classes: ['font-rubik', 'text-[2rem]', 'text-black', 'pb-5'],
    });
    gridTitle.setAttribute('id', 'title');
    gridTitle.setAttribute('data-category', category);
    const grid = AppGrid({
        width: 'w-full',
        columns: 3,
        gap: 'gap-5',
        cards,
    });
    grid.setAttribute('id', 'product-grid');
    gridBlock.append(gridTitle, grid);

    mainBlock.append(filterBlock, gridBlock);

    container.append(breadcrumbs, mainBlock);
    return container;
}

async function applyFilterCb(params: TFilterCbParams) {
    const { brands, sort, price } = params;
    const grid = document.getElementById('product-grid');
    const category = document
        .getElementById('title')
        ?.getAttribute('data-category');
    if (category && grid) {
        try {
            const sortedProducts = await getProductsByCategory({
                category,
                sortOptions: !sort
                    ? undefined
                    : { sortBy: 'price', order: sort },
            });
            const filteredProducts = sortedProducts.filter((el) => {
                const discountedPrice =
                    el.discountPercentage && el.discountPercentage > 0.49
                        ? Number(
                              (
                                  el.price -
                                  (el.price * el.discountPercentage) / 100
                              ).toFixed(2)
                          )
                        : el.price;
                return (
                    (!brands.length || brands.includes(el.brand)) &&
                    discountedPrice >= price.min &&
                    discountedPrice <= price.max
                );
            });
            if (filteredProducts.length) {
                const cards = filteredProducts.map((el) => {
                    return {
                        productId: el.id,
                        productTitle: el.title,
                        fullPrice: el.price,
                        discountRate: el.discountPercentage,
                        ratingValue: el.rating,
                        imgUrl: el.images[0],
                    };
                });
                const gridUpd = AppGrid({
                    width: 'w-full',
                    columns: 3,
                    cards,
                });
                grid.replaceChildren(...gridUpd.children);
            } else {
                grid.innerHTML = '';
                const noResultText = AppText({
                    tag: TextTag.P,
                    textContent: 'Nothing found',
                    classes: [
                        'text-xl',
                        'font-rubik',
                        'font-bold',
                        'border',
                        'border-border-gray',
                        'rounded-[1.25rem]',
                        'p-5',
                        'text-center',
                    ],
                });
                grid.append(noResultText);
            }
        } catch (err) {
            console.error('Filtering failed: ', err);
        }
    }
}
