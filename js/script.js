document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
      formMessage.textContent = "Mensagem enviada com sucesso!";
      formMessage.style.color = "green";
      contactForm.reset();
    } else {
      formMessage.textContent = "Por favor, preencha todos os campos.";
      formMessage.style.color = "red";
    }
  });
});
