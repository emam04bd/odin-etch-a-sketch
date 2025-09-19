const gridContainerEl = document.querySelector("#grid-container");

for(let i = 0; i < 16; i++) {
    const rowContainerEl = document.createElement("div");
    rowContainerEl.classList.add("row-container");
    gridContainerEl.appendChild(rowContainerEl);
    for(let j = 0; j < 16; j++) {
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        rowContainerEl.appendChild(cellEl);
    }
}