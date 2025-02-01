import { AppIconLink } from '../../atoms/iconLink/AppIconLink';
import { AppTitle } from '../../atoms/title/AppTitle';
import { AppText } from '../../atoms/text/AppText';
import { AppLinkSection } from '../../molecules/linkSection/AppLinkSection';
import { TitleTag } from '../../types';

export function AppFooter(): HTMLElement {
    const footer = document.createElement('footer');
    footer.classList.add(
        'bg-gray-400',
        'py-8',
        'px-10',
        'sm:px-16',
        'w-full',
        'mt-auto',
        'flex',
        'flex-col'
    );

    const footerContainer = document.createElement('div');
    footerContainer.classList.add(
        'flex',
        'items-start',
        'w-full',
        'grid',
        'grid-cols-2',
        'md:grid-cols-5',
        'gap-8',
        'justify-between',
        'pb-6',
        'border-b',
        'border-gray-100',
        'border-opacity-5'
    );

    const branding = document.createElement('div');
    branding.classList.add('max-w-xs');

    const brandTitle = AppTitle({
        tag: TitleTag.H2,
        textContent: 'SHOP.CO',
        classes: ['text-3xl', 'font-bold', 'mb-4'],
    });

    const brandDescription = AppText({
        textContent:
            'We have clothes that suit your style and which you’re proud to wear. From women to men.',
        classes: ['text-sm', 'text-gray-600', 'pt-8', 'font-rubik'],
    });

    const socialIconsContainer = document.createElement('div');
    socialIconsContainer.classList.add('flex', 'gap-3', 'mt-8');

    const socialLinks = [
        {
            icon: new URL('./twitter.svg', import.meta.url).href,
            linkValue: '#',
        },
        {
            icon: new URL('./facebook.svg', import.meta.url).href,
            linkValue: '#',
        },
        {
            icon: new URL('./instagram.svg', import.meta.url).href,
            linkValue: '#',
        },
        { icon: new URL('./git.svg', import.meta.url).href, linkValue: '#' },
    ];

    socialLinks.forEach(({ icon, linkValue }) => {
        socialIconsContainer.appendChild(AppIconLink({ icon, linkValue }));
    });

    branding.append(brandTitle, brandDescription, socialIconsContainer);

    const companyLinks = AppLinkSection({
        heading: 'Company',
        links: ['About', 'Features', 'Works', 'Career'],
    });

    const helpLinks = AppLinkSection({
        heading: 'Help',
        links: [
            'Customer Support',
            'Delivery Details',
            'Terms & Conditions',
            'Privacy Policy',
        ],
    });

    const faqLinks = AppLinkSection({
        heading: 'FAQ',
        links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    });

    const resourcesLinks = AppLinkSection({
        heading: 'Resources',
        links: [
            'Free eBooks',
            'Development Tutorial',
            'How to - Blog',
            'YouTube Playlist',
        ],
    });

    const paymentMethodsContainer = document.createElement('div');
    paymentMethodsContainer.classList.add('flex', 'gap-4', 'mt-2');

    const paymentLogos = [
        new URL('./visa.svg', import.meta.url).href,
        new URL('./mastercard.svg', import.meta.url).href,
        new URL('./paypal.svg', import.meta.url).href,
        new URL('./applepay.svg', import.meta.url).href,
        new URL('./googlepay.svg', import.meta.url).href,
    ];

    paymentLogos.forEach((logo) => {
        const img = document.createElement('img');
        img.src = logo;
        img.classList.add('w-auto', 'object-contain');
        paymentMethodsContainer.appendChild(img);
    });

    const footerBottom = document.createElement('div');
    footerBottom.classList.add(
        'flex',
        'justify-between',
        'mt-6',
        'w-full',
        'items-center'
    );

    const copyrightText = AppText({
        textContent: 'Shop.co © 2000-2023, All Rights Reserved',
        classes: ['text-sm', 'text-gray-600'],
    });
    footerBottom.append(copyrightText, paymentMethodsContainer);

    footerContainer.append(
        branding,
        companyLinks,
        helpLinks,
        faqLinks,
        resourcesLinks
    );
    footer.append(footerContainer, footerBottom);

    return footer;
}
