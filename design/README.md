# Terra — design system do Equilíbrio

[Abrir o arquivo editável no Figma](https://www.figma.com/design/3rir6pPbp3xRWsjraTZyek).

## Direção visual

Uma interface editorial para pesquisa acadêmica: papel e bege nas superfícies, marrom espresso para ações e hierarquia, verde sálvia para verificação e âmbar para pendências. Títulos usam **Lora**; controles e dados usam **DM Sans**. As fontes são servidas localmente pelo projeto.

## Entregas no Figma

| Página           | Conteúdo                                                             |
| ---------------- | -------------------------------------------------------------------- |
| 01 · Fundamentos | Paleta, tipografia, espaçamento, geometria e orientações de uso      |
| 02 · Componentes | Nove famílias, variantes, estados e propriedades editáveis           |
| 03 · Interfaces  | Visão geral desktop (1440 px), mobile (390 px) e referências desktop |

A biblioteca tem **63 variáveis**: 17 primitivas de cor, 19 cores semânticas com aliases, 10 espaçamentos, 5 raios e 12 medidas tipográficas. Há 6 estilos de texto e um estilo de sombra. Cada variável tem escopo explícito e sintaxe WEB correspondente ao CSS.

Os modelos usam texto, vetores, auto layout e instâncias de componentes. Não contêm capturas de tela como interface. Os PNGs em `previews/` são somente evidência de revisão.

## Componentes

| Família        | Variações ou propriedades                                   |
| -------------- | ----------------------------------------------------------- |
| Button         | Primary, Secondary, Ghost × Default, Hover, Focus, Disabled |
| Badge          | Neutral, Success, Warning, Error                            |
| Input          | Default, Focus, Error, Disabled                             |
| NavItem        | Default, Active                                             |
| MetricCard     | Label, Value, Detail                                        |
| Callout        | Title, Description                                          |
| SourceCard     | Name, Count, Detail, Action                                 |
| ReferenceRow   | ID, Title, Deduplication, Decision                          |
| SectionHeading | Title, Description                                          |

A implementação React está em `src/components/ui.tsx`. Os nomes e IDs estão em `component-map.json`.

**Code Connect:** a tentativa de cadastrar o mapeamento foi recusada pelo Figma porque o plano atual não é Organization ou Enterprise. Os componentes e os modelos editáveis foram criados normalmente. O mapa local documenta a relação com o código; não foi publicado como Code Connect.

## Tokens e manutenção

Edite `src/design-system/tokens.json` e execute:

```sh
npm run tokens
```

Isso atualiza `src/design-system/tokens.css`. O código utiliza os nomes semânticos; por exemplo, `color/brand/default` no Figma corresponde a `var(--color-brand-default)`.

As alterações no JSON não são sincronizadas automaticamente com o Figma. Os arquivos `figma-*.js` guardam os scripts de construção para o ambiente Figma Plugin API; não são scripts de terminal. As etapas posteriores ajustaram reflow e instâncias diretamente no arquivo; o estado final está em `figma-state.json` e `figma-verification.json`.

## Validação

- Build de produção, TypeScript e ESLint passaram.
- As quatro rotas foram verificadas em desktop e mobile, sem rolagem horizontal da página.
- A navegação mobile foi testada com abertura, fechamento, Esc e restauração de foco.
- Os 733 registros e o texto acadêmico foram comparados com o HTML original.
- Foram testados os filtros combinados, o estado vazio, a limpeza dos filtros e o download JSON com filtros ativos.
- As fontes locais carregaram corretamente e não houve erros no console.
- Sete pares semânticos de texto e fundo passaram no contraste AA, com razões de 5,41:1 a 14,16:1.

Veja `verification.json` para os resultados do navegador e `figma-verification.json` para as contagens e a estrutura do Figma.
