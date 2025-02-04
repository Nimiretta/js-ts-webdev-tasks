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
    logoStr.append(logo);
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
        'py-9',
        'px-[6.25rem]',
        'max-w-[90rem]',
        'mx-auto'
    );

    return logoStr;
}
