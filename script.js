const gridContainerEl = document.querySelector("#grid-container");

function createGrid(n) {
	for (let i = 0; i < n; i++) {
		const rowContainerEl = document.createElement("div");
		rowContainerEl.classList.add("row-container");
		gridContainerEl.appendChild(rowContainerEl);
		for (let j = 0; j < n; j++) {
			const cellEl = document.createElement("div");
			cellEl.classList.add("cell");
			rowContainerEl.appendChild(cellEl);
			cellEl.addEventListener("mouseover", () => {
				cellEl.style.backgroundColor = "#000";
			});
		}
	}
}

createGrid(16);
