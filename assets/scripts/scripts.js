function criarTarefa() {
  var container = document.createElement("div");
  var novoLabel = document.createElement("label");
  var novoInput = document.createElement("input");

  novoLabel.setAttribute("for", "lista-tarefas");
  novoLabel.setAttribute("class", "muda");
  novoInput.setAttribute("id", "lista-tarefas");
  novoInput.setAttribute("type", "checkbox");

  var input = document.querySelector("#tarefa");
  var valor = input.value;

  var texto = document.createTextNode(valor);

  novoLabel.appendChild(texto);

  var main = document.querySelector("main");
  container.appendChild(novoInput);
  container.appendChild(novoLabel);
  main.appendChild(container);
}
