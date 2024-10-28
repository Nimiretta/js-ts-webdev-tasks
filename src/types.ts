export type ImgProps = {
    name: string,
    alt: string,
};

export type Tag = {
    slug: string;
    title: string;
};

export type CardProps = {
    heading: string;
    description: string;
    image: ImgProps;
    tags: Tag[];
}