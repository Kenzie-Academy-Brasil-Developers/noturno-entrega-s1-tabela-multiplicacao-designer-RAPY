function multiplos(numero) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let output = [];
    if (numero == undefined){
        numero = 10;
    }

    for (let linha = 0; linha <= numero; linha++) {
        output[linha] = [];
    for (let coluna = 0; coluna <= numero; coluna++){
        let multiplicacao = linha * coluna
        output[linha][coluna]= multiplicacao

    }
    
 }console.table(output)
 return output

}
multiplos(10)