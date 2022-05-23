/* 
3- Crie uma página que contenha:
Um botão ao qual será associado um event listener;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável 
clickCount é atualizada.*/
function criaBotao(){
    const btnCount = document.createElement('button');
    btnCount.innerText = 'Aperte aqui';
    btnCount.id = 'contador';
    document.body.appendChild(btnCount);   
}

function clicarBotao(){
    const btnCount = document.getElementById('contador');
    btnCount.addEventListener('click', contaCliques);
}

function contaCliques (){
    let contador = 0;
    
}
criaBotao(), clicarBotao();