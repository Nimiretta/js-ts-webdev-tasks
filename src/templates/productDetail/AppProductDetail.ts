import { AppProductImageGallery, AppBreadcrumbs } from '../../molecules';
import { AppProductDesc } from '../../organisms';
import { TProductDetails } from '../../types';

export function AppProductDetail({
    category,
    productTitle,
    images,
    product,
}: TProductDetails): HTMLDivElement {
    const container = document.createElement('div');

    const breadcrumbs = AppBreadcrumbs({ category, product: productTitle });
    breadcrumbs.classList.add('pb-10');

    const mainBlock = document.createElement('div');
    mainBlock.classList.add('flex', 'gap-10');
    const imgGallery = AppProductImageGallery(images);
    imgGallery.classList.add('w-1/2');
    const productDescription = AppProductDesc(product);
    productDescription.classList.add('w-1/2');
    mainBlock.append(imgGallery, productDescription);

    container.append(breadcrumbs, mainBlock);
    return container;
}
