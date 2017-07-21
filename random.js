/**
 * Created by beelarr on 7/21/17.
 */

let arrow = document.querySelector('img');


arrow.addEventListener('click', ()=>{
    let random = Math.random()
    if (random <= .5){
        arrow.classList.toggle('right')
    }else{ arrow.classList.toggle('left')}
})