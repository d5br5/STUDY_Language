class ColaGenerator {
	constructor() {}
	setup() {
		this.loadData((json) => {
			this.colaFactory(json);
		});
	}

	loadData(callback) {
		const requestObj = new XMLHttpRequest();
		requestObj.open("GET", "./src/js/items.json");
		requestObj.onreadystatechange = () => {
			if (requestObj.readyState == "4" && requestObj.status == "200") {
				callback(JSON.parse(requestObj.responseText));
			}
		};
		requestObj.send(null);
	}

	colaFactory(data) {
		const parent = document.querySelector(".list-item");
		data.forEach((el) => {
			const item = document.createElement("li");
			let itemTemplate = `
                <button
                    type="button"
                    class="btn-item"
                    data-item="${el.name}"
                    data-count="${el.count}"
                    data-price="${el.cost}"
                    data-image="${el.img}">
                    <img src="./src/images/${el.img}" alt="" class="img-item" />
                    <strong class="tit-item">${el.name}</strong>
                    <span class="txt-price">${el.cost}원</span>
                </button>
            `;
			item.innerHTML = itemTemplate;
			parent.appendChild(item);
		});
	}
}

export default ColaGenerator;
