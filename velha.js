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