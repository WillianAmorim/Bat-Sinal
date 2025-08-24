# React Native Home & Cadastro

## Descrição

Este projeto é uma **aplicação móvel simples em React Native** que consiste em:

* Uma **tela inicial (Home)** com um botão para acessar o formulário de cadastro.
* Um **formulário de cadastro** contendo os campos:

  * Nome
  * Telefone
  * Localização
  * Observação
* Um **botão de enviar** que finaliza o cadastro.

O foco do projeto é demonstrar a criação de formulários simples, inputs controlados e navegação básica em React Native.

## Funcionalidades

* **Tela Home**

  * Botão que redireciona para o formulário de cadastro.

* **Formulário de Cadastro**

  * Inputs controlados para Nome, Telefone, Localização e Observação.
  * Botão de enviar que pode ser usado para processar os dados (ex.: console.log ou integração futura com backend).

## Tecnologias Utilizadas

* **React Native**
* **Expo** (para inicialização e execução do app)
* **useState** e **TextInput** para gerenciamento de estados e inputs.

## Estrutura do Projeto

```
/project-root
│
├── .expo/                  # Configurações do Expo
├── assets/                 # Imagens e recursos visuais
├── node_modules/           # Dependências do projeto
├── src/
│   ├── components/
│   │   └── Form/
│   │       ├── index.tsx   # Componente de formulário
│   │       └── style.tsx   # Estilos do formulário
│   ├── screens/
│   │   └── Home/
│   │       ├── index.tsx   # Tela Home
│   │       └── style.tsx   # Estilos da tela Home
│   └── services/           # Serviços (API, utilitários)
├── .gitignore              # Arquivos ignorados pelo Git
├── app.json                # Configuração do Expo
├── App.tsx                 # Arquivo principal do app
├── declarations.d.ts       # Declarações TypeScript
├── index.ts                # Entrada do projeto
├── package.json            # Dependências e scripts
├── package-lock.json       # Lock de dependências
├── tsconfig.json           # Configuração TypeScript
└── README.md               # Este arquivo

```

## Como Executar

1. **Instalar dependências**

```bash
npm install
# ou
yarn install
```

2. **Rodar o projeto no Expo**

```bash
npx expo start
```

3. **Abrir o app**

* No emulador Android/iOS ou dispositivo físico usando o aplicativo Expo Go.

## Observações

* O projeto é **básico**, focado em inputs, validação simples e navegação.
* Pode ser expandido futuramente para salvar os dados em **backend** ou banco local.
