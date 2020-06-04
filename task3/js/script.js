'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let parent = document.getElementById('container');
    let sourse = document.getElementById('template').textContent;
    let API_KEY = '16848396-59b7ce6b859e0e0d87b4357a6';
    let length;
    let intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0) return;
        let new_quantity = length + 20;
        getPictures(new_quantity);
    });

    function getPictures(new_quantity) {
        let searchValue = document.querySelector('input').value;
        let quantity = isNaN(new_quantity) ? 20 : new_quantity;
        let URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchValue)}&per_page=${quantity}`;

        fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('ERROR Can not find any pictures');
            })
            .then((data) => {
                length = data.hits.length;
                let templateAPI = _.template(sourse);
                parent.innerHTML = templateAPI(data);
            })
            .catch(function (error) {
                console.log('Fetch error', error);
            });
        intersectionObserver.observe(document.querySelector('.scrollerFooter'));
    }

    document
        .querySelector('input')
        .addEventListener('input', getPictures);
});
