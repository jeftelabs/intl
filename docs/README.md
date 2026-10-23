# Documentação de @jeftelabs/intl

Esta documentação descreve a implementação atual do pacote e serve tanto a pessoas quanto a agentes de IA. O código e os testes são a fonte final de verdade; mantenha estas páginas atualizadas junto com qualquer mudança.

## Começar

- [Visão geral e arquitetura](./architecture/overview.md): propósito, estrutura do pacote e fluxo de criação/cache.
- [Guia de uso](./guides/usage.md): instalação, importação, fábricas, locales e opções.
- [Referência da API](./references/api.md): nomes, parâmetros, retornos e comportamento de cache.
- [Referência de desenvolvimento e ferramentas](./references/development.md): testes, lint, build, benchmarks e workflows.
- [Planejamento e manutenção](./planning/maintenance.md): regras para mudanças e manutenção da documentação.

## Mapa do código

| Caminho | Responsabilidade |
| --- | --- |
| `index.ts` | Exporta o módulo de formatadores como export default. |
| `src/formatters.ts` | Implementa as fábricas memorizadas em torno dos construtores nativos. |
| `tests/formatters.spec.ts` | Verifica os seis formatadores e diferencia opções. |
| `benchmarks/` | Compara instâncias reutilizadas e construção nativa por operação. |
| `bin/test.ts` | Configura e executa o runner de testes. |
| `package.json` | Define exports, scripts, dependências e configuração do bundle. |
| `tsconfig.json` | Estende a configuração TypeScript compartilhada e direciona saída para `build/`. |
| `.github/workflows/` | Configura verificações de commit e publicação. |

## Manutenção deste índice

Adicione aqui cada página nova de `docs/`, com uma breve explicação do seu escopo. Ao mudar comportamento público, atualize também o README e os testes relevantes.
