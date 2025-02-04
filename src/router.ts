import Navigo from 'navigo';

const router = new Navigo('/');

function handleAsyncRouteChange(handler: (params?: unknown) => Promise<HTMLElement>, params?: unknown) {
    const newApp = document.createElement('div');
    newApp.setAttribute('id', 'app');
    document.body.append(newApp);
    const app = document.getElementById('app');
    if (app) {
        handler(params).then((page) => {
            app.innerHTML = '';
            app.append(page);
        })
    }
}

function handleSyncRouteChange(handler: (params?: unknown) => HTMLElement, params?: unknown) {
    const newApp = document.createElement('div');
    newApp.setAttribute('id', 'app');
    document.body.append(newApp);
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
