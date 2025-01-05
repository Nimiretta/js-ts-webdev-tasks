//import { TLogo } from '../../types';

export function AppLogo(/*{}: TLogo*/): HTMLElement {
    const logoText = document.createElement('p');
    const label = 'shop.co';
    logoText.textContent = `${label}`;
    logoText.style.textTransform = 'uppercase';
    logoText.classList.add(
        'text-5xl',
        'text-black',
        'font-poppins',
        'font-bold'
    );
    return logoText;
}
