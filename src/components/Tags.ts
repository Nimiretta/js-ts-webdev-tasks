import { Tag } from '../types';

export default class TagList {
    #node;

    constructor(props: Tag[]) {
        this.#node = document.createElement('ul');
        this.#node.setAttribute('class', 'tag-list');
        this.#renderContent(props);
    }

    #renderContent(props: Tag[]): void {
        props.forEach((el: Tag, i: number) => {
            const li = document.createElement('li');
            const value = (i !== 0) ? ', ' + el.title : el.title;
            li.textContent = value.toUpperCase();
            this.#node.append(li);
        });
    }

    get node(): HTMLElement {
        return this.#node;
    }
}