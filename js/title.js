var menu = document.querySelector('#menu')
var upToHeader = document.querySelector('#upToHeader')
var outstanding = document.querySelector('.outstanding')

window.addEventListener('scroll',() => {
    let scroll_Y = this.scrollY
    if(scroll_Y >= 80){
        upToHeader.className = 'on'
        menu.className = 'fixed'
        outstanding.id = 'outFixed'
    }
    else{
        upToHeader.className = 'off'
        menu.className = 'normal'
        outstanding.id = 'normal'
    }
    if(scroll_Y >= 3815){
        outstanding.id = 'outNormal'
    }
})