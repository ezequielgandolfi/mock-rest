const casual = require('casual').pt_BR

function randomDigit() {
    return Math.round(Math.random() * 9)
}

function mod(dividendo, divisor) {
    return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor))
}

function cpf(mask) {
    let n1 = randomDigit()
    let n2 = randomDigit()
    let n3 = randomDigit()
    let n4 = randomDigit()
    let n5 = randomDigit()
    let n6 = randomDigit()
    let n7 = randomDigit()
    let n8 = randomDigit()
    let n9 = randomDigit()
    let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10
    d1 = 11 - (mod(d1, 11))
    if (d1 >= 10) d1 = 0
    let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11
    d2 = 11 - (mod(d2, 11))
    if (d2 >= 10) d2 = 0

    if (mask)
        return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2
    else
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2
}

function cnpj(mask) {
    let n1 = randomDigit()
    let n2 = randomDigit()
    let n3 = randomDigit()
    let n4 = randomDigit()
    let n5 = randomDigit()
    let n6 = randomDigit()
    let n7 = randomDigit()
    let n8 = randomDigit()
    let n9 = 0
    let n10 = 0
    let n11 = 0	
    let n12 = 1		
    let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5
    d1 = 11 - (mod(d1, 11))
    if (d1 >= 10) d1 = 0
    let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6
    d2 = 11 - (mod(d2, 11))
    if (d2 >= 10) d2 = 0

    if (mask)
        return '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + d1 + d2
    else
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2
}

function cei(mask) {
    let n1 = 2 // deve ser diferente de 0
    let n2 = randomDigit()
    let n3 = randomDigit()
    let n4 = randomDigit()
    let n5 = randomDigit()
    let n6 = randomDigit()
    let n7 = randomDigit()
    let n8 = randomDigit()
    let n9 = randomDigit()
    let n10 = randomDigit()
    let n11 = 8 // atividade 

    let aux1 = n1 * 7 + n2 * 4 + n3 * 1 + n4 * 8 + n5 * 5 + n6 * 2 + n7 * 1 + n8 * 6 + n9 * 3 + n10 * 7 + n11 * 4
    let aux2 = aux1 + ''
    let aux3 = parseInt(aux1)
    let d1 = parseInt((10 - (aux3 % 10 + parseInt(aux3 / 10)) % 10) % 10)
    d1 = Math.abs(d1)

    if (mask)
        return '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + n9 + n10 + '/' + n11 + d1
    else
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + d1
}

function cns() {
    let n1 = 7
    let n2 = randomDigit()
    let n3 = randomDigit()
    let n4 = randomDigit()
    let n5 = randomDigit()
    let n6 = randomDigit()
    let n7 = randomDigit()
    let n8 = randomDigit()
    let n9 = randomDigit()
    let n10 = randomDigit()
    let n11 = randomDigit()
    let n12 = randomDigit()
    let n13 = randomDigit()
    let n14 = randomDigit()
    let d1 = n14 * 2 + n13 * 3 + n12 * 4 + n11 * 5 + n10 * 6 + n9 * 7 + n8 * 8 + n7 * 9 + n6 * 10 + n5 * 11 + n4 * 12 + n3 * 13 + n2 * 14 + n1 * 15
    d1 = 11 - (mod(d1, 11))
    if (d1 >= 10) d1 = 0

    return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + n13 + n14 + d1
}

function pis(mask) {
    let n1 = randomDigit()
    let n2 = randomDigit()
    let n3 = randomDigit()
    let n4 = randomDigit()
    let n5 = randomDigit()
    let n6 = randomDigit()
    let n7 = randomDigit()
    let n8 = randomDigit()
    let n9 = randomDigit()
    let n10 = randomDigit()

    let d1 = n1 * 3 + n2 * 2 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + n10 * 2
    d1 = 11 - (mod(d1, 11))
    if (d1 >= 10) d1 = 0

    if (mask)
        return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + n7 + n8 + '.' + n9 + n10 + '-' + d1
    else
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + d1
}



module.exports = {
    get CPF() { return cpf() },
    get CNPJ() { return cnpj() },
    get CEI() { return cei() },
    get CNS() { return cns() },
    get PIS() { return pis() }
}