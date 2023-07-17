document.addEventListener("DOMContentLoaded", () => {


    const monstrarEmail = document.querySelector(".container-principal .container-conteudo .info .mostrarEmail");
    const cadastro = localStorage.getItem("cadastro");
    if(cadastro){
      const listaReposta = JSON.parse(cadastro);
      const email = listaReposta.email
      monstrarEmail.textContent = email
    }
  
  })