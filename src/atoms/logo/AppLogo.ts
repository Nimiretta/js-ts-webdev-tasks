export function AppLogo(): HTMLElement {
    const logoText = document.createElement('p');
    logoText.textContent = 'shop.co';
    logoText.classList.add(
        'lg:text-3xl',
        'text-2xl',
        'text-black',
        'font-poppins',
        'font-bold',
        'uppercase'
    );
    return logoText;
}
