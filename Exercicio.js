let nome_heroi = "Jogador 1";
let XP = 6000;
let rank = "";

if (XP < 1000) {
        rank = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
        rank = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
        rank = "Prata";
} else if (XP >= 5001 && XP <= 7000) {
        rank = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
        rank = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
        rank = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
        rank = "Imortal";
} else if (XP >= 10001) {
        rank = "Radiante";
}

console.log(`O Herói de nome ${nome_heroi} está no nível de ${rank}`);