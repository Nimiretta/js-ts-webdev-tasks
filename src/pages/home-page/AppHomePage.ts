import { getProductsCategories } from '../../backend';
import { AppHomePageTemplate } from '../../templates';

export async function AppHomePage() {
    const page = document.createElement('main');

    try {
        const categories = await getProductsCategories();
        const appHome = AppHomePageTemplate(categories);
        page.append(appHome);
    } catch (err) {
        page.innerHTML = `<h1>Error</h1> <pre>${JSON.stringify(err)}</pre>`;
    }

    return page;
}
