# JogoDaVelha

Projeto de Jogo da Velha Simples, apenas com HTML/CSS/JavaScript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha</title>
</head>
<body>
  
<style>
  
  body {
    text-align: center;
}

.quadrado{
    text-align: center;
    width: 50px;
    background-color: #eee;
    display: inline-block;
    padding: 40px;
    font-size: 60px;
    margin: 5px;
    cursor: pointer;
    color: #eee;
}

.jogador, .vencedor{
    font-size: 30px;
    margin-top: 10px;
}

.button{
    margin-top: 10px;
    width: 100px;
    height: 30px;
    background:#eee;
    cursor: pointer;
}
  
</style>
   
   

<h1>Jogo da Velha</h1>

<div>
    <div id="1" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
    <div id="2" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
    <div id="3" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
</div>

<div>
    <div id="4" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
    <div id="5" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
    <div id="6" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
</div>

<div>
    <div id="7" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
    <div id="8" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
    <div id="9" class="quadrado" onclick="escolherquadrado(this.id)">-</div>
</div>

<div class="jogador">
    <label>
        Jogador:
    </label>
    <label id="Jogador-Selecionado">

    </label>
</div>

<div class="vencedor">
    <label>
        Vencedor:
    </label>
    <label id="Vencedor-Selecionado">

    </label>
</div>

<div>
    <button class="button" onclick="reiniciar()">
        Reiniciar
    </button>
</div>
    
</body>

<script type="text/javascript">
  var jogador = null;
var vencedor = null;
var VencedorSelecionado = document.getElementById ('Vencedor-Selecionado');
var JogadorSelecionado = document.getElementById('Jogador-Selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherquadrado(id){

    if(vencedor!=null){
        return;
    }
    var quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador == 'X'){
        jogador = '0';
    }else{
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    JogadorSelecionado.innerHTML = jogador;
}

function  checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudacor(quadrado1, quadrado2, quadrado3);
        mudavencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudacor(quadrado4, quadrado5, quadrado6);
        mudavencedor(quadrado4);
        return;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudacor(quadrado7, quadrado8, quadrado9);
        mudavencedor(quadrado7);
        return;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudacor(quadrado1, quadrado4, quadrado7);
        mudavencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudacor(quadrado2, quadrado5, quadrado8);
        mudavencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudacor(quadrado3, quadrado6, quadrado9);
        mudavencedor(quadrado3);
        return;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudacor(quadrado1, quadrado5, quadrado9);
        mudavencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudacor(quadrado3, quadrado5, quadrado7);
        mudavencedor(quadrado3);
        return;
    }

}






function mudavencedor(quadrado){
    vencedor = quadrado.innerHTML;
    VencedorSelecionado.innerHTML = vencedor;
}

function mudacor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia (quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual=true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    VencedorSelecionado.innerHTML = '';
   
    for(var i=1;i<=9;i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}
</script>
</html>
