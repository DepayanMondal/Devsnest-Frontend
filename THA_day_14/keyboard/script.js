let pointer = document.querySelector(".pointer")
let pTop = 0
let pLeft = 0

document.addEventListener("keydown", (event) => {
    console.log(event)
    let del = 1

    if(event.altKey)
        del += 1

    if (event.shiftKey)
        del += 2

    // if (event.metaKey)
    //     del += 3

    if (event.ctrlKey)
        del *= 2

    console.log(del)
    switch (event.key){
        case "ArrowUp":
            pTop -= del
            pointer.style.top = `${pTop}px`
            break
        case "ArrowDown":
            pTop += del
            pointer.style.top = `${pTop}px`
            break
        case "ArrowLeft":
            pLeft -= del
            pointer.style.left = `${pLeft}px`
            break
        case "ArrowRight":
            pLeft += del
            pointer.style.left = `${pLeft}px`
            break
    }
})


