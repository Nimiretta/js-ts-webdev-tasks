import router from './router';

document.addEventListener('DOMContentLoaded', () => {
    router.resolve();
});

function AppLogo(/*{}: TLogo*/): HTMLElement {
    const logoText = document.createElement('p');
    const label = 'shop.co';
    logoText.textContent = `${label}`;
    logoText.classList.add(
        'text-5xl',
        'text-black',
        'font-poppins',
        'font-bold',
        'uppercase'
    );
    return logoText;
}

const logo = AppLogo();
document.body.appendChild(logo);
console.log('hvkkk');
