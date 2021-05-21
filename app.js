class FormValidator {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
	}

	initialize() {
		this.validateOnSubmit();
	}

	validateOnSubmit() {
		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			this.fields.forEach((field) => {
				const input = document.querySelector(`.${field}`);
				this.validateInput(input);
			});
		});
	}

	validateInput(input) {
		if (input) {
			input.nextElementSibling.classList.remove("error-message-show");
			input.nextElementSibling.nextElementSibling.classList.remove("icon-show");
		}
		if (input.value === "") {
			input.nextElementSibling.classList.add("error-message-show");
			input.nextElementSibling.nextElementSibling.classList.add("icon-show");
		}
	}
}

const form = document.querySelector(".form");
const fields = ["firstname", "lastname", "email", "password"];

const validator = new FormValidator(form, fields);

validator.initialize();