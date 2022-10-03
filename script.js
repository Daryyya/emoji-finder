// import {data} from './emoji.js';

const wrapper = document.querySelector('.container');
const input = document.querySelector('input');
const url = 'https://emoji.ymatuhin.workers.dev/';

function fixData (arr) {
   arr.forEach(el => {
    el.keywords = [...new Set(el.keywords.split(' '))].join(',');
   })
   return arr;
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
function showCards (arr) {
    arr.forEach(el => { 
        
        wrapper.append(createCard(el))
    })
}
function getValue (arr, event) {
    wrapper.innerHTML = '';
    let value = event.target.value.trim().split(' ');
    console.log(value);
    if (value) {
        let sortArr = arr.filter(el => el.title.toLowerCase().includes(value) || el.keywords.toLowerCase().includes(value));
        showCards(sortArr)
    }
    else {
        showCards(arr);
    }
}

function main (arr) {
    showCards(arr);
    input.addEventListener('input', (event) => getValue(arr, event))
}

// 1

// let promise = fetch('http://localhost:3000/get/emoji')
//     .then((res) => res.json())
//     .then((data) => main(fixData(data)));

// 2

// async function getData () {
//     let res = await fetch(url);
//     let data =  await res.json();
//     main(fixData(data));
// }

// getData();

// 3

// let response = await fetch(url);
// if (response.ok) {
//     let json = await response.json();
//     main(fixData(json));
//   } else {
//     alert("Ошибка HTTP: " + response.status);
//   }

// 4

  async function getData () {
    let res = await fetch('http://localhost:3000/get/emoji');
    let data =  await res.json();

    console.log(data)
    return JSON.parse(data);
}

let arr = await getData();

main(fixData(arr));




































