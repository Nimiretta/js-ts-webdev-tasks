import Navigo from 'navigo';
import { AppBaseTemplate } from './templates';
import { AppCategoryPage } from './pages';
import { AppHomePage } from './pages';
import { TAsyncRouterParams } from './types';

const router = new Navigo('/');

function renderBaseTemplate() {
    const root = document.getElementById('root');
    if (!root) {
        document.body.append(AppBaseTemplate());
    }
}

 
function handleAsyncRouteChange(
    handler: (params?: TAsyncRouterParams) => Promise<HTMLElement>,
    params?: TAsyncRouterParams
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
    handler: (params?: unknown) => HTMLElement,
    params?: unknown
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
        '/': () => handleAsyncRouteChange(AppHomePage),
        '/product/:productId': () => {},
        '/cart/:cartId': () => {},
        '/category/:categoryName': (params: {
            data: { categoryName: string };
        }) => handleAsyncRouteChange(AppCategoryPage, params),
    })
    .resolve();

export default router;
