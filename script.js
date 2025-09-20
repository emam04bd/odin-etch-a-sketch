const gridContainerEl = document.querySelector("#grid-container");

let gridSize = 16;

function createGrid() {
	for (let i = 0; i < gridSize; i++) {
		const rowContainerEl = document.createElement("div");
		rowContainerEl.classList.add("row-container");
		gridContainerEl.appendChild(rowContainerEl);
		for (let j = 0; j < gridSize; j++) {
			const cellEl = document.createElement("div");
			cellEl.classList.add("cell");
			rowContainerEl.appendChild(cellEl);
			cellEl.style.backgroundColor =
				"#" + Math.floor(Math.random() * 4294967295).toString(16);
			cellEl.style.opacity = "0.0";
			let opacity = 0;
			cellEl.addEventListener("mouseover", () => {
				opacity += 0.1;
				cellEl.style.opacity = String(opacity);
			});
		}
	}
}

function removeGrid() {
	gridContainerEl.textContent = "";
}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
	removeGrid();
	createGrid();
});

const resizeBtn = document.querySelector("#resize-btn");
resizeBtn.addEventListener("click", () => {
	do {
		gridSize = prompt(
			"Enter number of cell in each row & column (max 100)"
		);
	} while (gridSize <= 0 || 100 < gridSize);
	removeGrid();
	createGrid();
});

createGrid(gridSize);
