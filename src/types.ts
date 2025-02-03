export type TButton = {
    type?: 'button' | 'submit' | 'reset';
    label?: string;
    innerHTML?: string;
    textColor?: string;
    backgroundColor?: string;
    onClick?: () => void;
    classes?: string[];
    isDefaultStyle?: boolean;
};

export type TTile = {
    height: string;
    width?: string;
    textContent?: string;
    textSize?: string;
    imgUrl?: string;
    imgAlt?: string;
    imgOptions?: string[];
    classes?: string[];
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

export type TTitleText = {
    titleText?: string;
    tagText?: TitleTag;
    titleInnerHTML?: string;
    paragraph: string;
    paragraphClasses?: string[];
    titleClasses?: string[];
    widthClass: string;
    heightClass: string;
};

export type TIconLink = {
    iconName: string;
    linkValue?: string;
    width?: string;
    height?: string;
};

export type TNewCartParams = {
    userId: number;
    products: {
        id: number;
        quantity: number;
    }[];
};

export type TUpdateCartParams = {
    merge?: boolean;
    products: {
        id: number;
        quantity: number;
    }[];
};

type TCartProductBase = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    thumbnail: string;
};

type TCartProductDiscPrice = TCartProductBase & {
    discountedPrice: number;
};

type TCartProductDiscTotal = TCartProductBase & {
    discountedTotal: number;
};

type TCartBase = {
    id: number;
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
};

export type TCartDiscPrice = TCartBase & {
    products: TCartProductDiscPrice[];
};

export type TCartDiscTotal = TCartBase & {
    products: TCartProductDiscTotal[];
};

export type TCartDeleted = TCartDiscTotal & {
    isDeleted: boolean;
    deletedOn: string;
};

export type TInputSection = {
    inputs: TInput[];
};

export type sortOptions = {
    sortBy: 'title' | 'price' | 'discountPercentage' | 'rating';
    order: 'asc' | 'desc';
};

export type TGrid = {
    width: string;
    height?: string;
    rows?: number;
    columns: number;
    tiles?: TTile[];
    cards?: TCard[];
    gap?: string;
};

export type TCartItem = {
    productId: string | number;
    productTitle: string;
    fullPrice: number;
    discountRate: number;
    imgUrl: string;
    imgAlt?: string;
};

export type TOrderSummary = {
    total: number;
    discountedTotal: number;
    btnText: string;
    btnPath: string;
    btnForm?: {
        btnType: 'submit';
        formId: string;
    };
};

export type TInputSet = {
    formId: string;
    inputs?: TInput[];
    sections?: TInputSection[];
};

export type TCreateInputSet = {
    createLeftComp: (params: TInputSet) => HTMLFormElement;
    params: TInputSet;
};

export type TCreateCartList = {
    createLeftComp: (params: TCartItem[]) => HTMLDivElement;
    params: TCartItem[];
};

export type TOrderFlow = {
    page: 'cart' | 'checkout' | 'payment';
    titleText: string;
    dynamicPart: TCreateCartList | TCreateInputSet;
    summaryParams: TOrderSummary;
};

export type TSlider = {
    sliderNode: HTMLElement;
    getLowValue: () => number;
    getHighValue: () => number;
    reset: () => void;
};

export type TFilterCbParams = {
    brands: (string | null)[];
    sort: 'asc' | 'desc' | null;
    price: {
        min: number;
        max: number;
    };
};

export type TProductDetails = {
    category: string;
    productTitle: string;
    images: string[];
    product: TProduct;
};

export interface TOrderConfirmation {
    page?: 'confirmation' | 'cart' | 'checkout' | 'payment';
    title?: string;
    description?: string;
}

export type TCategory = {
    category: string;
    brands: string[];
    cards: TCard[];
};
