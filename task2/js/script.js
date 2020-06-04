'use strict';
/*
  Напишите скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов
в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку
Очистить, коллекция элементов очищается.
Создайте функцию createBoxes(amount), которая объявляет 1 параметр amount - число. Функция
создает столько div, сколько указано в amount и добавляет их в div#boxes.
Размеры самого первого div 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Каждый созданный div должен иметь случайный rgb цвет фона
Создайте функцию destroyBoxes(), которая очищает div#boxes.
*/


// Get DOM Elements
const render = document.querySelector('[data-action="create"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');
const controls = document.querySelector('#controls input');
//

// Get Number of boxes
const getNum = () => {
    let num = controls.value;
    createBoxes(num);
};
render.addEventListener('click', getNum);
//

// Create boxes
const createBoxes = (num) => {
    const basicSize = 30;
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < num; i++) {
        let size = basicSize + i * 10;
        let div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }

    boxes.appendChild(fragment);
};

// Clear Boxes
const destroyBoxes = () => {
    boxes.innerHTML = '';
};

destroy.addEventListener('click', destroyBoxes);
//

// Random color for boxes
const random = () => {
    return Math.floor(Math.random() * 256);
};
