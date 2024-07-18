let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});    
}

function exibirMensagemInicial(params) {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10') ;
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10') ;

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Voce acertou!');
        let palavraTentativa = tentativa > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else   {
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O Numero é menor');
        } else {    
        exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativa++;
        limparCampo();
    }

}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }

        if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

let linguagensDeprogramacao = ['JavaScript', 'C', 'Python']

console.log(linguagensDeprogramacao[-1])