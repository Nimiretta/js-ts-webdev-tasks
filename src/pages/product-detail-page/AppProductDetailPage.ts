import { AppProductDetail } from '../../templates';
import { getProductById } from '../../backend';

export async function AppProductDetailPage({
    data: { productId },
}: {
    data: { productId: string | number };
}): Promise<HTMLElement> {
    const page = document.createElement('main');
    try {
        const product = await getProductById(productId);
        if (product) {
            const container = AppProductDetail({
                category: product.category,
                productTitle: product.title,
                images: product.images,
                product: product,
            });
            page.append(container);
        } else {
            throw new Error(`Product with ID ${productId} not found`);
        }
    } catch (err) {
        page.innerHTML = `<h1>Error</h1> <pre>${err}</pre>`;
    }

    return page;
}
