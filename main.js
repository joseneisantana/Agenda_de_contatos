// Função para adicionar um novo contato na tabela
function adicionarContato() {
    // Obter os valores do nome e telefone do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Obter a tabela de contatos
    
    var tabelaContatos = document.getElementById("contatos");

    // Criar uma nova linha na tabela
    /*pegeu a variavel tabelaContatos armazen nesta nova (novaLinha)
     adicionou ao metodo .insertRow */

    var novaLinha = tabelaContatos.insertRow();

    // Inserir células na nova linha
    var celulaNome = novaLinha.insertCell(0);/*Vai começar na zero*/
    var celulaTelefone = novaLinha.insertCell(1);/*Vai começar na um*/

    // Preencher as células com os valores do formulário
    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}