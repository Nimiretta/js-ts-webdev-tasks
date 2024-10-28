import { ImgProps } from "../types";

export default class Image {
    #node;

    constructor(props: ImgProps) {
        this.#node = document.createElement('img');
        this.#node.src = new URL(`../assets/images/${props.name}`, import.meta.url).href;
        this.#node.alt = props.alt;
    }

    get node(): HTMLElement {
        return this.#node;
    }
}