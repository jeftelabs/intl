# Orientações para Claude e agentes de IA

As instruções canônicas estão em [AGENTS.md](./AGENTS.md). Consulte também o índice [docs/README.md](./docs/README.md) e as referências ligadas por ele. O projeto é `@jeftelabs/intl`, um pacote ESM que memoriza instâncias dos formatadores nativos de `Intl`.

## Documentação obrigatória

É extremamente obrigatório criar ou atualizar documentação detalhada sempre que criar algo ou modificar qualquer parte do projeto. Isso vale para código, API, tipos, testes, configuração, dependências, scripts, benchmarks, workflows, exemplos e documentos. Faça a atualização na mesma tarefa.

- Documente propósito, fluxo, entradas, saídas, efeitos, limites e manutenção para pessoas e IAs.
- Mantenha documentos em `docs/`, organizados por guias, referências, arquitetura e planejamento.
- Registre toda página nova no índice `docs/README.md`.
- Atualize o README quando instalação, API, compatibilidade ou exemplos mudarem.
- Confirme afirmações e exemplos na implementação e nos testes.

## Mapa inicial do projeto

- `index.ts`: exporta o módulo público de formatadores.
- `src/formatters.ts`: cria as seis fábricas memorizadas sobre a API `Intl` nativa.
- `tests/formatters.spec.ts`: verifica formatação, seleção plural e opções diferentes.
- `benchmarks/`: compara o uso das fábricas com a criação direta de formatadores nativos.
- `bin/test.ts`: configura e inicia o runner de testes.
- `package.json` e `tsconfig.json`: definem scripts, dependências, build e tipos.
- `.github/workflows/`: configura validação, release e publicação.

Antes de alterar algo, leia as páginas de documentação relevantes e confirme as interfaces no código. Não presuma suporte a polyfills nem a formatadores que não estejam exportados. Siga os scripts reais do `package.json` e mantenha a documentação sincronizada.
