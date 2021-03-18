var ejs = require("ejs");

class HtmlParser{

     static async Parse(table){
        //dados do ejs  : (recebe  da tabela)
        return await ejs.renderFile("./table.ejs",{header: table.header, rows: table.rows})
    }

}

module.exports = HtmlParser;