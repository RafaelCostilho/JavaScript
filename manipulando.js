# LENDO ARQUIVO TXT/CSV E ARMAZENANDO NUMA VARIÁVEL

# Importando o módulo
const fs = require('fs')

# Abrindo o arquivo e armazenando-o em data
var data = fs.readFileSync('cadastros.csv', 'utf-8')

# Mostrando
console.log(data)

OBS 1: Teste esse código para que você possa entender melhor.
OBS 2: Neste caso, cadastros.csv precisa está está na mesma pasta do arquivo manipulando.js
