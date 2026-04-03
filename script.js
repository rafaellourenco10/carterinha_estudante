document.addEventListener("DOMContentLoaded", function() {
  const btnGerar = document.getElementById("gerar");

  btnGerar.addEventListener("click", function() {
    // Pega os valores digitados
    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;
    const matricula = document.getElementById("matricula").value;
    const foto = document.getElementById("foto").value;
    const site = document.getElementById("site").value;

    // Atualiza a carteirinha
    document.getElementById("nomeAluno").textContent = nome;
    document.getElementById("cursoAluno").textContent = curso;
    document.getElementById("matriculaAluno").textContent = matricula;
    document.getElementById("fotoAluno").src = foto;
    document.getElementById("siteInstituicao").href = site;
    document.getElementById("siteInstituicao").textContent = site;
  });
});