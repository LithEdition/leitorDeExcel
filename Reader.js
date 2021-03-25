const fs = require('fs')
const util = require('util')

// Obs: O readfile não RETORNA nenhum dado.
// Para a função seja capas de retornar dados, será necessario usar promisify
// Exemplo: "const novaFuncaoComPromise = util.promisify(funcaoVelhaComCallback)"



class Reader {

    constructor() {

        this.reader = util.promisify(fs.readFile)
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf-8")
        } catch (error) {
            return undefined
        }
    }
}

module.exports = Reader