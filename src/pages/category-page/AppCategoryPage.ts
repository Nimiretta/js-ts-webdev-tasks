import { getProductsByCategory } from '../../backend';
import { AppCategory } from '../../templates';
import { TAsyncRouterParams } from '../../types';

export async function AppCategoryPage(
    params?: TAsyncRouterParams
): Promise<HTMLElement> {
    const page = document.createElement('main');

    if (!params?.data?.categoryName) {
        page.innerHTML = `<h1>Error</h1> <pre>Invalid category name</pre>`;
        return page;
    }

    const { categoryName } = params.data;

    try {
        const products = await getProductsByCategory({
            category: categoryName,
        });
        if (products) {
            const brands = products.map((el) => el.brand);
            const cards = products.map((el) => {
                return {
                    productId: el.id,
                    productTitle: el.title,
                    fullPrice: el.price,
                    discountRate: el.discountPercentage,
                    ratingValue: el.rating,
                    imgUrl: el.images[0],
                };
            });
            const container = AppCategory({
                category: categoryName,
                brands,
                cards,
            });
            page.append(container);
        } else {
            throw new Error(`Category ${categoryName} not found`);
        }
    } catch (err) {
        page.innerHTML = `<h1>Error</h1> <pre>${err}</pre>`;
    }

    return page;
}
