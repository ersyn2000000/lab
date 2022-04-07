


// let content=document.getElementById("first-button-content")
// let show=document.getElementById("first-button")

// // let body=document.body

// document.addEventListener('click',(e)=>{
//     const withinBoundaries=e.composedPath().includes(content);
//     if(!withinBoundaries){
//         content.style.display='none'
//     }
// })

let content=document.getElementById("button-content")
let show=document.getElementById("button")

show.addEventListener("click",showClick);

function showClick(){
    content.classList.toggle('hidden')
}



