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
            }
        },
        {
            text: 'cansel',
            type: 'primary',
            handler () {
                console.log('Prim btn clicked');
            }
        }
    ]
}

const modal = $.modal(myOptionObj);
