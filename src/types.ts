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
export type TInput = {
    type?: string;
    placeholder?: string;
    wrapperClasses?: string[];
    inputClasses?: string[];
    icon?: string;
    label?: string;
    error?: boolean;
};
