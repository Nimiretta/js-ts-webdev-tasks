import { AppLogo } from '../../atoms';
import { AppIconLink } from '../../atoms';
import router from '../../router';

export function AppLogoString(cartId: string | number): HTMLElement {
    const logoStr = document.createElement('div');
    const logo = AppLogo();
    logo.addEventListener('click', () => {
        router.navigate('/');
    });
    logo.classList.add('cursor-pointer');

    const burgerIcon = AppIconLink({
        iconName: 'burger',
        width: 'w-[24px]',
        height: 'w-[24px]',
    });
    burgerIcon.classList.add('lg:hidden');
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('flex', 'items-center', 'gap-4');
    logoDiv.append(burgerIcon, logo);

    logoStr.append(logoDiv);

    const iconsBlock = document.createElement('div');
    iconsBlock.classList.add('flex', 'gap-[14px]');

    const cartIcon = AppIconLink({
        iconName: 'cart',
        width: 'w-[24px]',
        height: 'w-[24px]',
    });
    cartIcon.classList.add('cursor-pointer');
    cartIcon.addEventListener('click', () => {
        router.navigate(`/cart/${cartId}`);
    });

    const profIcon = AppIconLink({
        iconName: 'profile',
        width: 'w-[24px]',
        height: 'w-[24px]',
    });

    iconsBlock.append(profIcon);
    iconsBlock.append(cartIcon);
    logoStr.append(iconsBlock);

    logoStr.classList.add(
        'flex',
        'flex-row',
        'justify-between',
        'items-center',
        'lg:py-9',
        'py-4',
        'max-w-[77.5rem]',
        'mx-auto',
        'lg:px-0',
        'px-4'
    );

    return logoStr;
}
