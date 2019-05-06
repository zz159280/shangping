class Register {
	constructor() {
		this.inputUserName = document.querySelector("#inputUserName");
		this.inputPassword = document.querySelector("#inputPassword");
		this.btn = document.querySelector("#btn");
		this.bindEvent();
	}

	bindEvent() {
		this.btn.onclick = () => {
			let username = this.inputUserName.value,
				password = this.inputPassword.value;
			tools.ajax("POST", "../api/v1/register.php", {
				username,
				password
			}, data => {
				console.log(data);
			})

			return false;

		}
	}

}

new Register();