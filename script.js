document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("¡Gracias por tu mensaje! Te responderemos pronto.");
      form.reset();
    });
  }
});