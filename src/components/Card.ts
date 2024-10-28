import { CardProps, ImgProps, Tag } from '../types';
import Image from './Image';
import TagList from './Tags';

export default class Card {
    #node;

    constructor(props: CardProps) {
        this.#node = document.createElement('div');
        this.#node.setAttribute('class', 'card');
        this.#renderContent(props);
    }

    #renderContent(props: CardProps): void {
        this.#renderImg(props.image);
        this.#renderTextContent(props);
    }

    #renderImg(imgProps: ImgProps): void {
        const img = new Image(imgProps);
        this.#node.append(img.node);
    }

    #renderTextContent(props: CardProps): void {
        const content = document.createElement('div');
        content.setAttribute('class', 'card-content');
        const h = this.#getHeading(props.heading);
        const p = this.#getDescription(props.description);
        const tags = this.#getTags(props.tags);
        content.append(h, p, tags);
        this.#node.append(content);
    }

    #getHeading(str: string): HTMLElement {
        const h5 = document.createElement('h5');
        h5.textContent = str;
        return h5;
    }

    #getDescription(str: string): HTMLElement {
        const p = document.createElement('p');
        p.textContent = str;
        return p;
    }

    #getTags(tagsArr: Tag[]): HTMLElement {
        const tags = new TagList(tagsArr);
        return tags.node;
    }

    get node(): HTMLElement {
        return this.#node;
    }
}