import {data} from './emoji.js';

function createCard (el) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('div');
    img.className = 'card__img';
    img.textContent = el.symbol;

    const title = document.createElement('div');
    title.className = 'card__title';
    title.textContent = el.title;

    const desc = document.createElement('div');
    desc.className = 'card__desc';
    desc.textContent = el.keywords;

    card.append(img);
    card.append(title);
    card.append(desc);

    return card;
}

const wrapper = document.querySelector('.container');

data.forEach(el => {
    wrapper.append(createCard(el));
})

