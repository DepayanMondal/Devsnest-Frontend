let toAdd = document.getElementById("add")
let toCall = document.getElementById("call")
let toRemove = document.getElementById("remove")

let listener = () => {
    console.log("listener called")
}

listener()

toAdd.addEventListener("click", ()=>{
    toCall.addEventListener("click", listener)

})

toRemove.addEventListener("click", ()=>{
    toCall.removeEventListener("click", listener)
})

setInterval(()=>{
    toCall.click()
},1000)
