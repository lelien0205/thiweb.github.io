var main = document.querySelector('.textSearch')
var search = document.querySelector('#formSearch')

main.addEventListener('click',() => {
    onOff(search)
})

function onOff(item) {
    if(item.className == "on") {
        item.className="off"
    }
    else {
        item.className="on"
    }
}