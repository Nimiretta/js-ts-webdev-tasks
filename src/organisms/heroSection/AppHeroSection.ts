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
    heroSection.classList.add('hero-section');
    heroSection.style.background = `url(${new URL('./heroImg.png', import.meta.url).href}) no-repeat`;

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    heroSection.appendChild(textContainer);

    const heroText = AppTitleText({
        titleText: 'FIND ANYTHING THAT MATCHES YOUR STYLE',
        tagText: TitleTag.H1,
        titleInnerHTML:
            '<div>FIND <u>ANYTHING</u> THAT MATCHES YOUR STYLE</div>',
        paragraph:
            'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
        widthClass: 'w-[34.0625rem]',
        heightClass: 'h-[16.0625rem]',
        titleClasses: ['text-[4rem]', 'leading-[4rem]', 'font-poppins', 'mb-8'],
        paragraphClasses: [
            'text-[1rem]',
            'font-rubik',
            'leading-[1.375rem]',
            'font-regular',
        ],
    });

    const shopNowButton = AppButton({
        label: 'Shop Now',
        classes: ['w-[13.125rem]', 'h-[3.25rem]', 'mt-8'],
    });

    shopNowButton.addEventListener('click', () => {
        const categoriesSection = document.getElementById('categories');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    textContainer.append(heroText, shopNowButton);

    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats-container');

    STATS_DATA.forEach((stat, index) => {
        const statBlock = AppTitleText({
            titleText: stat.title,
            tagText: TitleTag.H3,
            paragraph: stat.paragraph,
            titleClasses: ['text-[2.5rem]'],
            paragraphClasses: ['text-base'],
            widthClass: 'w-full',
            heightClass: 'h-full',
        });

        statsContainer.appendChild(statBlock);

        if (index < STATS_DATA.length - 1) {
            const separator = document.createElement('div');
            separator.classList.add('stat-separator');
            statsContainer.appendChild(separator);
        }
    });

    heroSection.appendChild(statsContainer);

    const logosContainer = document.createElement('div');
    logosContainer.classList.add('logos-container');

    LOGOS_DATA.forEach((logo) => {
        const brandLogo = document.createElement('img');
        brandLogo.src = logo;
        brandLogo.alt = 'Brand Logo';
        brandLogo.classList.add('brand-logo');
        logosContainer.appendChild(brandLogo);
    });

    heroSection.appendChild(logosContainer);

    return heroSection;
}
