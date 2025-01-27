import { AppButton, AppLabelLink, AppText } from '../../atoms';
import { TextTag } from '../../types';

export function AppSignupBanner(): HTMLDivElement {
    const banner = document.createElement('div');
    banner.classList.add(
        'w-full',
        'bg-black',
        'text-white',
        'flex',
        'items-center',
        'justify-between',
        'py-2',
        'px-banner',
        'top-0',
        'z-50',
        'min-w-160'
    );

    const bannerText = AppText({
        tag: TextTag.SPAN,
        textContent: 'Sign up and get 20% off to your first order. ',
        textColor: 'text-white',
        classes: ['text-sm', 'font-rubik'],
    });

    const signupLink = AppLabelLink('Sign Up Now');
    signupLink.classList.add(
        'underline',
        'cursor-pointer',
        'text-white',
        'text-sm'
    );
    signupLink.setAttribute('href', '/');

    const closeButton = AppButton({
        isDefaultStyle: true,
        innerHTML: `<img src="${new URL('./Frame.svg', import.meta.url).href}" alt="Close">`,
        onClick: () => {
            banner.style.display = 'none';
        },
    });

    const textContainer = document.createElement('div');
    textContainer.classList.add(
        'flex',
        'gap-2',
        'items-center',
        'w-full',
        'justify-center'
    );
    textContainer.append(bannerText, signupLink);

    banner.append(textContainer, closeButton);

    return banner;
}
