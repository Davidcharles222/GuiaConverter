var fs = require("fs")
var util = require("util")

class Reader{
    
    constructor(){
        this.reader = util.promisify(fs.readFile)//transforma função em uma promise
    }

    async Read(filepath){
        try{
            return await this.reader(filepath,"utf-8")
        }catch(err){
            return undefined
        }
    }
}

module.exports = Reader