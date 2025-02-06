import { AppTile } from '../../atoms';
import './AppProductImageGallery.css';

export function AppProductImageGallery(images: string[]): HTMLDivElement {
    let mainImage: string = images[0];

    const gallery = document.createElement('div');
    gallery.classList.add('flex', 'gap-4', 'lg:flex-row', 'flex-col-reverse');

    const alternativeImagesContainer = document.createElement('div');
    alternativeImagesContainer.classList.add('flex', 'lg:flex-col', 'gap-4');

    const mainImageContainer = document.createElement('div');

    mainImageContainer.classList.add(
        'main-image',
        'lg:w-[27.75rem]',
        'lg:h-[33.125rem]',
        'h-[27.75rem]',
        'w-[30.5rem]'
    );
    mainImageContainer.style.backgroundImage = `url(${mainImage})`;
    mainImageContainer.style.background = `url(${mainImage}) center / contain no-repeat, #F0EEED`;

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
                'object-contain',
            ],
            onClick: () => {
                mainImage = image;

                mainImageContainer.style.background = `url(${mainImage}) center / contain no-repeat, #F0EEED`;

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
