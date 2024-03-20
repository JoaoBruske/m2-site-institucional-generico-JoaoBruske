function abrirModal() {
  const botoesAbreModal = document.querySelectorAll(".openModal");
  const modal = document.querySelector("dialog");

  for (let i = 0; i < botoesAbreModal.length; i++) {
    const botao = botoesAbreModal[i];
    botao.addEventListener("click", function () {
      modal.showModal();
      modal.focus()
      fecharModal();
    });
  }
}

function fecharModal() {
  const modal = document.querySelector("dialog");
  const botaFecharModal = document.querySelector(".modal__close");

  botaFecharModal.addEventListener("click", function () {
    modal.close();
  });
}

abrirModal();
