// Globais
let resultadoPontos1 = 0; 
let resultadoPontos2 = 0;
let stop1 = 0;

const valorAleatorio = () => {
    let min = Math.ceil(1);
    let max = Math.floor(13);
    let aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

const jogador1 = () => {
    if(resultadoPontos1 < 21) {
        let numeroQualquer = valorAleatorio();

        resultadoPontos1 = resultadoPontos1 + numeroQualquer;

        let cartas1 = document.getElementById("cartas1"); // pegar cartas pela SRC e um valor aleatorio
        $(cartas1).attr("src", '/images/' + numeroQualquer + '.png');
        
        $("#pontos1").html(resultadoPontos1);
        
        if(resultadoPontos1 == 21) { // caso o jogador 1 ganhe
            let vitoria = document.getElementById("vitoria");
            $(vitoria).prop('style', 'display: visible;'); //display vitoria ou perda
            $("#vitoria").html('O Jogador do time azul de numero 1 ganhou do derrotado jogador do time vermelho de numero 2, que perdeu!');
            
            // Pegar os elementos a serem modificados
            let btn_jogador1 = document.getElementById("btn_jogador_1");
            let btn_parar1 = document.getElementById("btn_parar_1");
            let btn_jogador2 = document.getElementById("btn_jogador_2");
            let btn_parar2 = document.getElementById("btn_parar_2");

            let btn_rein = document.getElementById("btn_rein") // Reiniciar a jogada
            $(btn_rein).prop('disabled', false);

            $(btn_jogador1).prop('disabled', true);
            $(btn_parar1).prop('disabled', true);
            $(btn_jogador2).prop('disabled', true);
            $(btn_parar2).prop('disabled', true);
            stop1 = 0; // Serve para para e calcular quem ganhou
        }
        if(resultadoPontos1 > 21) { // Caso o jogador 1 perda
            let vitoria = document.getElementById("vitoria"); 
            $(vitoria).prop('style', 'display: visible;'); //display vitoria ou perda
            $("#vitoria").html('O Jogador do time azul de numero um perdeu! Ele perdeu para O jogador do time vermelho de numero dois que saiu vitorioso!');

            // Pegar os elementos a serem modificados
            let btn_jogador1 = document.getElementById("btn_jogador_1"); 
            let btn_parar1 = document.getElementById("btn_parar_1");
            let btn_jogador2 = document.getElementById("btn_jogador_2"); 
            let btn_parar2 = document.getElementById("btn_parar_2");

            let btn_rein = document.getElementById("btn_rein") // Reiniciar a jogada
            $(btn_rein).prop('disabled', false);

            $(btn_jogador1).prop('disabled', true);
            $(btn_parar1).prop('disabled', true);
            $(btn_jogador2).prop('disabled', true);
            $(btn_parar2).prop('disabled', true);
            stop1 = 0; // Serve para parar e calcular quem ganhou
        }
        
    }
}

const jogador2 = () => {
    if(resultadoPontos2 < 21) {
        let numeroQualquer = valorAleatorio();
        // pontos a serem colocados no HTML

        resultadoPontos2 = resultadoPontos2 + numeroQualquer;

        let cartas2 = document.getElementById("cartas2"); // pegar cartas pela SRC e um valor aleatorio
        $(cartas2).attr("src", '/images/' + numeroQualquer + '.png');
        
        $("#pontos2").html(resultadoPontos2);
        
        if(resultadoPontos2 == 21) { // bloquear todos os comandos se sair vitorioso
            let vitoria = document.getElementById("vitoria");
            $(vitoria).prop('style', 'display: visible;'); //display vitoria ou perda
            $("#vitoria").html('O Jogador do time vermelho de numero dois ganhou do derrotado jogador do time azul de numero um, que perdeu!');
            
            let btn_jogador1 = document.getElementById("btn_jogador_1");
            let btn_parar1 = document.getElementById("btn_parar_1");
            let btn_jogador2 = document.getElementById("btn_jogador_2");
            let btn_parar2 = document.getElementById("btn_parar_2");

            let btn_rein = document.getElementById("btn_rein") // Botao reiniciar funciona
            $(btn_rein).prop('disabled', false);

            $(btn_jogador1).prop('disabled', true);
            $(btn_parar1).prop('disabled', true);
            $(btn_jogador2).prop('disabled', true);
            $(btn_parar2).prop('disabled', true);
            stop1 = 0; // Serve para para e calcular quem ganhou
        }
        if(resultadoPontos2 > 21) { // caso estourar, perde o jogo
            let vitoria = document.getElementById("vitoria");
            $(vitoria).prop('style', 'display: visible;'); //display vitoria ou perda
            $("#vitoria").html('O Jogador do time vermelho de numero dois perdeu! Ele perdeu para O jogador do time azul de numero um que saiu vitorioso!');
            
            let btn_jogador2 = document.getElementById("btn_jogador_2"); 
            let btn_parar2 = document.getElementById("btn_parar_2");
            
            let btn_rein = document.getElementById("btn_rein") // Botao reiniciar funciona
            $(btn_rein).prop('disabled', false);

            $(btn_jogador2).prop('disabled', true);
            $(btn_parar2).prop('disabled', true);   
            stop1 = 0; // Serve para para e calcular quem ganhou
        }
    }
}

const parar1 = () => {
    // bloquear jogador 1 
    stop1 = stop1 + 1;
    let btn_jogador1 = document.getElementById("btn_jogador_1");
    let btn_parar1 = document.getElementById("btn_parar_1");

    $(btn_jogador1).attr('disabled', true); // bloquear botao 
    $(btn_parar1).attr('disabled', true);
    verificaStop(stop1);
}

const parar2 = () => {
    // bloquear jogador 2 
    stop1 = stop1 + 1;
    let btn_jogador2 = document.getElementById("btn_jogador_2");
    let btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', true); // bloquear botao 
    $(btn_parar2).attr('disabled', true);
    verificaStop(stop1);
}

// inicio
const iniciar = () => {
    // caso seja apertado o botao, todos os elementos voltaram a serem exibidos

    // jogador um inicia
    let btn_jogador1 = document.getElementById("btn_jogador_1"); 
    let btn_parar1 = document.getElementById("btn_parar_1");
    let btn_jogador2 = document.getElementById("btn_jogador_2"); 
    let btn_parar2 = document.getElementById("btn_parar_2");

    let btn_iniciar = document.getElementById("btn_iniciar"); // inicia o jogo

    // Iniciar todos os botoes e bloquear o iniciar
    $(btn_jogador1).prop('disabled', false);
    $(btn_parar1).prop('disabled', false);
    $(btn_jogador2).prop('disabled', false);
    $(btn_parar2).prop('disabled', false);
    $(btn_iniciar).prop('disabled', true);
}

const reiniciar = () => {
    // zerar pontos
    stop1 = 0;
    $("#pontos1").html('0');
    $("#pontos2").html('0');

    resultadoPontos1 = 0;
    resultadoPontos2 = 0;
    let vitoria = document.getElementById("vitoria");
    $(vitoria).prop('style', 'display: none;'); //display vitoria ou perda
    
    
    let btn_jogador1 = document.getElementById("btn_jogador_1");
    let btn_parar1 = document.getElementById("btn_parar_1");
    let btn_jogador2 = document.getElementById("btn_jogador_2");
    let btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).prop('disabled', false);
    $(btn_parar1).prop('disabled', false);
    $(btn_jogador2).prop('disabled', false);
    $(btn_parar2).prop('disabled', false);
}

const verificaStop = (stop1) => { // roda toda vez que o jogador para a jogada
    if(stop1 == 2) {
        let vitoria = document.getElementById("vitoria");
        $(vitoria).prop('style', 'display: visible;'); // display vitoria ou perda
    } 
    else if (resultadoPontos1 > resultadoPontos2 && resultadoPontos1 <= 21) {
        $("#vitoria").html("O Jogador do time azul de numero 1 ganhou do derrotado jogador do time vermelho de numero 2, que perdeu!");
    }
    else if (resultadoPontos1 < resultadoPontos2 && resultadoPontos2 <= 21) {
        $("#vitoria").html("O Jogador do time vermelho de numero dois ganhou do derrotado jogador do time azul de numero um, que perdeu!");
    }
    else if (resultadoPontos1 <= 21 && resultadoPontos2 <= 21 && resultadoPontos1 == resultadoPontos2) {
        $("#vitoria").html("Ninguem perdeu, mas também ninguem ganhou"); 
    }
    else{
        $("#vitoria").html("Ninguem ganhou bixo");
    }

    let btn_rein = document.getElementById("btn_rein") // Reiniciar a jogada
    $(btn_rein).prop('disabled', false);
}
