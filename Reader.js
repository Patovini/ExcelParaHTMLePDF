const fs =  require("fs"); // fs = file-system
const util = require("util");

// var novaFuncao = util.promisify(funçaoVelha)


//Classe para ler e retornar os dados
class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
         //atributo reader recebe a função readFile
         //salva uma versao de promise no readFile

    }

    //metodo
    async Read(filepath){
        try{
            
            return await this.reader(filepath,"utf-8");
        
        }catch(err){

            return undefined;
        }
    }
}


module.exports = Reader; 