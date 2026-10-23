# Guia de uso

## Instalação e importação

Instale pelo npm e importe o export default:

```sh
npm install @jeftelabs/intl
```

```ts
import formatters from '@jeftelabs/intl'
```

O pacote publica ESM. O ambiente precisa implementar nativamente o formatador usado; o projeto não carrega polyfills.

## Criar e reutilizar formatadores

Passe os locales e as opções aceitas pelo construtor `Intl` correspondente. Use a instância retornada para quantos valores forem necessários:

```ts
const money = formatters.number('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

money.format(25.9)
money.format(1300)
```

As opções variam conforme o construtor. A documentação MDN de cada API nativa é a referência para todos os valores permitidos.

## Escolher a fábrica

```ts
formatters.number('pt-BR').format(1234.5)
formatters.date('pt-BR', { dateStyle: 'short' }).format(new Date())
formatters.plural('pt-BR').select(2)
formatters.relative('pt-BR').format(1, 'day')
formatters.list('pt-BR').format(['um', 'dois'])
formatters.displayNames('pt-BR', { type: 'region' }).of('BR')
```

A fábrica `date` corresponde a `Intl.DateTimeFormat`; `relative`, a `Intl.RelativeTimeFormat`; `plural`, a `Intl.PluralRules`; `list`, a `Intl.ListFormat`; `displayNames`, a `Intl.DisplayNames`.

## Cache

As chamadas são memorizadas por seus argumentos com comparação profunda. Reutilize a mesma combinação de locales e opções ao longo do fluxo da aplicação para permitir o reaproveitamento. Evite tratar o cache como armazenamento persistente ou depender de detalhes internos de sua capacidade/evicção: esses parâmetros não são configurados pelo pacote.

## Tratamento de erros e compatibilidade

Locales e opções inválidos seguem as exceções e regras do construtor nativo usado. Confirme se o runtime de destino suporta o construtor e as opções necessários. O pacote não altera o resultado ou adiciona fallback.
