# QA — app-gerador-de-senhas

Documentação de qualidade do aplicativo de geração e armazenamento de senhas (React Native + Expo).

## Estratégia de testes

- **Unitários (Jest + jest-expo)** — cobrem a lógica pura e o armazenamento:
  - `generatePassword`: tamanho da senha, limites do slider (8 e 34), conjunto de caracteres e determinismo.
  - `useStorage`: persistência em AsyncStorage (buscar, salvar, remover e JSON inválido).
- **Testes manuais** — validação em dispositivo/emulador (ver `TEST_CASES.md`).

## Cobertura atual

| Camada          | Arquivo(s)                              | Responsabilidade                          |
|-----------------|-----------------------------------------|-------------------------------------------|
| Util (lógica)   | `src/utils/generatePassword.js`         | Geração da senha a partir do charset      |
| Hook            | `src/hooks/useStorage.js`               | Leitura/gravação no AsyncStorage          |
| Testes          | `*.test.js` colocalizados junto ao código | Validação das regras acima                |

## Como rodar

```bash
cd gerador-senhas
npm install
npm test
```

## CI (GitHub Actions)

O workflow `.github/workflows/ci.yml` executa `npm ci` e `npm test` a cada push na `main` (e em PRs).

## O que não é coberto (gap consciente)

- Testes de UI/componentes (React Native Testing Library) e E2E não estão implementados.
- A geração usa `Math.random()`, que não é criptograficamente segura — para produção recomenda-se `expo-crypto`.
