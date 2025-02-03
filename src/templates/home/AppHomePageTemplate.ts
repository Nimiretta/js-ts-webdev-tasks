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
        'items-center',
        'p-8',
        'w-[90rem]'
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
            'text-[48px]',
            'mt-16',
            'mb-12',
        ],
    });

    categoriesSection.id = 'categories';
    categoriesSection.appendChild(categoriesTitle);

    const categoryTiles = categories.map((category) => ({
        textContent: formatCategoryName(category.name),
        height: 'h-[298px]',
        width: 'w-[295px]',
        classes: [
            'flex-wrap',
            'text-black',
            'font-rubik',
            'text-[4rem]',
            'font-bold',
            'whitespace-pre-line',
        ],
        onClick: () => router.navigate(`/category/${category.slug}`),
    }));

    const categoryGrid = AppGrid({
        width: 'w-full',
        height: 'h-auto',
        columns: 4,
        tiles: categoryTiles,
        classes: ['grid', 'place-items-center', 'px-16'],
    });

    categoriesSection.appendChild(categoryGrid);
    homePage.appendChild(categoriesSection);

    return homePage;
}
