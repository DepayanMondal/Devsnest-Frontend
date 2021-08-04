
let boxes = document.querySelectorAll(".box")
let items = document.querySelectorAll(".item")

let selectedItem = null;

for(let item of items){
    item.addEventListener("dragstart", (event) => {
        // console.log(event)
        // console.log("drag start")
        selectedItem = event.target
        // console.log(event.target)
    })
    // item.addEventListener("drag", (event) => {
    //     // console.log(event)
    //     // console.log("dragging")
    // })
    item.addEventListener("dragend", (event) => {
        // console.log(event)
        // console.log("drag stop")
        // selectedItem = null
    })
}

for(let box of boxes){
    box.addEventListener("dragover", (event) => {
        // console.log(event)
        event.preventDefault()
    })

    box.addEventListener("drop", (event) => {
        console.log(event)
        
        selectedItem.parentNode.removeChild(selectedItem)
        box.append(selectedItem)
    })
}
