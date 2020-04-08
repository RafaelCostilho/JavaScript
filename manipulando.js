// CRIANDO E ESCREVENDO NUM ARQUIVO TXT/CSV

// Importando o módulo
const fs = require('fs')

fs.writeFile(
    'cadastros.csv, //Este é o arquivo que vamos escrever
    'RafaelCosta\n,AlexandreLymberompoulos\n,TonyStark\n,MichaelJackson\n', //Isso é o que vamos escrever
    {enconding:'utf-8',flag: 'w'}, //Usamos 'utf-8', basicamente, para dizer que os caracteres do texto possuiram assentos.
    function (err) {
        if (err) throw err; console.log('Arquivo salvo!') //Mostrá erro, se houver. Se não houver, mostrará 'Arquivo salvo!'
    }
)

OBS 1: Teste esse código para que você possa entender melhor.
OBS 2: Usamos o \n para escrever um nome em cada linha.

/*
O QUE SÃO AS FLAGs?
'w' iremos criar o arquivo caso ele não exista, caso exista seu conteúdo será limpo para poder escrever o novo.
'a' ireiremos criar o arquivo caso ele não exista, caso exista seu conteúdo será mantido e o novo será adicionado.
*/



// AGORA IREMOS LER O ARQUIVO TXT/CSV E ARMAZENAR ELE NUMA VARIÁVEL

// Abrindo o arquivo e armazenando-o em data
var data = fs.readFileSync('cadastros.csv', 'utf-8')

// Mostrando
console.log(data)

OBS 1: Teste esse código para que você possa entender melhor.
OBS 2: Neste caso, cadastros.csv precisa está está na mesma pasta do arquivo manipulando.js
