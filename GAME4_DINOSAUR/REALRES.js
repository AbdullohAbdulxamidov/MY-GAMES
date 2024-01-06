const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');


document.addEventListener('keydown', function(event) {
    boz();
})


function boz() {
    if (dino.classList != 'boz') {
        dino.classList.add('boz')
    }

    setTimeout(function() {
        dino.classList.remove('boz')
    }, 400)
}


let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    // if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    //     alert('GAME OVER!!!       GAME OVER!!!       GAME OVER!!!       GAME OVER!!!')
    // }
})
