let nome_heroi = "Jogador 1"
let XP = 6000
let rank = ""

switch (XP){
case XP < 1000:
        rank = "Ferro"
        break;
case XP >= 1001 && XP <= 2000:
        rank = "Bronze"
        break;
case XP >= 2001 && XP <= 5000:
        rank = "Prata"
        break;
case XP >= 5001 && XP <= 7000:
        rank = "Ouro"
        break;
case XP >= 7001 && XP <= 8000:
        rank = "Platina"
        break;
case XP >= 8001 && XP <= 9000:
        rank = "Ascendente"
        break;
case XP >= 9001 && XP <= 10000:
        rank = "Imortal"
        break;
case XP >= 10001:
        rank = "Radiante"
        break;
}

console.log(`O Herói de nome ${nome} está no nível de ${rank}`)