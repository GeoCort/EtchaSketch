let container = document.getElementById("sketch-c") // grid container
let range = document.getElementById("gridrange");
range_display = document.getElementById("rangelabel")
let hover = document.querySelectorAll(".grid-style")
let resetBtn = document.getElementById("reset")
let grid_size = 30;
//slider event handler

function makeCell(grid_size){
    let div= document.createElement("div");
    div.style.width =`${grid_size}px`
    div.style.height =`${grid_size}px`
    div.classList.add("grid-style",)
    return div;
}
function startBoard(size){
    container.style.gridTemplateColumns = `repeat(${grid_size},1fr)`
    for(let k =0; k<grid_size; k++){
        for(let i = 0; i <grid_size; i++){
            container.appendChild(makeCell(size));
        }
    }
}
function clearContainer(){
    container.innerHTML=""
}
function resetGame(s){
    clearContainer();
    startBoard(s);
}

startBoard(container.clientWidth/grid_size);

range.addEventListener("input",()=>{
    console.log(range.value)
    rangelabel.textContent= `${range.value} x ${range.value}`;
    console.log(grid_size)
    console.log(typeof(grid_size))
     grid_size =  parseInt(range.value)
     console.log(grid_size)
     console.log(typeof(grid_size))
     resetGame(container.clientWidth/ grid_size)
})

resetBtn.addEventListener("click",()=>{
    resetGame(container.clientWidth / grid_size);
})

let cells = [...document.querySelectorAll(".grid-style")];
cells.map((event)=>{
    event.addEventListener("mouseover",()=>{
        event.style.backgroundColor="black";
    })
})