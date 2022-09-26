import {data} from './emoji.js';

function createCard (el) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('div');
    symbol.className = 'card__img';
    symbol.textContent = el.symbol;

    const title = document.createElement('div');
    title.className = 'card__title';
    title.textContent = el.title;

    const desc = document.createElement('div');
    keywords.className = 'card__desc';
    keywords.textContent = el.keywords;

    card.append(symbol);
    card.append(title);
    card.append(keywords);

    return card;
}

const wrapper = document.querySelector('.container');

data.forEach(el => {
    wrapper.append(createCard(el));
})

