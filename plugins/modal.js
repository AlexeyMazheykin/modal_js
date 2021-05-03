
Element.prototype.appendAfter = function (element) {
element.parentNode.insertBefore(this, element.nextSibling)
}


function _createFooter (buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div');
    }
    const wrap = document.createElement('wrap');
    wrap.classList.add('modal-footer');
    return wrap;
}



function _createModal(option) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div');
    modal.classList.add('amodal');
    modal.insertAdjacentHTML('beforeend', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${option.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">
                    ${option.title || 'Default title'}
                </span>
                ${option.closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
            </div>
            <div class="modal-body" data-content>
            ${option.content || 'no content'}
            </div>
        </div>
    </div>
`);
    const footer = _createFooter(option.footerItems);
    modal.querySelector('.modal-window').appendChild(footer)

 //  footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal);
    return modal;
}

$.modal = function (options) {
    const ANIMATION_SPEED = 200;
    let closing = false;
    let destroyed = false;
    const $modal = _createModal(options);
    const modal =  {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            closing || $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
/*            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, ANIMATION_SPEED)*/
        }
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close();
        }
    }

    $modal.addEventListener('click', listener)


    return Object.assign(modal, {
        destroy () {
            destroyed = true;
            $modal.remove();
            $modal.removeEventListener('click', listener)
        },
        setContent (html) {
            document.querySelector('[data-content]').innerHTML = html;
        }
    })
}