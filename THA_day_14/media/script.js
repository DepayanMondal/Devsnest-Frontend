let events = [
    "seeking",
    "playing",
    "play",
    "pause",
    "ended"
]

let video = document.querySelector("video")

for(let event of events){
    video.addEventListener(event, ()=> {
        console.log(event)
    })
}

// document.body.addEventListener("keydown", (event) => {
//     console.log(event)
//     if (event.key === "ArrowRight"){
//         let time = video.currentTime
//         if(event.ctrlKey)
//             video.currentTime = time+ 1
//         else
//             video.currentTime = time+ 0.1
//     }
// })

document.body.addEventListener("click", (event)=>{
    console.log("clicked body")
    console.log(event)
    event.stopPropagation()
    // event.cancelBubble()
})

document.documentElement.addEventListener("click", ()=>{
    console.log("clicked doc")
})


