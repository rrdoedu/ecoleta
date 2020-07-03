<h1 align="center"><img src=".github/ecoletaLogo.png"></h1>

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
    <img src=".github/webGif.gif" />
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


This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://reactjs.org/docs/introducing-jsx.html). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. If you're using React as a `<script>` tag, read [this section](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx) on integrating JSX; otherwise, the [recommended JavaScript toolchains](https://reactjs.org/docs/create-a-new-react-app.html) handle it automatically.

## Contributing

The main purpose of this repository is to continue to evolve React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://reactjs.org/contributing/how-to-contribute.html)

Read our [contributing guide](https://reactjs.org/contributing/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/react/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started.

### License

React is [MIT licensed](./LICENSE).