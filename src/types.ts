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
