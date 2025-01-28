import Navigo from 'navigo';

const router = new Navigo('/');

router
    .on({
        '/': () => {},
        '/product/:productId': () => {},
        '/cart/${userID}': () => {},
    })
    .resolve();

export default router;
