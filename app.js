window.addEventListener('scroll', (e) => {

    const target = document.querySelectorAll('.scroll');


    var scrolled = window.pageYOffset;
    

    var index = 0;
    var length = target.length;

    for(index; index < length ; index++) {
        
        var position = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {

            target[index].style.transform = 'translate3d(0px, '+position+'px, 0px)'
        }
        else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)'
        }

        
    }


}) 