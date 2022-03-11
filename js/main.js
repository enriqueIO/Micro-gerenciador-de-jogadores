import { Jogador } from "./jogador.js";
import { Time } from "./time.js";

const bruno = new Jogador("Bruno", "Zagueiro", 3);
const fernando = new Jogador("Fernando", "Goleiro", 1);

const paysandu = new Time("Paysandu");
paysandu.jogador = bruno;
paysandu.jogador = fernando;

console.log(paysandu.jogadores);