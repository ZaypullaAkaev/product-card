export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal.querySelector('.close-btn');
    this.initListeners();
  }

  open() {
    if (this.modal) {
      this.modal.classList.add('modal-showed');
    }
  }

  close() {
    if (this.modal) {
      this.modal.classList.remove('modal-showed');
    }
  }

  isOpen() {
    return this.modal ? this.modal.classList.contains('modal-showed') : false;
  }

  initListeners() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
