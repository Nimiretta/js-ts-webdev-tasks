import Navigo from 'navigo';
import { AppBaseTemplate } from './templates';
import {
    AppCategoryPage,
    AppProductDetailPage,
    AppHomePage,
    AppPaymentPage,
} from './pages';

const router = new Navigo('/');

function renderBaseTemplate() {
    const root = document.getElementById('root');
    const heroBg = document.getElementById('hero-bg');
    if (!root) {
        document.body.append(AppBaseTemplate());
    }
    if (heroBg) {
        heroBg.remove();
    }
}

function renderFullHeroBg() {
    const heroBg = document.createElement('div');
    heroBg.setAttribute('id', 'hero-bg');
    heroBg.classList.add(
        'bg-bg-gray',
        'w-dvw',
        'absolute',
        'left-0',
        'h-[49rem]'
    );
    const logoBg = document.createElement('div');
    logoBg.classList.add(
        'bg-black',
        'w-dvw',
        'h-[7.625rem]',
        'absolute',
        'bottom-0'
    );
    const header = document.getElementById('header');
    heroBg.append(logoBg);
    header?.after(heroBg);
}

function handleAsyncRouteChange(
    /* eslint-disable @typescript-eslint/no-explicit-any */
    handler: (params?: any) => Promise<HTMLElement>,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    params?: any
) {
    renderBaseTemplate();

    const app = document.getElementById('app');
    if (app) {
        handler(params).then((page) => {
            app.innerHTML = '';
            app.append(page);
        });
    }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
function handleSyncRouteChange(
    /* eslint-disable @typescript-eslint/no-explicit-any */
    handler: (params?: any) => HTMLElement,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    params?: any
) {
    renderBaseTemplate();

    const app = document.getElementById('app');
    if (app) {
        const page = handler(params);
        app.innerHTML = '';
        app.append(page);
    }
}

router
    .on({
        '/': () => {
            handleAsyncRouteChange(AppHomePage);
            renderFullHeroBg();
        },
        '/product/:productId': ({
            data: { productId },
        }: {
            data: { productId: string | number };
        }) =>
            handleAsyncRouteChange(AppProductDetailPage, {
                data: { productId },
            }),
        '/cart/:cartId': () => {},
        '/category/:categoryName': ({
            data: { categoryName },
        }: {
            data: { categoryName: string };
        }) =>
            handleAsyncRouteChange(AppCategoryPage, { data: { categoryName } }),
        '/payment/:cartId': ({
            data: { cartId },
        }: {
            data: { cartId: string | number };
        }) => handleAsyncRouteChange(AppPaymentPage, { data: { cartId } }),
    })
    .resolve();

export default router;
