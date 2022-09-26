import {data} from './emoji.js';

function createCard (el) {
    const card = document.createElement('div');
    card.className = 'card';

    const symbol = document.createElement('div');
    symbol.className = 'card__img';
    symbol.textContent = el.symbol;

    const title = document.createElement('div');
    title.className = 'card__title';
    title.textContent = el.title;

    const keywords = document.createElement('div');
    keywords.className = 'card__desc';
    keywords.textContent = fixKeyWords(el.keywords);

    card.append(symbol);
    card.append(title);
    card.append(keywords);

    return card;
}

function fixKeyWords (el) {
    return [...new Set(el.split(' '))].join(',')
} 

const wrapper = document.querySelector('.container');

data.forEach(el => {
    wrapper.append(createCard(el));
})



let str = 'hello hello hello hi buy';

console.log();

