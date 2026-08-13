# Casos de Teste — app-gerador-de-senhas

Casos de teste manuais (dispositivo/emulador) e automáticos (Jest). Ambiente: Expo Go, Android/iOS/Web.

| ID    | Categoria | Passos                                                                                                       | Resultado esperado                                                                  | Automatizado |
|-------|-----------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|--------------|
| TC-001 | Geração   | Abrir Home; mover slider para o mínimo (8) e tocar em "Gerar senha"                                          | Senha com 8 caracteres exibida no modal                                              | Sim (Jest)   |
| TC-002 | Geração   | Mover slider para o máximo (34) e tocar em "Gerar senha"                                                     | Senha com 34 caracteres exibida no modal                                            | Sim (Jest)   |
| TC-003 | Geração   | Mover slider para um valor intermediário (ex.: 12) e gerar senha                                             | Senha com 12 caracteres exibida no modal                                            | Sim (Jest)   |
| TC-004 | Geração   | Gerar várias senhas e conferir os caracteres                                                                 | Senha contém apenas letras minúsculas, maiúsculas e números (sem símbolos/espaços)  | Sim (Jest)   |
| TC-005 | Modal     | Gerar senha; conferir o modal                                                                                | Modal "Senha Gerada" abre com a senha e botões "Voltar" e "Salvar Senha"            | Não          |
| TC-006 | Modal     | Gerar senha e tocar em "Voltar"                                                                              | Modal fecha; senha NÃO é salva (aba Senhas permanece como estava)                   | Não          |
| TC-007 | Copiar    | Gerar senha e tocar em "Salvar Senha"                                                                        | Senha copiada p/ área de transferência; alert "senha salva"; modal fecha            | Não          |
| TC-008 | Copiar    | Gerar senha e tocar na área escura da senha                                                                  | Senha copiada; salva em "@pass"; modal fecha                                       | Não          |
| TC-009 | Persistência | Salvar 2+ senhas e abrir a aba "Minhas Senhas"                                                             | Todas as senhas salvas aparecem na lista                                            | Sim (Jest)   |
| TC-010 | Persistência | Com senhas salvas, manter pressionado um item da lista                                                    | Item é removido da lista e do armazenamento                                         | Sim (Jest)   |
| TC-011 | Navegação | Alternar entre as abas Home e Minhas Senhas                                                                  | Navegação fluida; estado da lista recarrega ao voltar para Senhas                   | Não          |
| TC-012 | Regressão | Reiniciar o app após salvar senhas                                                                           | Senhas salvas continuam disponíveis (AsyncStorage)                                  | Não          |

## Convenção de IDs

- **TC-001 a TC-004**: cobertos por testes unitários (`src/utils/generatePassword.test.js`).
- **TC-009/TC-010**: cobertos por testes unitários do hook (`src/hooks/useStorage.test.js`).
- Demais: testes manuais recomendados antes de um release.
