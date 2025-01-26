import router from './router';

document.addEventListener('DOMContentLoaded', () => {
    router.resolve();
});

import { AppLogoString } from './molecules/logoString/AppLogoString';

const str = AppLogoString();
document.body.append(str);
console.log('ghfc');
