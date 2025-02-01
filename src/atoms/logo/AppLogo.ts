export function AppLogo(): HTMLElement {
    const logoText = document.createElement('p');
    logoText.textContent = 'shop.co';
    logoText.classList.add(
        'text-3xl',
        'text-black',
        'font-poppins',
        'font-bold',
        'uppercase'
    );
    return logoText;
}
