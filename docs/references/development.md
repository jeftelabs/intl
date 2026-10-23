# Desenvolvimento e ferramentas

## Pré-requisitos e instalação

O projeto é ESM em TypeScript e usa APIs `Intl` nativas. Instale dependências de desenvolvimento e execução com `npm install` (CI usa `npm ci`). A versão efetiva do Node e dependências deve ser conferida no workflow e no `package.json`.

## Scripts npm

| Script | O que faz |
| --- | --- |
| `npm run lint` | Executa ESLint. |
| `npm test` | Executa o lifecycle `pretest` (lint) e os testes via `c8`. |
| `npm run quick:test` | Executa `bin/test.ts` pelo loader `@jeftelabs/exec`, sem cobertura. |
| `npm run typecheck` | Executa `tsc --noEmit`. |
| `npm run build` | Executa lint, limpa `build/`, gera bundle ESM e declarações. |
| `npm run benchmark` | Executa os seis benchmarks em sequência. |
| `npm run clean` | Remove `build/`. |
| `npm run format` | Aplica Prettier ao repositório. Revise o diff após executar. |

## Testes

Os casos em `tests/formatters.spec.ts` verificam os seis formatadores, saídas nativas para os exemplos e diferenciação entre configurações. `bin/test.ts` seleciona `tests/**/*.spec.ts` e ativa as asserções do runner. Um teste de data usa as regras e o fuso do ambiente, então considere isso ao mudar expectativas.

## Build e publicação

`tsdown` gera ESM em `build/`; `tsc` emite declarações. `package.json` aponta o export público para `build/index.js` e publica o diretório `build`. Workflows em `.github/workflows/` validam commits e conduzem release/publicação. Confirme os workflows atuais antes de alterar procedimentos de publicação.

## Benchmarks

Cada arquivo em `benchmarks/` compara chamadas repetidas da fábrica com construção nativa direta. `npm run benchmark` executa-os de forma síncrona. Medições dependem de runtime, hardware, carga e otimizações; use-as como comparação local e não como promessa universal de ganho.
