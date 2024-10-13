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

    constructor(content, className, style = {}) {
        this.#node = document.createElement('button');
        this.#node.setAttribute('class', 'button');
        this.#node.classList.add(className);
        this.#node.textContent = content;
        if (className = 'btn--card') {
            this.#customizeBtn(style);
        }
    }

    #customizeBtn(props) {
        let {_isDefault, _backgroundColor, _textColor} = props;
        if (_isDefault) {
            this.#node.classList.add('btn-default--card');
        } else {
            this.#node.style.backgroundColor = _backgroundColor;
            this.#node.style.color = _textColor;
        }
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
        this.#renderBtn(props);
        this.#renderBackground(props);
    }

    #renderHeading(props) {
        const h5 = new Heading('h5', props.heading.content);
        h5.node.style.color = props.heading._color;
        this.#node.append(h5.node);
    }

    #renderParagraph(props) {
        const p = document.createElement('p');
        p.textContent = props.text.content;
        p.style.color = props.text._color;
        this.#node.append(p);
    }

    #renderBtn(props) {
        const btn = new Button('Explore', 'btn--card', props._button);
        this.#node.append(btn.node);
    }

    #renderBackground(props) {
        if (props._background._color) {
            this.#node.style.backgroundColor = props._background._color;
            if (props._background._color === '#FFFFFF') {
                this.#node.style.border = '2px solid #EBEAED';
            }
        }
        if (props._background._img) {
            this.#node.style.backgroundImage = props._background._img;
        }
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
            heading: {
                content: 'Startup Framework',
                _color: '#1E0E62',
            },
            text: {
                content: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
                _color: '#1E0E62',
            },
            _button: {
                _isDefault: true,
            },
            _background: {
                _color: '#EBEAED',
            }
        },
        {
            heading: {
                content: 'Web Generator',
                _color: '#1E0E62',
            },
            text: {
                content: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
                _color: 'rgba(21, 20, 57, 0.4)',
            },
            _button: {
                _isDefault: false,
                _backgroundColor: '#25DAC5',
                _textColor: '#FFFFFF',
            },
            _background: {
                _color: '#FFFFFF',
            }
        },
        {
            heading: {
                content: 'Slides 4',
                _color: '#FFFFFF'
            },
            text: {
                content: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
                _color: '#FFFFFF',
            },
            _button: {
                _isDefault: true,
            },
            _background: {
                _color: '#482BE7',
            }
        },
        {
            heading: {
                content: 'Postcards',
                _color: '#FFFFFF',
            },
            text: {
                content: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
                _color: '#FFFFFF',
            },
            _button: {
                _isDefault: true,
            },
            _background: {
                _img: 'url("./assets/postcards_background.png")',
            }
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