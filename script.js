let container = document.getElementById("sketch-c")
for(let i = 0; i <16; i++){
    let div = document.createElement("div", "class")
    let msg = document.createTextNode(`${i}`)
    div.classList.add("test")
    container.appendChild(div);
}