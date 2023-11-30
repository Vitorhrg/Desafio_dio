const heroi = "Chapolim"
let XP = 0
let porcoAranha = 1000

console.log("Bem vindo!")
console.log(heroi + " esta terra esta repleta de porcos aranha, mate todos para conseguir o poder da espada sagrada!!!!")

while (XP < 10001) {
console.log( Math.round(10001/XP) + " porcos aranha precisam ser abatidos")

    if (XP < 10001){
        console.log("Faltam " + Math.round((10001 - XP)/porcoAranha))
    }

XP += porcoAranha

switch (true) {
    case (XP < 1000):
    console.log("Nivel Ferro")
    break
    case (XP > 1001) && (XP < 2000) :
    console.log("Nivel Bronze")
    break
    case (XP > 2001) && (XP < 6000) :
    console.log("Nivel Prata")
    break
    case (XP > 6001) && (XP < 7000) :
    console.log("Nivel Ouro")
    break
    case (XP > 7001) && (XP < 8000) :
    console.log("Nivel Platina")
    break
    case (XP > 8001) && (XP < 9000) :
    console.log("Nivel Ascendente")
    break
    case (XP > 9001) && (XP < 10000) :
    console.log("Nivel Imortal")
    break
    case (XP > 10001):
    console.log("Nivel Radiante")
    break
}

}

console.log(heroi + " você concluiu com sucesso está jornada, nos vemos na próxima")
