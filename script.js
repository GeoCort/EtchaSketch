let container = document.getElementById("sketch-c")
let grid_size = 64;
function startBoard(){
    for(let k =0; k<grid_size; k++){
        let row = document.createElement("div");
        row.classList.add("hori")
        for(let i = 0; i <grid_size; i++){
            let div = document.createElement("div", "class")
            let msg = document.createTextNode(`${i}`)
            div.classList.add("basic")
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}
function clearContainer(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}
function resetGame(){
    clearContainer();
    startBoard();
}

startBoard();

