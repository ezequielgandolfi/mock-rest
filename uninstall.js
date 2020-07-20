let path = require('path')
let nodeService = require('node-windows').Service
let appService = new nodeService({
    name: 'TOTVS Mock Server',
    description: 'Serviço de mock de dados',
    script: path.join(__dirname,'index.js')
})
appService.on('uninstall', function () {
    console.log('Uninstall complete.')
})
appService.uninstall()