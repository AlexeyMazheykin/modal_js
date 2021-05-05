const fruits = [
    {
        id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348', text: 'Яблоки вкусные и полезные'
    },
    {
        id: 2, title: 'Апельсины', price: 25, img: 'https://e0.edimdoma.ru/data/ingredients/0000/8813/8813-ed4_wide.jpg?1482763602', text: 'Апельсины сочные и содержат много витамина С'
    },
    {
        id: 3, title: 'Манго', price: 125, img: 'https://e0.edimdoma.ru/data/posts/0001/8507/18507-ed4_wide.jpg?1495009317', text: 'Манго это сладкий и сочный тропический фрукт'
    },

]


const myOptionObj = {
    title: 'Dunhills Title',
    content: `
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    `,
    closable: true,
    width: '500px',
    footerItems: [
        {
            text: 'ok',
            type: 'primary',
            handler () {
                console.log('Prim btn clicked');
                modal.close();
            }
        },
        {
            text: 'cancel',
            type: 'danger',
            handler (ev) {
                console.log(`Danger-btn clicked`);
                modal.close();
            }
        }
    ]
}
const cards = $.cards(fruits);
const modal = $.modal(myOptionObj);
