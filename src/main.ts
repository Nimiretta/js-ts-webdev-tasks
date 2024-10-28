import dbData from './db/cards.json';
import Card from './components/Card';
import { CardProps } from './types';

function Page(props: CardProps[]): HTMLElement[] {
    const header = document.createElement('div');
    header.setAttribute('class', 'header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Works';

    const headerText = document.createElement('p');
    headerText.textContent = 'The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit.';

    header.append(h1, headerText);

    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');

    const cards = props.map((item) => new Card(item));
    cards.forEach((card) => grid.append(card.node));

    return [header, grid];
}

function renderPage(data: CardProps[]): void {
    const page = Page(data);
    document.body.append(...page);
}

function loadData(): CardProps[] {
    return dbData;
}

function initApp(): void {
    const data = loadData();
    renderPage(data);
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});