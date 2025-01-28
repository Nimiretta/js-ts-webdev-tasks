import { AppTile } from '../../atoms';
import './AppProductImageGallery.css';

export function AppProductImageGallery(images: string[]): HTMLDivElement {
    if (images.length < 3) {
        throw new Error('Product Image Gallery requires at least 3 images.');
    }

    let mainImage: string = images[0];

    const gallery = document.createElement('div');
    gallery.classList.add('flex', 'gap-4');

    const alternativeImagesContainer = document.createElement('div');
    alternativeImagesContainer.classList.add('flex', 'flex-col', 'gap-4');

    const mainImageContainer = document.createElement('div');

    mainImageContainer.classList.add('main-image');
    mainImageContainer.style.backgroundImage = `url(${mainImage})`;
    mainImageContainer.style.background = `url(${mainImage}) center / cover no-repeat, #F0EEED`;

    images.slice(0, 3).forEach((image) => {
        const imgElement = AppTile({
            imgUrl: image,
            imgAlt: 'product image',
            height: 'h-41',
            width: 'w-38',

            imgOptions: [
                'alternative-image',
                'w-full',
                'h-full',
                'object-cover',
            ],
            onClick: () => {
                mainImage = image;

                mainImageContainer.style.background = `url(${mainImage}) center / cover no-repeat, #F0EEED`;

                Array.from(alternativeImagesContainer.children).forEach(
                    (child) => {
                        child.classList.remove('border');
                    }
                );

                imgElement.classList.add('border');
            },
        });

        alternativeImagesContainer.appendChild(imgElement);

        if (image === mainImage) {
            imgElement.classList.add('border');
        }
    });

    gallery.appendChild(alternativeImagesContainer);
    gallery.appendChild(mainImageContainer);

    return gallery;
}
