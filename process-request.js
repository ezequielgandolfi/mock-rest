const casual = require('casual').pt_BR
const custom = require('./custom_data')

//#region Custom
casual.define('cpf', () => { return custom.CPF })
casual.define('cnpj', () => { return custom.CNPJ })
casual.define('cei', () => { return custom.CEI })
casual.define('cns', () => { return custom.CNS })
casual.define('pis', () => { return custom.PIS })
//#endregion

function findMethod(path,methods) {
  return methods.find(item => {
    if (path.match(item.path))
      return true
    return false
  })
}

function parseMethod(path,query,method,models) {
  let status = method.status || 200
  let model = models[method.model]
  if (method.type == 'array') {
    let page = query.page || 1
    let pageSize = query.pageSize || 20
    let total = method.total || 50
    let remaining = total - ((page - 1) * pageSize)
    let hasNext = (remaining > pageSize)
    let thisPage = (hasNext ? pageSize : remaining)
    let items = []
    for(let i=1; i<thisPage; i++)
      items.push(parseModel(model,models))
    return { status: status, body: { hasNext: hasNext, total: thisPage, items: items } }
  }
  else {
    return { status: status, body: parseModel(model,models) }
  }
}

function parseModel(model,models) {
  if (model) {
    let result = {}
    Object.keys(model).forEach(k => {
      result[k] = parseValue(model[k],models)
    })
    return result
  }
  return {}
}

function parseValue(value,models) {
  if (Array.isArray(value)) 
    return casual.random_element(value)

  let args = value.split(';')
  let method = args[0]
  args = args.splice(1)

  if ((method=='object')&&(args.length>0)) {
    let model = models[args[0]]
    if (model)
      return parseModel(model,models)
  }
  else if ((method=='array')&&(args.length>0)) {
    let model = models[args[0]]
    let length = casual.integer(1,9)
    if (args.length>1) {
      let iAux = Number(args[1])
      if (!isNaN(iAux))
        length = iAux
    }
    if (model) {
      let items = []
      for(let i=0;i<length;i++)
        items.push(parseModel(model,models))
      return items
    }
  }
  else if (casual[`_${method}`]) 
    return casual[`_${method}`].call(casual, ...args)
  else if (casual[method]) 
    return casual[method].call(casual, ...args)
  return null
}

module.exports = {
    get: (path,query,config) => {
      let response = { status: 404, body: null }
      let methods = (config.get || [])
      let models = (config.model || {})
      let method = findMethod(path,methods)
      if (method)
        response = parseMethod(path,query,method,models)
      return response
    }
  }