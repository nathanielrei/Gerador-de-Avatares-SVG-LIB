# 🧩 Gerador de Avatares SVG — Projeto A3 de Computação Gráfica

Este projeto é uma **biblioteca para gerar ícones de perfil SVG** de forma pseudo-aleatória a partir de um texto fornecido pelo usuário.  
O avatar é construído combinando diferentes partes visuais e variações estéticas, garantindo que cada entrada gere um resultado único.

## 🎨 O que o avatar pode variar?

Os avatares são montados combinando componentes SVG, podendo mudar entre:

- 🎨 **Cor do corpo**  
- 💇 **Cabelo**  
- 👒 **Chapéu**  
- 👓 **Óculos**  
- 👨‍🦰 **Bigode**

Cada item é selecionado com base em um hash ligado ao texto de entrada, garantindo **consistência** (a mesma palavra sempre gera o mesmo avatar).

---

## 📦 Instalação

Primeiro, inicialize seu projeto:

```sh
npm init -y
```
Depois instale a lib normalmente:

```sh
npm install
npm install @joseiran/svguid-a3
```

## 🚀 Como usar
O exemplo abaixo gera um arquivo SVG baseado no texto enviado ao gerador:
~~~js
import fs from "fs";
import lib from "@joseiran/svguid-a3";

// Gera o SVG usando um texto como entrada
let svgText = lib.getSVG("Amorin");

// Cria o arquivo SVG no diretório atual
fs.writeFileSync("Saida.svg", svgText.trim());

console.log("Arquivo SVG criado com sucesso: Saida.svg");
console.log(svgText);
~~~

Isso criará um avatar como um arquivo Saida.svg e no console.


## 📚 Sobre o projeto

Este gerador foi desenvolvido como parte da A3 da disciplina de Computação Gráfica (UAG), utilizando conceitos de composição de imagens vetoriais e geração pseudo-aleatória baseada em strings.

## integrantes:

Nathan Ferreira dos Reis RA: 822156739 <br>