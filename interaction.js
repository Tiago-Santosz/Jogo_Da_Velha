//Escondendo a div antes do clique em iniciar.
window.onload = function(){document.getElementById('game').style.visibility ='hidden'}

function Jogador(nome, forma){
    this.nome = nome;
    this.forma = forma;

}

var player1, player2;
 var JogadorAtual;
 var formas = ['X', 'O'];
 var index = null;

 var tabuleiro = new Array(9)

 function initGame (){

    var nomeplayer1 = document.getElementById("jogador1").value;
    var nomeplayer2 = document.getElementById("jogador2").value;
   player1 = new Jogador(nomeplayer1, 0); //X
   player2 = new Jogador(nomeplayer2, 1); //O

  

JogadorAtual = player1;
setLabelJogadorAtual();

//Exibe a div 
document.getElementById('game').style.visibility = 'visible';   

}

function reset  (){window.location.reload}

function setLabelJogadorAtual (){
    document.getElementById('JogadorAtual').innerHTML = 'Jogador Atual: ' + JogadorAtual.nome;
}

function tabuleiroIsFilled(){
    var preenchidos = 0;

    for(var i = 0; i< tabuleiro.length; i++){
         if(tabuleiro[i] != undefined){
            preenchidos++;

        return preenchidos == tabuleiro.length;
         }
    }

}
/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas linhas do tabuleiro, procurando um vencedor*/
function allElementsInSomeLine (){
    for(var i = 0; i < 7; i++){

        if(tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro [i + 2] == 'X'){
            alert(player1.nome + " - É o ganhador!")
        }
        else if(tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' &&   tabuleiro[i + 2] == 'O'){
            alert(player2.nome + " - É o ganhador!")
        }
    }
}

/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas linhas do tabuleiro, procurando um vencedor*/
function allElemenstColumn(){
    for(var i = 0; i<7; i++){
         if(tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X'&& tabuleiro[i + 6] == 'X'){
            alert(player1.nome + " - É o ganhador!")
         }
         else if(tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O'){
            alert(player2.nome + " - É o ganhador!")
         }
    }
}

function allElemenstDiagonal(){
    if(tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] || tabuleiro[2] == 'X'&& tabuleiro[4] == 'X' && tabuleiro[6] == 'X'){
        alert(player1.nome + " - É o ganhador!")
    }
    else if(tabuleiro[0] == 'O' && tabuleiro[4] == 'O' && tabuleiro[8] || tabuleiro[2] == 'O'&& tabuleiro[4] == 'O' && tabuleiro[6] == 'O'){
        
    }
}


/*Preenche a célula da tabela HTML escolhida pelo usuário ao clicar, além de cuidar do jogador atual da rodada e chamar as funções
  de verificação de algum ganhador */
 function setOnCeil(cel, pos){
    if(tabuleiro[pos] == undefined){
        cel.innerHTML = formas[JogadorAtual.forma];
        tabuleiro[pos] = formas[JogadorAtual.forma];

        //Jogador da rodada
        (JogadorAtual.forma == 0) ? JogadorAtual = player2: JogadorAtual = player1;
        setLabelJogadorAtual();
    }
    else alert("Opa já existe valor aqui. =/");
    allElementsInSomeLine();
    allElemenstColumn();
    allElemenstDiagonal();

    if(tabuleiroIsFilled()){
        alert("Nenhum vencedor! :( Tente novamente.");
         reset();
    }

    
 }