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
        icon: 'src/assets/icons/cart.svg',
        width: 'w-[24px]',
        height: 'w-[24px]',
    });

    cartIcon.addEventListener('click', () => {
        router.navigate(`/cart/${userID}`);
    });

    const profIcon = AppIconLink({
        icon: 'src/assets/icons/profile.svg',
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
        'w-[86%]',
        'my-9'
    );

    return logoStr;
}
