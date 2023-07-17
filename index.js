const formulario = document.querySelector("[data-formulario]");

const campoFormulario = document.querySelectorAll("[required]");


let listaResposta = {}; 

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const listaResposta = {
    email: event.target.elements["email"].value,
  };

  localStorage.setItem("cadastro", JSON.stringify(listaResposta));
  window.location.reload();
  window.location.href = `./formularioSubmetido.html?email=${encodeURIComponent(listaResposta.email)}`

});

campoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", (event) => event.preventDefault());
  campo.addEventListener("input", () => verificaCampo(campo));
});

function verificaCampo(campo) {
  const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError",
  ];

  const mensagens = {
    email: {
      valueMissing: "Valid email required.",
      typeMismatch: "Valid email required.",
      tooShort: "Valid email required.",
    },
  };

  let mensagem = "";

  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
    }
  });

  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");

  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
    campo.classList.add("erro");
  } else {
    mensagemErro.textContent = "";
    campo.classList.remove("erro");
  }

  mensagemErro.textContent = mensagem;
}


