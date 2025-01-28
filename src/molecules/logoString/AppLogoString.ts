import { AppLogo } from '../../atoms';
import { AppIconLink } from '../../atoms';
import router from '../../router';

export function AppLogoString(userID: string): HTMLElement {
    const logoStr = document.createElement('div');
    const logo = AppLogo();
    logoStr.append(logo);
    const iconsBlock = document.createElement('div');
    iconsBlock.classList.add('flex', 'gap-[14px]');

    const cartIcon = AppIconLink({
        pathToIcon: 'src/assets/icons/cart.svg',
        width: 'w-[24px]',
        height: 'w-[24px]',
    });

    cartIcon.addEventListener('click', () => {
        router.navigate(`/cart/${userID}`);
    });

    const profIcon = AppIconLink({
        pathToIcon: 'src/assets/icons/profile.svg',
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
        'pr-[100px]',
        'pl-[100px]',
        'w-full',
        'my-9'
    );

    return logoStr;
}
