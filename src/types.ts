export type TButton = {
    type?: 'button' | 'submit' | 'reset';
    label?: string;
    innerHTML?: string;
    textColor?: string;
    backgroundColor?: string;
    onClick: () => void;
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
