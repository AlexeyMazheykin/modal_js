function _createCards(dataArr) {
    const wrap = document.createElement('div');
    wrap.classList.add('fruits__cards');
    dataArr.forEach(item => {
        wrap.insertAdjacentHTML('beforeend', `
        <div class="card">
            <img class="card-img-top" src="${item.img}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <a href="#" class="btn btn-primary" data-open="true" data-price="${item.price}" data-title="${item.title}">Перейти</a>
            </div>
        </div>
        `)
    });
    return wrap;
}
$.cards = function (dataArr) {
    const cards = _createCards(dataArr);
    document.querySelector('.container').appendChild(cards);

}