import fs from "fs";
import lib from "@joseiran/svguid-a3";

// String contendo SVG criado pela lib
let svgText = lib.getSVG("Amorim");

// Cria o arquivo SVG
fs.writeFileSync("Saida.svg", svgText.trim());

console.log("Arquivo SVG criado com sucesso: Saida.svg");
// Mostra o conteúdo do SVG no console
console.log(svgText);