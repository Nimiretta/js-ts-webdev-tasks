import { AppLogo } from '../../atoms';
import { AppIconLink } from '../../atoms';

export function AppLogoString(): HTMLElement {
    const logoStr = document.createElement('div');
    const logo = AppLogo();
    logoStr.append(logo);
    const iconsBlock = document.createElement('div');
    iconsBlock.classList.add('flex', 'gap-[14px]');
    const cartIcon = AppIconLink({
        icon: 'src/assets/icons/cart.svg',
        linkValue:
            'https://github.com/Nimiretta/js-ts-webdev-tasks/pull/21/files',
        width: 'w-[24px]',
        height: 'w-[24px]',
    });
    const profIcon = AppIconLink({
        icon: 'src/assets/icons/profile.svg',
        linkValue:
            'https://github.com/Nimiretta/js-ts-webdev-tasks/pull/21/files',
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
