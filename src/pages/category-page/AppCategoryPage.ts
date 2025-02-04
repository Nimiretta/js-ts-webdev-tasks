import { getProductsByCategory } from '../../backend';
import { AppCategory } from '../../templates';

export async function AppCategoryPage({
    data: { categoryName },
}: {
    data: { categoryName: string };
}): Promise<HTMLElement> {
    const page = document.createElement('main');
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
