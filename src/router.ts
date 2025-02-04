import Navigo from 'navigo';
import { AppBaseTemplate } from './templates';
import { TAsyncRouterParams } from './types';
import { AppCartPage } from './pages';

const router = new Navigo('/');

function renderBaseTemplate() {
    const root = document.getElementById('root');
    if (!root) {
        document.body.append(AppBaseTemplate());
    }
}

function handleAsyncRouteChange(
    handler: (params: TAsyncRouterParams) => Promise<HTMLElement>,
    params: TAsyncRouterParams
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
        '/': () => {},
        '/product/:productId': () => {},
        '/cart/:cartId': ({
            data: { cartId },
        }: {
            data: { cartId: string | number };
        }) => handleAsyncRouteChange(AppCartPage, { data: { cartId } }),
    })
    .resolve();

export default router;
