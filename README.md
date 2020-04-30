[![npm](https://img.shields.io/npm/v/react-native-template-avalon-advanced.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-avalon-advanced)
[![npm](https://img.shields.io/npm/dt/react-native-template-avalon-advanced.svg)](https://www.npmjs.com/package/react-native-template-avalon-advanced)
[![GitHub issues](https://img.shields.io/github/issues-raw/miguelmelo/react-native-template-avalon-advanced.svg)](https://github.com/MiguelMelo/react-native-template-avalon-advanced/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/miguelmelo/react-native-template-avalon-advanced.svg)](https://github.com/MiguelMelo/react-native-template-avalon-advanced/commits/master)
[![NPM](https://img.shields.io/npm/l/react-native-template-avalon-advanced.svg)](https://choosealicense.com/licenses/mit)

<br />
<p align="center">
  <h1 align="center" style="color: #FE5E2D">AVALON</h1>
  <h3 align="center" style="color: #3A444B">TEMPLATE AVANÇADO</h3>
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%c3%bado)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%c3%a7ando)
  - [Instalando](#instalando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Edição](#edi%c3%a7%c3%a3o)
- [Contribuição](#contribui%c3%a7%c3%a3o)
- [Licença](#licen%c3%a7a)
- [Contato](#contato)
- [Créditos](#cr%c3%a9ditos)

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
  - [Redux Saga](https://redux-saga.js.org/)
  - [Redux Sauce](https://github.com/jkeam/reduxsauce)
  - [React Redux](https://github.com/reduxjs/react-redux)
- [React Navigation](https://reactnavigation.org/)
  - [React Navigation Native](https://www.npmjs.com/package/@react-navigation/native)
  - [React Navigation Stack](https://www.npmjs.com/package/@react-navigation/stack)
  - [React Navigation Bottom Tabs](https://www.npmjs.com/package/@react-navigation/bottom-tabs)
  - [React Native Masked View](https://www.npmjs.com/package/@react-native-community/masked-view)
  - [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated)
  - [React Native Screens](https://github.com/software-mansion/react-native-screens)
  - [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
  - [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- [Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Lottie React Native](https://github.com/react-native-community/lottie-react-native)
- [Lottie Ios](https://github.com/airbnb/lottie-ios)
- [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)
- [Axios](https://github.com/axios/axios)
- [Prop Types](https://github.com/facebook/prop-types)
- [Reactotron](https://github.com/infinitered/reactotron)
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md)
  - [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
  - [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)
- [Babel](https://babeljs.io/)
  - [babel-eslint](https://github.com/babel/babel-eslint)
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native)[eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import)
- [Prettier](https://prettier.io/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [EditorConfig](https://editorconfig.org/)

## Começando

Para utilizar o template recomendo fazer uso da React Native CLI.

### Instalando

1. Basta criar um novo projeto utilizando o seguinte comando:

```sh
npx react-native init MyApp --template avalon-advanced
```

2. Após o término, remova o arquivo `App.js` da raiz, pois o `index.js` agora faz o trabalho na pasta **src**.

Agora temos o projeto criado, com todas as dependências e configurações que o template oferece.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
avalon-advanced
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── Oswald-Bold.ttf
│   │   │   └── Oswald-Light.ttf
│   │   │   └── Oswald-Regular.ttf
│   │   └── images/
│   │       └── lottiefiles/
│   │           └── dev.json
│   ├── components/
│   │   ├── atoms/
│   │   │   └── typograph/
│   │   │       └── index.js
│   │   ├── Button.js
│   │   └── CodeBox.js
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── navigations/
│   │   ├── app-navigator.js
│   │   └── index.js
│   ├── pages/
│   │   ├── Main/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Doc/
│   │       ├── utils/
│   │       │   └── libs.json
│   │       ├── index.js
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │   ├── ducks/
│   │   │   └── index.js
│   │   ├── sagas/
│   │   │   └── index.js
│   │   └── index.js
│   ├── styles/
│   │   ├── colors.js
│   │   ├── index.js
│   │   ├── mixins.js
│   │   ├── spacing.js
│   │   └── typography.js
│   └── index.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
├── react-native.config.js
└── README.md
```

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

Para testar o template de um caminho local, coloque o caminho absoluto junto com o prefixo `file://`

```
react-native init AwesomeContribution --template file:///Users/Dev/contributions/react-native-template-rocketseat-advanced
```

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Carlos Miguel - **miguel21.melo21@gmail.com**

## Créditos

Este template foi inspirado no template feito pela [Rocketseat💜](https://github.com/rocketseat)
