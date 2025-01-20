import Navigo from 'navigo';

const router = new Navigo('/');

router
    .on({
        '/': () => {},
        '/product/:productId': () => {},
    })
    .resolve();

export default router;
