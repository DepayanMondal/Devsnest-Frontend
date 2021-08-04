let container = document.querySelector(".container")
let pointer = document.querySelector(".pointer")

container.addEventListener("mouseover", (event) =>{
    // console.log("mouseover", event)
    pointer.style.display = "block"
})

container.addEventListener("mousemove", (event) =>{
    console.log("mousemove", event)
    let x = event.offsetX
    let y = event.offsetY

    // let x = event.clientX
    // let y = event.clientY

    // let x = event.pageX
    // let y = event.pageY

    console.log(x,y)
    x -= pointer.offsetWidth/2
    y -= pointer.offsetHeight/2

    pointer.style.left = `${x}px`
    pointer.style.top = `${y}px`
})

container.addEventListener("mouseout", (event) =>{
    // console.log("mouseout", event)
    pointer.style.display = "none"
})
