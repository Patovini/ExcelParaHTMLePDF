var Reader = require("./Reader.js");
var Processor = require("./Processor.js");
var Table = require("./Table.js");
var HtmlParser = require("./HtmlParser.js");
var Writer = require("./Writer.js");
var PDFWriter = require("./PDFWriter"); 


var leitor = new Reader();
var escritor = new Writer();


async function main(){
    
    //o await faz qnd a função concluir ele retorna tudo na variavel dados
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);
    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios)
     
    escritor.Write(Date.now() + ".html",html);
    PDFWriter.WritePDF(Date.now() + ".PDF",html)

    

    
}

main();