import Navigo from 'navigo';

const router = new Navigo('/');

router
    .on({
        '/': () => {},
        '/product/:productId': () => {},
        '/cart/:cartId': () => {},
    })
    .resolve();

export default router;
