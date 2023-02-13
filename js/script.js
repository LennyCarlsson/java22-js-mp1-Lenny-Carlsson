const body = document.querySelector("body");

const container1 = document.createElement("div");
container1.id = "container1";
body.appendChild(container1);

const container2 = document.createElement("div");
container2.id = "container2";
body.appendChild(container2);

createTopPart();
createBottomPart();

function createTopPart() {
	const amount = 6;
	for (let i = 1; i < amount; i++) {
		const p = document.createElement("p");
		container1.append(p);

		const hue = 40 + (40 * i) / (amount - 1);
		p.style.background = `hsl(${hue}, 90%, 60%)`;
		p.style.height = `${10 + 10 * i}px`;
		p.innerText = i;
	}
}

function createBottomPart() {
	container2.style.display = "grid";
	container2.style.gridTemplateRows = "repeat(10, 1fr)";
	container2.style.gridTemplateColumns = "repeat(3, 1fr)";
	container2.style.width = "80%";
	container2.style.textAlign = "center";

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const strings = [
		"Ett",
		"Två",
		"Tre",
		"Fyra",
		"Fem",
		"Sex",
		"Sju",
		"Åtta",
		"Nio",
		"Tio",
	];

	for (let i = 0; i < 3; i++) {
		const element = document.createElement("div");
		element.style.display = "inline-block";
		element.style.width = "150px";
		element.style.textAlign = "center";
		container2.appendChild(element);

		for (let j = 0; j < 10; j++) {
			const cell = document.createElement("div");
			cell.style.border = "10px solid blue";
			cell.style.height = "30px";
			cell.style.lineHeight = "30px";
			cell.style.textAlign = "center";

			if (j % 2 === 0) {
				cell.style.backgroundColor = "lightgray";
			}

			if (i === 0) {
				cell.innerHTML = numbers[j];
			}

			if (i === 1) {
				cell.innerHTML = numbers[9 - j];
			}

			if (i === 2) {
				cell.innerHTML = strings[j];
			}

			element.appendChild(cell);
		}
	}
}
