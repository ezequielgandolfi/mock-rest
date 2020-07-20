let jsonServer = require('json-server')
let path = require('path')
let fs = require('fs')
let processRequest = require('./process-request')

let server = jsonServer.create()
let middlewares = jsonServer.defaults()
let port = process.env.PORT || 9901
let folder = process.env.FOLDER || (path.join(__dirname,'rest'))

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/*', (req,res) => {
    let fileName = req.path.split('/').splice(1).join('/')
    let fileDetails = parseFileName(fileName)

    if (fileDetails) {
        let f = fs.readFileSync(fileDetails.fileName)
        let data = JSON.parse(f)
        let result = processRequest.get(fileDetails.relativePath,req.query,data)
        res.status(result.status).jsonp(result.body)
    }
    else 
        res.status(404).jsonp({ message: 'Config file not found' })
})

server.listen(port, () => {
    console.log(`Mock Server rodando na porta ${port}`);
})

function parseFileName(fName) {
    let fileArgs = fName.split('/')
    for(let iArg=0;iArg<fileArgs.length;iArg++) {
        let thisFile = fileArgs.slice(0, iArg+1).join('/')
        let fullName = path.join(folder, `${thisFile}.json`)
        if (fs.existsSync(fullName)) {
            let path = fileArgs.slice(iArg+1).join('/')
            return { fileName: fullName, relativePath: path }
        }
    }
    return null
}