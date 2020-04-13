/* VAMOS SUPOR O SEGUINTE ARQUIVO: lanches.csv */
/*
ID;NOME;PREÇO;DESCRIÇÃO;CÓDIGO
1;X-Tudo;11;Carne, salada, bacon, calabresa;
2;X-Bacon;9;Carne, queijo, salada, presunto, bacon;
3;X-Banana;11;Carne, queijo, calabresa, bacon, banana, salada, ovo;
4;X-Eggs-Bacon;10;Carne, quejo, presunto, ovo, bacon, salada;#LE001
5;X-Burger;8;Carne, ovo, quejo, presunto, salada;#LB001
6;X-Broca;19;Pão de milho, 2 carnes, 2 presuntos, 2 queijos, 2 ovos, 7,calabresa, bacon;
7;X-Camarão;13;queijo, ovo, presunto, camarão;
8;Misto;5;quejo, ovo, presunto;
9;X-Eggs-Burger;9;Carne,ovo, queijo, presunto, salada;#LB002
10;X-Calabresa;9;Carne, calabresa, queijo, presunto, salada.;
11;X-Eggs-Calabresa;9;Carne, queijo, presunto, ovo, calabresa, salada;
12;X-Filé;11;Filé, calabresa, bacon, presunto, queijo,;
*/

//AQUI INICIAREMOS A LEITURA
const { readFileSync } = require('fs') //Importando ua função para ler o arquivo

data = readFileSync('lanches.cvs', 'utf-8') //Lendo arquivo (Esta função pega o arquivo e o transforma em uma string')

df = [] //Declarando nossa matriz
while (true) {
    let f = data.indexOf('\n') //Encontrando o fim da primeira linha
    if (f == -1) { break } //Encerra o loop caso não encontre uma quebra de linha (ou seja, ele já leu todas as linhas)
    
    let lista = data.slice(0, f).split(';') //lendo a primeira linha e a separando em colunas por ';' (poderia ser por ',')
    df.push(lista) //adicionando nossa primeira linha e suas respectivas colunas
    data = data.slice(f+1) //Excluindo a primera linha da nossa string para ler a próxima
}

//Agora podemos acessa qualquer parte do arquivo indicando sua linha e sua coluna, por exemplo:
console.log( f[0][1] ) //Isso deve nos retornar a string 'X-Tudo', onde 0 é a linha e 1 é a coluna.


//MISSÃO CUMPRINDA, AGORA PODEMOS O TRANSFORMAR EM UMA TABELA AINDA PELO JAVASCRIPT
corpo = document.getElementById('body1') //Vamos supor que temos em nosso arquivo html um body com id = 'body1'
tbl = document.createElement("table")

quantLin = df.length //quantidade de linhas do nosso df
quantCol = df[0].length //quantidade de colunas do nosso df

//Criando o thead (Podemos entender como título ou cabeçalho) (LINHA 0 E COLUNA 0)
thead = document.createElement('thead')
linthead = document.createElement("tr")

//COLOCANDO OS TEXTO NO thead
for (let c = 0; c < quantCol; c++) {
    let col = document.createElement("td")
    let texto = document.createTextNode(matriz[0][c])
    col.appendChild(texto)
    linthead.appendChild(col)
}

thead.appendChild(linthead)
tbl.appendChild(thead)


//AQUI COMEÇA A CONFIGURAÇÃO DO CORPO DA TABELA: tbody
tbody = document.createElement('tbody')

for (let l = 1; l < quantLin; l++) {
    let lin = document.createElement("tr") //criando a linha l

    //Iniciando o loop para colocar todas as colunas da linha l
    for (let c = 0; c < quantCol; c++) {
        let col = document.createElement("td") //criando a coluna c
        let texto = document.createTextNode(df[l][c]) //lendo o texto na linha l e coluna c
        col.appendChild(texto) //colocando texto na coluna
        lin.appendChild(col) //colocando a coluna na linha
    }
    tbody.appendChild(lin) //colocando a linha no tbody
}

tbl.appendChild(tbody) //colocando tbody na tabela
corpo.appendChild(tbl) //colocando tabela no corpo

//ESPERO TER AJUDADO
