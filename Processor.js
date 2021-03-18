
//Classe para processar os dados
class Processor{
    
    static Process(data){
        //split divide uma string em partes
        
        var a = data.split("\r\n"); // \n = pular linha(quebra de linha) 
        var rows = [];

        a.forEach(row => {
          var arr = row.split(",");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;