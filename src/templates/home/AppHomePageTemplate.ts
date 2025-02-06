import { AppTitle } from '../../atoms';
import { AppGrid } from '../../molecules';
import { AppHeroSection } from '../../organisms';
import { TitleTag, TProductCategory } from '../../types';
import router from '../../router';

export function AppHomePageTemplate(
    categories: TProductCategory[]
): HTMLElement {
    const formatCategoryName = (name: string): string => {
        const words = name.split(' ');
        if (words.length > 1) {
            return words[0] + '\n' + words.slice(1).join(' ');
        }
        return name;
    };

    const homePage = document.createElement('div');
    homePage.classList.add(
        'flex',
        'flex-col',
        'lg:items-center',
        'items-stretch',
        'w-full'
    );

    const heroSection = AppHeroSection();
    homePage.appendChild(heroSection);

    const categoriesSection = document.createElement('section');

    const categoriesTitle = AppTitle({
        tag: TitleTag.H2,
        textContent: 'Categories',
        classes: [
            'text-black',
            'text-center',
            'font-poppins',
            'lg:text-[48px]',
            'text-4xl',
            'mt-16',
            'mb-12',
        ],
    });

    categoriesSection.id = 'categories';
    categoriesSection.appendChild(categoriesTitle);

    const categoryTiles = categories.map((category) => ({
        textContent: formatCategoryName(category.name),
        height: 'lg:h-[298px]',
        width: 'lg:w-[295px]',
        classes: [
            'flex-wrap',
            'text-black',
            'font-rubik',
            'lg:text-[4rem]/[4.5rem]',
            'text-[2rem]/[2.3rem]',
            'font-bold',
            'whitespace-pre-line',
            'w-[159px]',
            'h-[169px]',
        ],
        onClick: () => router.navigate(`/category/${category.slug}`),
    }));

    const categoryGrid = AppGrid({
        width: 'w-full',
        height: 'h-auto',
        columns: 4,
        tiles: categoryTiles,
        classes: ['grid', 'place-items-center', 'grid-cols-2'],
    });

    categoriesSection.appendChild(categoryGrid);
    homePage.appendChild(categoriesSection);

    renderFullHeroBg();
    return homePage;
}

function renderFullHeroBg() {
    const heroBg = document.createElement('div');
    heroBg.setAttribute('id', 'hero-bg');
    heroBg.classList.add(
        'bg-bg-gray',
        'w-dvw',
        'absolute',
        'left-0',
        'h-[49rem]',
        'hidden',
        'lg:block'
    );
    const logoBg = document.createElement('div');
    logoBg.classList.add(
        'bg-black',
        'w-dvw',
        'h-[7.625rem]',
        'absolute',
        'bottom-0'
    );
    const header = document.getElementById('header');
    heroBg.append(logoBg);
    header?.after(heroBg);
}
