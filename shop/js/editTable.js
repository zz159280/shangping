class EditTable {
	constructor(tbody) {
		this.tbody = document.querySelector(tbody);
		this.bindEvents();
	}

	bindEvents() {
		this.tbody.onclick = e => {
			let target = e.target;
			let tr = target.parentNode.parentNode;
			let classList = Array.from(target.classList);
			if(classList.includes("btn-edit")) {
				this.editBtnClick(tr);
			} else if(classList.includes("btn-del")) {
				this.delBtnClick(tr);
			} else if(classList.includes("btn-ok")) {
				this.okBtnClick(tr);
			} else if(classList.includes("btn-cancel")) {
				this.cancelBtnClick(tr);
			}
		}
	}

	editBtnClick(tr) {
		Array.from(tr.querySelectorAll("span")).forEach(span => {
			span.nextElementSibling.value = span.innerHTML;
		})
		tr.classList.add("edit");
	}

	delBtnClick(tr) {
		if(confirm("确定要删除么？")) {
			let id = tr.getAttribute("data-id");
			tools.ajaxGetPromise("api/v1/delete.php", {
				id
			}).then(data => {
				if(data.res_code === 1) {
					alert(data.res_message);
					getShop.init();
				} else {
					alert(data.res_message);
				}
			})
		}
	}

	okBtnClick(tr) {
		let inputPrice = tr.querySelector(".inputPrice"),
			inputNum = tr.querySelector(".inputNum"),
			id = tr.getAttribute("data-id"),
			price = inputPrice.value,
			num = inputNum.value;
		tools.ajaxGetPromise("api/v1/ok.php", {
			id,
			price,
			num
		}).then(data => {
			tr.classList.remove("edit");
			alert(data.res_message);
			if(data.res_code === 1) {
				inputPrice.previousElementSibling.innerHTML = inputPrice.value;
				inputNum.previousElementSibling.innerHTML = inputNum.value;

			}
		})
	}

	cancelBtnClick(tr) {
		tr.classList.remove("edit");
	}
}
new EditTable("#tbody");