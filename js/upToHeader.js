var upToHeader = document.querySelector('#upToHeader')

upToHeader.addEventListener('click',scrollToTop)

function scrollToTop() {
    let timeout
    if(document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
        window.scrollBy(0,-50)
        timeout = setTimeout ('scrollToTop()',10)
    }
    else{ 
        clearTimeout(timeout)
    console.log('nhan roi')
    }
}