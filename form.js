export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const formData = new FormData(this.form);
    const values = {};
    for (let [key, value] of formData.entries()) {
      values[key] = value;
    }
    return values;
  }

  isValid() {
    return this.form ? this.form.checkValidity() : false;
  }

  reset() {
    if (this.form) {
      this.form.reset();
    }
  }
}
