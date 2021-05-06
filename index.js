const fruits = [
    {
        id: 1,
        title: 'Яблоки',
        price: 20,
        img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348',
        text: 'Яблоки вкусные и полезные'
    },
    {
        id: 2,
        title: 'Апельсины',
        price: 25,
        img: 'https://e0.edimdoma.ru/data/ingredients/0000/8813/8813-ed4_wide.jpg?1482763602',
        text: 'Апельсины сочные и содержат много витамина С'
    },
    {
        id: 3,
        title: 'Манго',
        price: 125,
        img: 'https://e0.edimdoma.ru/data/posts/0001/8507/18507-ed4_wide.jpg?1495009317',
        text: 'Манго это сладкий и сочный тропический фрукт'
    },
]
const toHTML = fruit => `
    <div class="col">
        <div class="card">
            <img class="card-img-top" src="${fruit.img}">
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <p class="card-text">${fruit.text}</p>
                <a href="#" class="btn btn-primary" data-btn="price" data-title="${fruit.title}" data-id="${fruit.id}">Посмотреть цену</a>
                <a href="#" class="btn btn-danger" data-open="true" data-title="${fruit.title}">Удалить</a>
            </div>
        </div>
    </div>
`


function render() {
    const html = fruits.map(toHTML).join('');
    document.querySelector('#content').innerHTML = html;
}
render();

const priceObj = {
    title: 'Цена на товар',
    closable: true,
    width: '500px',
    footerItems: [
        {
            text: 'Закрыть',
            type: 'primary',
            handler() {
                console.log('Prim btn clicked');
                priceModal.close();
            }
        },
    ]
}

const priceModal = $.modal(priceObj);
document.addEventListener('click', (e) => {
    e.preventDefault();
    const btnType = e.target.dataset.btn;
    const id = +e.target.dataset.id;
    if (btnType === 'price') {
        const fruit = fruits.find(f=>f.id === id);
        priceModal.setContent(`
        <p>Цена на ${fruit.title}: <strong>${fruit.price}</strong></p>
        `)
        priceModal.open()

    }
})
