const fs =  require("fs"); // fs = file-system
const util = require("util");

// var novaFuncao = util.promisify(funçaoVelha)


//Classe para ler e retornar os dados
class Writer{

   constructor(){

        this.writer = util.promisify(fs.writeFile);
   }

   //metodo
  async Write(filename, data){
      try {
            await this.writer(filename, data); 
            return true; 
          
      } catch (err) {

          return false;
      }
   }
}

module.exports = Writer;