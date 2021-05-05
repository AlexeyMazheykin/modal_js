<div className="modal-overlay" data-close="true">
    <div className="modal-window" style="width: ${option.width || DEFAULT_WIDTH}">
        <div className="modal-header">
                <span className="modal-title">
                    ${option.title || 'Default title'}
                </span>
            ${option.closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
        </div>
        <div className="modal-body" data-content>
            ${option.content || 'no content'}
        </div>
    </div>
</div>

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
