export type TButton = {
    label?: string;
    innerHTML?: string;
    textColor?: string;
    backgroundColor?: string;
    //padding: string;
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
