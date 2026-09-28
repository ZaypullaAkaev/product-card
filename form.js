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

  isValid(passwordName, confirmPasswordName) {
    const isHtmlValid = this.form.checkValidity();
    if (passwordName && confirmPasswordName) {
      const values = this.getValues();
      const password = values[passwordName];
      const confirmPassword = values[confirmPasswordName];

      return isHtmlValid && password === confirmPassword;
    }

    return isHtmlValid;
  }

  reset() {
    if (this.form) {
      this.form.reset();
    }
  }
}
