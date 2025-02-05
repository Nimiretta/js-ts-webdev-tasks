import { getRandomCartId } from '../../helpers/randomIds';
import { AppHeader, NewsletterSubscription, AppFooter } from '../../organisms';

export function AppBaseTemplate(): HTMLDivElement {
    const container = document.createElement('div');
    container.setAttribute('id', 'root');

    const header = AppHeader(getRandomCartId());

    const mainBlock = document.createElement('div');
    mainBlock.setAttribute('id', 'app');
    mainBlock.classList.add('max-w-[90rem]', 'mx-auto');

    const footerWrapper = document.createElement('div');
    footerWrapper.classList.add('bg-bg-gray', 'mt-36', 'w-dvw');
    const subscribeBanner = NewsletterSubscription();
    subscribeBanner.classList.add('-translate-y-1/2');
    const footer = AppFooter();
    footerWrapper.append(subscribeBanner, footer);

    container.append(header, mainBlock, footerWrapper);
    return container;
}
