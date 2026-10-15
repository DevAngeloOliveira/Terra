# Pesquisa de equilíbrio em amputados

Aplicação Next.js com App Router, React e TypeScript, migrada de `pesquisa_equilibrio_amputados.html`, com interface editorial em marrom e bege e design system Terra.

[Design system e modelos no Figma](https://www.figma.com/design/3rir6pPbp3xRWsjraTZyek) · [Documentação visual](design/README.md)

O conteúdo acadêmico, as 733 referências, as 43 ocorrências duplicadas confirmadas, os 690 registros retidos provisoriamente e a exportação do registro completo foram preservados. A aplicação apresenta o registro de busca de **15/10/2026**, com triagem ainda parcial; não executa novas buscas nas bases.

## Requisitos

- Node.js 20.9 ou superior (recomendado: Node.js 24 LTS).
- npm.

## Executar localmente

```sh
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Validar e executar em produção

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` utiliza o build de produção já gerado. Em uma instalação reproduzível com o arquivo de lock, use `npm ci`.

Para formatar o código, execute `npm run format`; para conferir a formatação, `npm run format:check`.

## Organização

| Rota             | Conteúdo                                                        |
| ---------------- | --------------------------------------------------------------- |
| `/`              | Visão geral, métricas, fontes e estudos de leitura prioritária  |
| `/relatorio`     | Conteúdo acadêmico completo, estratégias e critérios de triagem |
| `/referencias`   | Biblioteca de 733 ocorrências, busca, filtros e exportação      |
| `/design-system` | Paleta, tipografia, componentes e regras visuais                |
| `/api/registro`  | Download do registro completo em JSON                           |

```text
src/
  app/
    api/registro/route.ts         Download do registro completo em JSON
    globals.css                  Estilos responsivos e de impressão
    icon.svg                     Ícone da aplicação
    layout.tsx                   Idioma e metadados
    page.tsx                     Painel de visão geral
    referencias/page.tsx         Biblioteca interativa
    relatorio/page.tsx           Registro acadêmico completo
    design-system/page.tsx       Catálogo visual Terra
  components/
    app-shell.tsx                Navegação, menu mobile e estrutura comum
    ui.tsx                       Componentes reutilizáveis do design system
    icon.tsx                     Ícones SVG
    reference-registry.tsx       Busca e filtros de referências em React
    research-content.tsx         Conteúdo e tabelas do relatório original
    research-footer.tsx          Fontes e notas da coleta
  data/
    research-audit.json           Dados bibliográficos e trilha de deduplicação
  lib/
    research.ts                  Acesso aos dados e tipo das referências
  design-system/
    tokens.json                  Fonte dos tokens visuais
    tokens.css                   Variáveis CSS geradas
```

## Editar o projeto

- Altere o texto acadêmico em `src/components/research-content.tsx` e as notas em `src/components/research-footer.tsx`.
- Atualize os registros em `src/data/research-audit.json`. Ao mudar a coleta, revise também as contagens e os textos do relatório para manter a consistência.
- Ajuste o visual em `src/app/globals.css`.
- Para editar a paleta, os espaçamentos e a tipografia, altere `src/design-system/tokens.json` e execute `npm run tokens`.
- Os filtros de texto, base e duplicatas funcionam em conjunto. O download em `/api/registro` sempre contém o registro completo, independentemente dos filtros.
- O componente de referências é interativo; o restante do relatório é renderizado no servidor.

Os modelos, os mapeamentos locais de componentes e as evidências visuais ficam em `design/`. O Code Connect exige um plano Figma Organization ou Enterprise e não foi habilitado; a relação entre os componentes Figma e React está documentada em `design/component-map.json`.

Não é necessário configurar banco de dados, serviços externos ou variáveis de ambiente. O projeto consulta o conjunto de dados local e não salva alterações de triagem. Os links bibliográficos abrem as fontes externas.

O arquivo HTML original permanece na raiz para consulta histórica. A aplicação Next.js utiliza os arquivos de `src/`; editar o HTML não altera a aplicação.
