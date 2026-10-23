# Planejamento e manutenção

## Regra de documentação

Toda criação ou modificação do projeto exige criar ou atualizar documentação detalhada na mesma mudança. Isso inclui implementação, API, testes, dependências, configuração, build, benchmarks e automação. Registre páginas em `docs/README.md` e atualize o README para mudanças visíveis ao consumidor.

## Checklist para uma mudança

1. Leia instruções e páginas relacionadas em `docs/README.md`.
2. Identifique o comportamento atual no código, tipos e testes.
3. Faça a menor alteração coerente e adicione/ajuste testes para o comportamento alterado.
4. Atualize guia, referência, arquitetura ou manutenção de acordo com o impacto; não crie página órfã.
5. Atualize o README quando a instalação, API pública, compatibilidade ou exemplos mudarem.
6. Execute os comandos pertinentes de lint, testes, typecheck, build e benchmarks. Registre falhas ou limitações no resumo da mudança.
7. Revise links, exemplos, índice de documentação e `git diff`.

## Áreas para observar

- **Compatibilidade nativa:** novos construtores e opções precisam ser suportados pelo runtime e pela biblioteca de tipos alvo.
- **Memoização:** verifique se igualdade profunda e reutilização continuam válidas para locales/opções e se o ciclo de vida do cache é aceitável.
- **API pública:** mantenha nomes fáceis de associar ao construtor nativo e documente assinaturas e retornos.
- **Benchmark:** mantenha operações comparáveis e evite publicar números de uma máquina como garantias de desempenho.
- **Docs para agentes:** mantenha `AGENTS.md`, `CLAUDE.md` e o índice concisos e alinhados à implementação atual.

## Fora do escopo atual

O projeto não declara oferecer tradução de mensagens, carregamento de catálogos, polyfills, fallback de locale ou APIs além dos seis formatadores listados na referência. Não documente tais recursos como existentes sem implementação explícita.
