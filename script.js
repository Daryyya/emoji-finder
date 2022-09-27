import {data} from './emoji.js';

const wrapper = document.querySelector('.container');

function fixData (data) {
   data.forEach(el => {
    el.keywords = [...new Set(el.keywords.split(' '))].join(',');
   })
   return data;
}



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
    keywords.textContent = el.keywords;

    card.append(symbol);
    card.append(title);
    card.append(keywords);

    return card;
}

fixData(data).forEach(el => {
    wrapper.append(createCard(el));
})


