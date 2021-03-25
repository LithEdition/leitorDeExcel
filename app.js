const Reader = require('./Reader')
const Processor = require('./Processor')
const Writer = require('./Writer')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWrite = require('./PDFWriter')

const leitor = new Reader()
const escritor = new Writer()


async function main() {

    const dados = await leitor.Read('./planilha.csv')
    const dadosProcessados = Processor.Process(dados)
    const user = new Table(dadosProcessados)

    const html = await HtmlParser.Parser(user)
    
    escritor.Writer(Date.now() + '.html', html)
    PDFWrite.WritePDF(Date.now() + '.PDF', html)
}

main()