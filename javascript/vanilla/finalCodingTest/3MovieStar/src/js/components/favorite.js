class Favorite {
	constructor() {
		this.favoriteElement = document.querySelector(".content-favorite");
	}

	setup() {
		this.bindEvents();
	}

	bindEvents() {
		this.favoriteElement.addEventListener("click", (e) => {
			const cPath = e.composedPath();
			const element = cPath.find((elem) => elem.tagName === "BUTTON");
			console.log(e);
			if (!element) return;
			element.classList.toggle("on");
		});
	}
}

export default Favorite;
