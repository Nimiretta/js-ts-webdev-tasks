export type TButton = {
    type?: 'button' | 'submit' | 'reset';
    label?: string;
    innerHTML?: string;
    textColor?: string;
    backgroundColor?: string;
    onClick?: () => void;
};

export type TTile = {
    height: string;
    width?: string;
    textContent?: string;
    textSize?: string;
    imgUrl?: string;
    imgAlt?: string;
    imgOptions?: string[];
    onClick?: () => void;
};

export type TPrice = {
    fullPrice: number;
    discountRate: number;
    showDiscountedPrice?: boolean;
    isBigText?: boolean;
};

export type TTitle = {
    tag?: TitleTag;
    textContent?: string;
    innerHTML?: string;
    classes?: string[];
};

export enum TitleTag {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export type TInput = {
    type?: string;
    placeholder?: string;
    wrapperClasses?: string[];
    inputClasses?: string[];
    icon?: string;
    label?: string;
    error?: boolean;
    bgColor?: string;
};

export type TText = {
    tag?: TextTag;
    textContent?: string;
    innerHTML?: string;
    classes?: string[];
    textColor?: string;
};

export enum TextTag {
    SPAN = 'span',
    P = 'p',
    STRONG = 'strong',
    EM = 'em',
    LABEL = 'label',
    SMALL = 'small',
    MARK = 'mark',
}

export type TLinkSection = {
    heading: string;
    links: string[];
    width?: string;
    classes?: string[];
};

export type TProductCategory = {
    slug: string;
    name: string;
    url: string;
};

export type TBreadcrumbs = {
    category?: string;
    product?: string;
    page?: 'cart' | 'checkout' | 'payment' | 'confirmation';
};

export type TCard = {
    productId: number | string;
    productTitle: string;
    fullPrice: number;
    discountRate: number;
    ratingValue: number;
    imgUrl: string;
    imgAlt?: string;
};

export type TProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    images: string[];
    thumbnail: string;
};
