class Heading {
    #node;

    constructor(tag, content) {
        this.#node = document.createElement(tag);
        this.#node.textContent = content;
    }

    get node() {
        return this.#node;
    }
}

class Button {
    #node;

    constructor(content, className) {
        this.#node = document.createElement('button');
        this.#node.setAttribute('class', 'button');
        this.#node.classList.add(className);
        this.#node.textContent = content;
    }

    get node() {
        return this.#node;
    }
}

class Grid {
    #node;

    constructor() {
        this.#node = document.createElement('div');
        this.#node.setAttribute("class", "grid");
    }

    get node() {
        return this.#node;
    }
}

class Card {
    #node;

    constructor(props) {
        this.#node = document.createElement('div');

        this.#renderContent(props);
    }

    #renderContent(props) {
        this.#node.classList.add('card');
        this.#renderHeading(props);
        this.#renderParagraph(props);
        this.#renderBtn();
    }

    #renderHeading(props) {
        const h5 = new Heading('h5', props.heading);
        this.#node.append(h5.node);
    }

    #renderParagraph(props) {
        const p = document.createElement('p');
        p.textContent = props.text;
        this.#node.append(p);
    }

    #renderBtn() {
        const btn = new Button('Explore', 'btn--card');
        this.#node.append(btn.node);
    }

    get node() {
        return this.#node;
    }
}

function Page(props) {
    const section = document.createElement('section');
    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    const h1 = new Heading('h1', 'Last works');
    const button = new Button('Explore Showcase', 'btn--header');
    const grid = new Grid();
    const cards = props.map((item) => new Card(item));
    cards.forEach((card) => grid.node.append(card.node));
    header.append(h1.node, button.node);
    section.append(header, grid.node);
    return section;
}

function renderPage(data) {
    const page = Page(data);
    document.body.append(page);
}

function loadData() {
    return [
        {
            heading: 'Startup Framework',
            text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.'
        },
        {
            heading: 'Web Generator',
            text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.'
        },
        {
            heading: 'Slides 4',
            text: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.'
        },
        {
            heading: 'Postcards',
            text: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.'
        }
    ];
}

function initApp() {
    const data = loadData();
    renderPage(data);
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});