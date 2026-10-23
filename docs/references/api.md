# Referência da API

O import default fornece um objeto com seis funções. Cada função aceita os mesmos argumentos posicionais e os mesmos tipos do construtor nativo correspondente. Os tipos são inferidos com `ConstructorParameters` do TypeScript instalado.

| Função | Construtor | Valor de retorno |
| --- | --- | --- |
| `number(locales?, options?)` | `Intl.NumberFormat` | Instância com `format`, `formatToParts` e demais propriedades nativas suportadas. |
| `date(locales?, options?)` | `Intl.DateTimeFormat` | Instância com `format`, `formatToParts`, `formatRange` quando disponível e propriedades nativas. |
| `plural(locales?, options?)` | `Intl.PluralRules` | Instância com `select`, `resolvedOptions` e outros métodos disponíveis. |
| `relative(locales?, options?)` | `Intl.RelativeTimeFormat` | Instância com `format` e `formatToParts`. |
| `list(locales?, options?)` | `Intl.ListFormat` | Instância com `format` e `formatToParts`. |
| `displayNames(locales?, options?)` | `Intl.DisplayNames` | Instância com `of` e `resolvedOptions`. |

Os métodos exatos dependem da API e do runtime. Consulte documentação MDN para detalhes atualizados de argumentos e comportamento nativo.

## Argumentos e exceções

`locales` e `options` são passados diretamente ao construtor correspondente. O pacote não normaliza os valores e não captura exceções: locales/valores inválidos produzem os erros nativos. O formato das strings e os dados localizados variam conforme a implementação e os dados ICU/CLDR do ambiente.

## Memoização

Cada export é um wrapper `micro-memoize` com `isKeyItemEqual: 'deep'`. Argumentos profundamente equivalentes podem localizar a mesma instância memorizada. A política interna de tamanho e ciclo de vida do cache é definida pela dependência e não é uma API configurável do pacote. Trate os formatadores retornados como instâncias compartilhadas e não altere estado interno de forma que afete outros consumidores.
