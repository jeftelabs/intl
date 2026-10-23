# Visão geral e arquitetura

## Propósito

`@jeftelabs/intl` oferece um ponto de entrada leve para reutilizar instâncias de seis formatadores nativos da API internacionalização do JavaScript. Ele evita que o consumidor repita a criação do mesmo formatador em caminhos quentes de execução. A formatação, negociação de locale e disponibilidade de dados permanecem sob responsabilidade do runtime.

## Fluxo

1. O consumidor importa o export default de `index.ts`.
2. O módulo público encaminha para `src/formatters.ts`.
3. Uma das funções `number`, `date`, `plural`, `relative`, `list` ou `displayNames` recebe os argumentos do construtor nativo.
4. `micro-memoize` procura uma chamada equivalente usando comparação profunda (`isKeyItemEqual: 'deep'`).
5. Em caso de acerto, a instância é reutilizada; em caso de falta, o callback executa o construtor nativo correspondente e o resultado é memorizado.
6. O objeto nativo retornado oferece os métodos próprios do formatador.

## Limites e decisões

- Não fornece API própria de tradução de mensagens ou de carregamento de catálogos.
- Não instala nem incorpora polyfills; requer suporte nativo do ambiente para o construtor escolhido.
- As funções encaminham argumentos e erros ao comportamento nativo, sem conversão de entrada ou saída.
- O cache depende dos argumentos recebidos e da semântica de comparação profunda da dependência. Alterações nessa política afetam reutilização, retenção de memória e compatibilidade.
- A disponibilidade de locales e dados pode variar conforme runtime e ambiente.

## Estrutura de módulos

`index.ts` exporta `src/formatters.ts` como export default. O módulo de implementação declara cada fábrica separadamente com tipos inferidos dos construtores globais `Intl`. O pacote publica o bundle ESM e declarações geradas no diretório `build/` de acordo com o `package.json`.

## Manutenção

Quando introduzir ou retirar um formatador, atualize implementação, testes, exemplos do README, esta visão geral, referência de API e mapa em `docs/README.md`. Confira compatibilidade do TypeScript e dos runtimes suportados antes de afirmar disponibilidade.
