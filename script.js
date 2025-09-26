const form = document.getElementById("form");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const pais = document.getElementById("pais").value.trim();

    if (nome === "" || sobrenome === "" || pais === "") {
        erro.textContent = "Preencha todos os campos antes de enviar. ";
    } else {
        erro.textContent = "";
        alert("Formulário enviado com sucesso!");
        form.reset();
    }
})