import { AppButton } from '../../atoms';
import { AppTitleText } from '../../molecules';
import { TitleTag } from '../../types';
import './AppHeroSection.css';

const STATS_DATA = [
    { title: '200+', paragraph: 'International Brands' },
    { title: '2,000+', paragraph: 'High-Quality Products' },
    { title: '30,000+', paragraph: 'Happy Customers' },
];

const LOGOS_DATA = [
    new URL('./versace.svg', import.meta.url).href,
    new URL('./zara.svg', import.meta.url).href,
    new URL('./gucci.svg', import.meta.url).href,
    new URL('./prada.svg', import.meta.url).href,
    new URL('./calvin.svg', import.meta.url).href,
];

export function AppHeroSection(): HTMLElement {
    const heroSection = document.createElement('section');
    heroSection.classList.add(
        'w-full',
        'lg:h-[49rem]',
        'relative',
        'flex',
        'flex-col',
        'mx-auto'
    );

    const container = document.createElement('div');
    container.classList.add(
        'flex',
        'justify-between',
        'bg-bg-gray',
        'lg:flex-row',
        'flex-col'
    );

    const textStatsContainer = document.createElement('div');
    textStatsContainer.classList.add('lg:w-1/2', 'lg:flex', 'lg:flex-col');
    const textContainer = document.createElement('div');
    textContainer.classList.add(
        'lg:pt-[6.4375rem]',
        'pt-10',
        'flex',
        'flex-col',
        'items-start',
        'px-4',
        'lg:px-0'
    );
    textStatsContainer.append(textContainer);

    const heroText = AppTitleText({
        titleText: 'FIND ANYTHING THAT MATCHES YOUR STYLE',
        tagText: TitleTag.H1,
        titleInnerHTML:
            '<div>FIND <u>ANYTHING</u> THAT MATCHES YOUR STYLE</div>',
        paragraph:
            'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
        widthClass: 'lg:w-[34.0625rem]',
        heightClass: 'lg:h-[16.0625rem]',
        titleClasses: [
            'lg:text-[4rem]',
            'text-4xl',
            'lg:leading-[4rem]',
            'font-poppins',
            'mb-8',
        ],
        paragraphClasses: [
            'lg:text-[1rem]',
            'text-sm',
            'font-rubik',
            'leading-[1.375rem]',
            'font-regular',
        ],
    });

    const shopNowButton = AppButton({
        label: 'Shop Now',
        classes: ['lg:w-[13.125rem]', 'w-full', 'h-[3.25rem]', 'mt-8'],
        onClick: () => {
            const categoriesSection = document.getElementById('categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
    });

    textContainer.append(heroText, shopNowButton);

    const statsContainer = document.createElement('div');
    statsContainer.classList.add(
        'h-auto',
        'mt-12',
        'flex',
        'lg:gap-6',
        'gap-4',
        'font-rubik',
        'flex-wrap',
        'lg:w-full',
        'w-72',
        'justify-center',
        'mx-auto',
        'lg:mx-0'
    );

    STATS_DATA.forEach((stat, index) => {
        const statBlock = AppTitleText({
            titleText: stat.title,
            tagText: TitleTag.H3,
            paragraph: stat.paragraph,
            titleClasses: ['lg:text-[2.5rem]', 'text-2xl'],
            paragraphClasses: ['lg:text-base', 'text-xs'],
            widthClass: 'w-fit',
            heightClass: 'h-full',
        });

        statsContainer.appendChild(statBlock);

        if (index < STATS_DATA.length - 1) {
            const separator = document.createElement('div');
            separator.classList.add('stat-separator');
            statsContainer.appendChild(separator);
        }
    });

    textStatsContainer.append(statsContainer);
    const img = document.createElement('img');
    img.src = new URL('./heroImg.png', import.meta.url).href;
    img.alt = 'background picture';
    container.append(textStatsContainer, img);

    const logosContainer = document.createElement('div');
    logosContainer.classList.add(
        'lg:h-[7.625rem]',
        'flex',
        'gap-8',
        'lg:gap-0',
        'px-4',
        'py-10',
        'lg:p-0',
        'justify-center',
        'items-center',
        'lg:justify-between',
        'items-center',
        'w-full',
        'bg-black',
        'absolute',
        'bottom-0',
        'flex-wrap'
    );

    LOGOS_DATA.forEach((logo) => {
        const brandLogo = document.createElement('img');
        brandLogo.src = logo;
        brandLogo.alt = 'Brand Logo';
        brandLogo.classList.add('brand-logo');
        logosContainer.appendChild(brandLogo);
    });

    heroSection.append(container, logosContainer);

    return heroSection;
}
