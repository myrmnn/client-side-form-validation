//es6 class for reusability

class FormValidator {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
	}

	initialize() {
		console.log("form", this.form);
		console.log("fields", this.fields);
	}
}

const form = document.querySelector(".form");
const fields = ["firstname", "lastname", "email", "password"];

const validator = new FormValidator(form, fields);

validator.initialize();
