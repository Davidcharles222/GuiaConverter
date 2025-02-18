var fs = require("fs")
var util = require("util")

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(filename, data){
        try{
            return await this.writer(filename, data)
            this.reader = util.promisify(fs.readFile)
            // return true
        }catch(err){
            return false
        }
    }
}

module.exports = Writer