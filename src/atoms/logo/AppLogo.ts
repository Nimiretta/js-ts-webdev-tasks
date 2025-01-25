export function AppLogo(): HTMLElement {
    const logoText = document.createElement('p');
    logoText.textContent = 'shop.co';
    logoText.classList.add(
        'text-xl',
        'text-black',
        'font-poppins',
        'font-black',
        'uppercase'
    );
    return logoText;
}
