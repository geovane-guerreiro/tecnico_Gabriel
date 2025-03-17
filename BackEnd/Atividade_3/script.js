function dados(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;
    const endereco = document.getElementById("endereco").value;
    const profissao = document.getElementById("profissao").value;


    const camposContainer = document.getElementById("campos-container");
    const dadosSalvosContainer = document.getElementById("dados-salvos");


    const exibe_nome = document.createElement("p");
    exibe_nome.textContent = "Nome: " + nome;

    const exibe_idade = document.createElement("p");
    exibe_idade.textContent = "Idade: " + idade;

    const exibe_rg = document.createElement("p");
    exibe_rg.textContent = "Rg: " + rg;

    const exibe_cpf = document.createElement("p");
    exibe_cpf.textContent = "Cpf: " + cpf;

    const exibe_endereco = document.createElement("p");
    exibe_endereco.textContent = "Endereço: " + endereco;

    const exibe_profissao = document.createElement("p");
    exibe_profissao.textContent = "Profissão: " + profissao;


    const dadosSalvos = document.createElement("div");
    dadosSalvos.appendChild(exibe_nome);
    dadosSalvos.appendChild(exibe_idade);
    dadosSalvos.appendChild(exibe_rg);
    dadosSalvos.appendChild(exibe_cpf);
    dadosSalvos.appendChild(exibe_endereco);
    dadosSalvos.appendChild(exibe_profissao);   
    dadosSalvos.id = "dadosSalvos";

    camposContainer.remove();
    dadosSalvosContainer.appendChild(dadosSalvos);




}