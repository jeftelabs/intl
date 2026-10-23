# Instruções para agentes — @jeftelabs/intl

Leia estas instruções antes de alterar o projeto. A implementação, os testes, o `package.json`, a configuração TypeScript e a documentação são as fontes de verdade.

## Escopo do pacote

`@jeftelabs/intl` oferece fábricas memorizadas para seis formatadores nativos da API `Intl`: `number`, `date`, `plural`, `relative`, `list` e `displayNames`. Cada fábrica encaminha os argumentos para o construtor nativo correspondente e usa `micro-memoize` com comparação profunda das chaves para reutilizar instâncias com os mesmos argumentos. O pacote não traduz conteúdo por conta própria nem inclui polyfills.

## Documentação obrigatória

É obrigatório criar ou atualizar documentação detalhada sempre que algo novo for criado ou qualquer parte do projeto for modificada. Isso inclui código, API, tipos, testes, configuração, dependências, scripts, benchmarks, CI, exemplos e documentos. Conclua a atualização na mesma tarefa.

- Explique propósito, fluxo, entradas, saídas, efeitos, limites e manutenção para pessoas e agentes de IA.
- Coloque a documentação do projeto em `docs/` e registre cada página em `docs/README.md`.
- Organize guias de uso, referências da API e ferramentas, arquitetura e planejamento/manutenção conforme o índice.
- Atualize o README para mudanças de instalação, API pública, compatibilidade ou exemplos.
- Confira cada afirmação e cada exemplo na implementação, nos testes e nos scripts atuais.

## Orientações antes de mudar o código

1. Leia `docs/README.md` e as páginas pertinentes antes de implementar.
2. Inspecione `index.ts`, `src/formatters.ts`, os testes, `package.json`, `tsconfig.json` e workflows relacionados.
3. Preserve os nomes, argumentos e retornos dos construtores nativos `Intl`.
4. Mantenha a comparação profunda de argumentos e considere opções, locales e comportamento de cache ao alterar a memoização.
5. Não prometa suporte a polyfills ou APIs além dos seis formatadores exportados.

## Comandos

Confira os scripts disponíveis em `package.json`. Os principais são `npm run lint`, `npm test`, `npm run quick:test`, `npm run typecheck`, `npm run build` e `npm run benchmark`. Os benchmarks são indicativos e variam por runtime e máquina.

## Convenções

- Mantenha ESM, os exports públicos e a compatibilidade TypeScript existentes.
- Não edite `build/` nem `coverage/` como fontes. São artefatos gerados.
- Use Conventional Commits quando criar commits.
- Preserve alterações preexistentes e nunca inclua credenciais.
