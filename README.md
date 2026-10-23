# @jeftelabs/intl

[![npm version](https://img.shields.io/npm/v/@jeftelabs/intl?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@jeftelabs/intl)
[![license](https://img.shields.io/npm/l/@jeftelabs/intl?style=for-the-badge)](./LICENSE)

Fábricas memorizadas para os formatadores nativos da [API `Intl`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl) do JavaScript. O pacote reutiliza instâncias criadas com os mesmos locales e opções, evitando construir um formatador a cada uso.

## Instalação

```sh
npm install @jeftelabs/intl
```

O pacote é ESM e requer um runtime com suporte às APIs nativas utilizadas. Não inclui polyfills.

## Uso

```ts
import formatters from '@jeftelabs/intl'

const price = formatters.number('en-IN', {
  style: 'currency',
  currency: 'INR',
})

console.log(price.format(1234.5))
```

As fábricas aceitam os mesmos argumentos dos construtores nativos correspondentes e devolvem suas instâncias, com os métodos nativos disponíveis:

```ts
formatters.date('pt-BR', { dateStyle: 'long' }).format(new Date())
formatters.plural('pt-BR', { type: 'ordinal' }).select(2)
formatters.relative('pt-BR').format(-1, 'day')
formatters.list('pt-BR', { type: 'conjunction' }).format(['maçã', 'pera'])
formatters.displayNames('pt-BR', { type: 'region' }).of('BR')
```

## Formatadores disponíveis

| Fábrica | Construtor nativo | Exemplo de método |
| --- | --- | --- |
| `formatters.number(locales?, options?)` | `Intl.NumberFormat` | `format(value)` |
| `formatters.date(locales?, options?)` | `Intl.DateTimeFormat` | `format(date)` |
| `formatters.plural(locales?, options?)` | `Intl.PluralRules` | `select(value)` |
| `formatters.relative(locales?, options?)` | `Intl.RelativeTimeFormat` | `format(value, unit)` |
| `formatters.list(locales?, options?)` | `Intl.ListFormat` | `format(items)` |
| `formatters.displayNames(locales?, options?)` | `Intl.DisplayNames` | `of(code)` |

Os tipos e as opções seguem a versão da API `Intl` suportada pelo TypeScript e pelo runtime usado. Consulte a documentação do JavaScript para opções, locales e métodos completos.

## Cache e comportamento

Cada fábrica memoriza chamadas com comparação profunda de argumentos. Chamadas com valores equivalentes de `locales` e `options` podem reutilizar a mesma instância; chamadas com configurações diferentes criam/reutilizam a instância correspondente. Os métodos e resultados de formatação são os da implementação nativa do runtime. A aplicação deve escolher e reutilizar configurações estáveis para aproveitar o cache.

## Desenvolvimento

```sh
npm install
npm test
npm run typecheck
npm run build
```

`npm test` executa o lint por meio do lifecycle `pretest` e depois os testes com relatório de cobertura. `npm run quick:test` executa os testes sem cobertura. Consulte `npm run benchmark` para comparar as fábricas com a criação direta dos formatadores; resultados variam entre runtimes e máquinas.

## Documentação

A documentação para pessoas e agentes de IA está em [`docs/README.md`](./docs/README.md), com guias, referências da API e arquitetura, ferramentas e planejamento de manutenção.
