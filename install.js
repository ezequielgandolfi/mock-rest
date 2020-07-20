let path = require('path')
let nodeService = require('node-windows').Service
let appService = new nodeService({
    name: 'TOTVS Mock Server',
    description: 'Serviço de mock de dados',
    script: path.join(__dirname,'index.js'),
    env: [
        { name: "PORT", value: 9901 }
    ]
})
appService.on('install', function () {
    console.log('Instalado na porta 9901');
    
    appService.start()
})
appService.install();
