const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    pixel.addEventListener('click', () =>{
        if(pixel.classList.contains('clicked')){
            pixel.classList.remove('clicked');
        }
        else{
            pixel.classList.add('clicked');
        }
    })
})