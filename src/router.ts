import Navigo from 'navigo';
import { AppBaseTemplate } from './templates';
import {
    AppCategoryPage,
    AppProductDetailPage,
    AppHomePage,
    AppCartPage,
    AppPaymentPage,
    AppConfirmationPage,
    AppCheckoutPage,
} from './pages';

const router = new Navigo('/');

function renderBaseTemplate() {
    const root = document.getElementById('root');
    if (!root) {
        document.body.append(AppBaseTemplate());
    }
}

function cleanHeroBg() {
    const currentRoute = router.getCurrentLocation();
    if (currentRoute.url) {
        const heroBg = document.getElementById('hero-bg');
        if (heroBg) {
            heroBg.remove();
        }
    }
}

function scrollToTop() {
    window.scroll({ top: 0 });
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
            cleanHeroBg();
            app.innerHTML = '';
            app.append(page);
            scrollToTop();
        });
    }
}

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
        cleanHeroBg();
        app.innerHTML = '';
        app.append(page);
        scrollToTop();
    }
}

router
    .on({
        '/': () => {
            handleAsyncRouteChange(AppHomePage);
        },
        '/product/:productId': ({
            data: { productId },
        }: {
            data: { productId: string | number };
        }) =>
            handleAsyncRouteChange(AppProductDetailPage, {
                data: { productId },
            }),
        '/cart/:cartId': ({
            data: { cartId },
        }: {
            data: { cartId: string | number };
        }) => handleAsyncRouteChange(AppCartPage, { data: { cartId } }),
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
        '/confirmation': () => handleSyncRouteChange(AppConfirmationPage),
        '/checkout/:cartId': ({
            data: { cartId },
        }: {
            data: { cartId: string | number };
        }) => handleAsyncRouteChange(AppCheckoutPage, { data: { cartId } }),
    })
    .resolve();

export default router;
