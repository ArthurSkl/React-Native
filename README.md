## gerador-senhas

Um aplicativo mobile de geração e armazenamento de senhas, desenvolvido em **React Native** com **Expo**.

---

## Conteúdo

1. [Descrição](#descrição)
2. [Funcionalidades](#funcionalidades)
3. [Pré-requisitos](#pré-requisitos)
4. [Instalação](#instalação)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Configuração (app.json)](#configuração-appjson)
7. [Dependências Principais](#dependências-principais)
8. [Arquitetura e Fluxo](#arquitetura-e-fluxo)
9. [Telas e Componentes](#telas-e-componentes)
   - [Home](#home)
   - [Passwords](#passwords)
   - [ModalPassword](#modalpassword)
   - [PasswordItem](#passworditem)
10. [Hooks](#hooks)
11. [Scripts Disponíveis](#scripts-disponíveis)
12. [Customização](#customização)
13. [Contribuição](#contribuição)
14. [Licença](#licença)

---

## Descrição

O **gerador-senhas** é um aplicativo que permite gerar senhas aleatórias de tamanho configurável, exibir em modal e salvá-las localmente usando AsyncStorage. Possui navegação em abas (Home e Senhas salvas).

## Funcionalidades

- Definir o tamanho da senha via slider.
- Gerar senha aleatória baseada em conjunto de caracteres.
- Exibir senha em modal customizado.
- Copiar senha para área de transferência e salvar.
- Listar senhas salvas em outra aba.
- Remover senha via pressionamento longo.

## Pré-requisitos

- Node.js (versão LTS recomendada).
- npm ou Yarn.
- Expo CLI (`npm install -g expo-cli`).

## Instalação

```bash
# Clone o repositório
git clone https://github.com/ArthurSkl/React-Native.git
cd React-Native/gerador-senhas

# Instale as dependências
npm install
# ou yarn install

# Inicie o projeto
npm run start
# ou yarn start
```

Abra no Expo Go ou emulador (Android/iOS).

## Estrutura do Projeto

```
gerador-senhas/
├── assets/                  # Ícones e imagens
│   ├── adaptive-icon.png    # Ícone adaptativo Android
│   ├── favicon.png          # Favicon web
│   ├── icon.png             # Ícone principal
│   ├── splash-icon.png      # Splash screen
│   └── components/          # Componentes de UI estáticos
│       └── modal password/
│           └── index.js     # Componente ModalPassword
├── src/
│   ├── assets/              # Logo e recursos usados no src
│   │   ├── logo.png         # Logo do app
│   │   └── components/
│   │       └── modal password/index.js
│   ├── hooks/
│   │   └── useStorage.js    # Hook de AsyncStorage
│   ├── pages/
│   │   ├── home/
│   │   │   └── index.js     # Tela Home
│   │   └── passwords/
│   │       ├── components/
│   │       │   └── passworditem.js
│   │       └── index.js     # Tela Passwords
│   └── routes.js            # Navegação bottom tabs
├── App.tsx                  # Entry point do React Navigation
├── index.ts                 # Registro do App com Expo
├── app.json                 # Configurações do Expo
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
└── .gitignore
```

## Configuração (app.json)

Define nome, slug, ícones e temas do projeto no Expo.

```json
{
  "expo": {
    "name": "gerador-senhas",
    "slug": "gerador-senhas",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    ...
  }
}
```

## Dependências Principais

- **expo**: Plataforma Expo para desenvolvimento.
- **react-native**: Biblioteca nativa.
- **@react-navigation/native** + **@react-navigation/bottom-tabs**: Navegação em abas.
- **expo-clipboard**: Acesso à área de transferência.
- **@react-native-async-storage/async-storage**: Armazenamento local.
- **@react-native-community/slider**: Slider para seleção de tamanho.
- **react-native-vector-icons**: Ícones no tab bar.

## Arquitetura e Fluxo

1. **App.tsx**: Envolve o componente `Routes` em `NavigationContainer` e `GestureHandlerRootView`.
2. **routes.js**: Define duas abas: Home e Passwords, cada uma com ícone personalizado.
3. **Home**: Gera senha e abre o modal.
4. **ModalPassword**: Exibe senha, copia para clipboard e salva usando `useStorage`.
5. **Passwords**: Lista senhas salvas e permite remover via long press.

## Telas e Componentes

### Home

- **Slider**: Define o número de caracteres (mínimo 8, máximo 34).
- **Botão Gerar**: Chama `generatePassword` para criar senha aleatória.
- **Modal**: Mostra `ModalPassword` com a senha gerada.

### Passwords

- Exibe lista de senhas salvas usando `useStorage.getItem('@pass')`.
- **PasswordItem**: Componente que exibe a senha e permite remover.

### ModalPassword

- **Props**: `password` e `handleClose`.
- **Pressable**: Ao tocar na senha, copia e salva.
- **Botões**: Voltar e Salvar Senha.

### PasswordItem

- Exibe `data` (senha) e chama `removePassword` em pressão longa.

## Hooks

### useStorage

Wrapper para AsyncStorage com funções:

- **getItem(key)**: Busca e retorna array de itens.
- **saveItem(key, value)**: Adiciona valor e persiste.
- **removeItem(key, item)**: Filtra e persiste itens restantes.



