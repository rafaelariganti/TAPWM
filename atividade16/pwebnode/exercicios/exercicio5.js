let eventos = require('events'); //atribuicao da classe EventEmitter a uma variavel 

let EmissorEventos = eventos.EventEmitter; //variavel faz uma referencia a classe EventEmitter

let ee = new EmissorEventos();
//ou criando direto sem a variavel intermediaria 
//let ee = new eventos.EventEmitter();
//mas de forma anterior é uma boa pratica

// e registrado um ouvinte (listener) para o evento 'dados'
//quando esse evento acontecer executar a funcao passada como argumento
ee.on('dados', function(fecha){
console.log(fecha);
});

//emissao do evento somente uma vez
se.emit('dados', 'primeira vez' + Date.now());

//emissao do evento a cada 500 milisegundos
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);