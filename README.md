<h1 align="center"><img src=".github/ecoletaLogo.png" width="250px" ></h1>

<div align="center">
  <p>
    <strong>Vamos criar métodos para aumentar as coletas seletivas no Brasil?</strong>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img src="https://img.shields.io/npm/v/react.svg?style=flat">
</div>

## Motivo

A coleta seletiva é um processo fundamental quando falamos em descartes de resíduos sólidos. Mas, para nossa supresa, as informações sobre onde encontrar pontos de coleta são bem escassas. Em vista disso, esse projeto experimental tem como objetivo unificar e disponibilizar, de uma maneira rápida e acessível, a localização, e dados referentes aos pontos de coleta em diversas cidades brasileiras.

## Exemplos

<h1 align="center">
    <img src=".github/webGif.gif" />
    <img src=".github/mobileGif.gif" />
</h1>

## Pré-requisitos

- Ter o [Node.js](https://nodejs.org/en/) instalado.

## Instalação

- Clone o repositório: `git clone https://github.com/rrdoedu/ecoleta.git`

- Entre em cada diretório (mobile, server, e web): `cd /mobile`, `cd /server`, `cd /web`

- Mude a baseURL no arquivo `src/services/api.ts` dos diretórios `/web` e `/mobile` para o IP da sua máquina

- Instale as dependências de cada diretório: `npm install`

- No diretório `/server`, execute os comandos:

```bash
$ npx knex:migrate

$ npx knex:seed

$ npm run dev
```
- No diretório `/web`, execute os comandos:

```bash
$ npm start
```

- No diretório `/mobile`, execute os comandos:
```bash
$ expo start
```

### Licença

Este projeto possui a licença [MIT](./LICENSE).