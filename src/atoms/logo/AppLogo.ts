export function AppLogo(): HTMLElement {
    const logoText = document.createElement('p');
    const label = 'shop.co';
    logoText.textContent = `${label}`;
    logoText.classList.add(
        'text-xl',
        'text-black',
        'font-poppins',
        'font-black',
        'uppercase'
    );
    return logoText;
}
