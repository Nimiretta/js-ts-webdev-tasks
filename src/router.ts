import Navigo from 'navigo';
import { AppBaseTemplate } from './templates';
import {
    AppCategoryPage,
    AppProductDetailPage,
    AppConfirmationPage,
} from './pages';

const router = new Navigo('/');

function renderBaseTemplate() {
    const root = document.getElementById('root');
    if (!root) {
        document.body.append(AppBaseTemplate());
    }
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
        '/': () => {},
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
        '/confirmation': () => handleSyncRouteChange(AppConfirmationPage),
    })
    .resolve();

export default router;
