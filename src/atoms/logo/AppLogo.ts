import { TLogo } from './types';

export function AppLogo({
    label = 'shop.co',
    fontSize = '32px',
    color = 'rgba(0, 0, 0, 1)',
    fontWeight = '700',
    fontFamily = 'Poppins',
}: TLogo): HTMLElement {
    const logoText = document.createElement('p');
    logoText.textContent = `${label}`;
    logoText.style.fontSize = fontSize;
    logoText.style.fontWeight = fontWeight;
    logoText.style.fontFamily = fontFamily;
    logoText.style.color = color;
    logoText.style.textTransform = 'uppercase';
    logoText.style.textTransform = 'uppercase';
    return logoText;
}
