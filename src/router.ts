import Navigo from 'navigo';
import { AppBaseTemplate } from './templates';

const router = new Navigo('/');

function renderBaseTemplate() {
    const root = document.getElementById('root');
    if (!root) {
        document.body.append(AppBaseTemplate());
    }
}

function handleAsyncRouteChange(handler: (params?: unknown) => Promise<HTMLElement>, params?: unknown) {
    renderBaseTemplate();

    const app = document.getElementById('app');
    if (app) {
        handler(params).then((page) => {
            app.innerHTML = '';
            app.append(page);
        })
    }
}

function handleSyncRouteChange(handler: (params?: unknown) => HTMLElement, params?: unknown) {
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
        '/cart/:cartId': () => {},
    })
    .resolve();

export default router;
