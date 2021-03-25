class Processor {

    static Process(data) {

        let rows = data.split('\n') // \r ou \n => quebra de linha
        let rowArray = []

        rows.forEach(row => {

            let arr = row.split(',')
            rowArray.push(arr)
        })
        
        return rowArray
    }
}

module.exports = Processor