import { AppOrderFlow } from '../../templates';
import { AppCartList } from '../../organisms';
import { getCart } from '../../backend';

export async function AppCartPage({
    data: { cartId },
}: {
    data: { cartId: string | number };
}): Promise<HTMLElement> {
    const page = document.createElement('main');
    try {
        const cart = await getCart(cartId);
        if (cart) {
            const products = cart.products.map((product) => {
                return {
                    productId: product.id,
                    productTitle: product.title,
                    fullPrice: product.price,
                    discountRate: product.discountPercentage,
                    imgUrl: product.thumbnail,
                };
            });

            const summaryParams = {
                total: cart.total,
                discountedTotal: cart.discountedTotal,
                btnText: 'Go to Checkout',
                btnPath: `/checkout/${cartId}`,
            };

            const container = AppOrderFlow({
                page: 'cart',
                titleText: 'Your cart',
                dynamicPart: {
                    createLeftComp: AppCartList,
                    params: products,
                },
                summaryParams,
            });
            page.append(container);
        } else {
            throw new Error(`Cart with ID ${cartId} not found`);
        }
    } catch (err) {
        page.innerHTML = `<h1>Error</h1> <pre>${err}</pre>`;
    }

    return page;
}
