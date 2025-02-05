import { AppOrderConfirmation } from '../../templates';
import router from '../../router';

export function AppConfirmationPage() {
    const page = document.createElement('main');

    try {
        const confirmationComponent = AppOrderConfirmation({});
        page.append(confirmationComponent);

        setTimeout(() => {
            router.navigate('/');
        }, 5000);
    } catch (err) {
        page.innerHTML = `<h1>Error</h1> <pre>${JSON.stringify(err)}</pre>`;
    }

    return page;
}
