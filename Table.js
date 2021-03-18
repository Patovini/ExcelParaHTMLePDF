class Table{

    constructor(arr){
        
        this.header = arr[0];
        arr.shift();  // arr.shift remove o cabeçario/ primeira linha de uma array
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length; //retornando a qnt de linhas
    }

    get ColumnCount(){
        return this.header.length; //retorna a qnt de coluna
    }
}   

module.exports = Table;