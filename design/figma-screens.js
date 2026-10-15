const page = await figma.getNodeByIdAsync(STATE.pages.screens);
await figma.setCurrentPageAsync(page);
if (page.children.length)
  throw new Error("Screens exist; inspect before retry.");
const main = Object.fromEntries(
  await Promise.all(
    Object.entries(COMPONENTS.main).map(async ([k, id]) => [
      k,
      await figma.getNodeByIdAsync(id),
    ]),
  ),
);
const props = (family, values) =>
  Object.fromEntries(
    Object.entries(values).map(([k, v]) => [
      COMPONENTS.properties[family][k],
      v,
    ]),
  );
function label(parent, value, size = 11, color = "text/muted") {
  const n = text(parent, value, "caption", color);
  n.fontSize = size;
  n.lineHeight = { unit: "PIXELS", value: Math.ceil(size * 1.6) };
  return n;
}
function icon(parent, name) {
  const svg = ICONS[name].replaceAll("currentColor", "#805A3B");
  const n = track(figma.createNodeFromSvg(svg));
  n.name = `Icon/${name}`;
  parent.appendChild(n);
  return n;
}
function pill(parent, value) {
  const n = instance(parent, main.Badge, props("Badge", { Label: value }));
  n.resize(170, 28);
  return n;
}
function shell(name, width, mobile = false, refs = false) {
  const screen = auto(page, name, "HORIZONTAL", width, 0, 0, "bg/canvas");
  screen.x = mobile ? 1700 : 100;
  screen.y = refs ? 2300 : 100;
  if (!mobile) {
    const sidebar = auto(
      screen,
      "Sidebar",
      "VERTICAL",
      244,
      24,
      24,
      "bg/subtle",
    );
    sidebar.resize(244, 1400);
    sidebar.layoutSizingVertical = "FIXED";
    const brand = auto(sidebar, "Brand", "HORIZONTAL", 0, 0, 8);
    const monogram = auto(
      brand,
      "Brand mark",
      "HORIZONTAL",
      36,
      0,
      0,
      "brand/default",
    );
    radius(monogram, "md");
    text(monogram, "e.", "heading", "text/inverse");
    text(brand, "equilíbrio.", "heading");
    label(sidebar, "ESPAÇO DE PESQUISA", 8);
    const work = auto(
      sidebar,
      "Workspace",
      "VERTICAL",
      196,
      12,
      4,
      "bg/canvas",
    );
    stroke(work, "border/strong");
    radius(work, "md");
    label(work, "Pesquisa acadêmica", 12, "text/primary");
    label(work, "Trabalho de conclusão de curso", 10);
    label(sidebar, "ESPAÇO DE TRABALHO", 9);
    for (const [i, title] of [
      "Visão geral",
      "Registro de busca",
      "Referências",
    ].entries()) {
      const row = auto(
        sidebar,
        `Navigation/${title}`,
        "HORIZONTAL",
        196,
        12,
        12,
        i === (refs ? 2 : 0) ? "bg/selected" : null,
      );
      radius(row, "md");
      icon(row, ["grid", "book", "layers"][i]);
      label(
        row,
        title,
        12,
        i === (refs ? 2 : 0) ? "brand/default" : "text/muted",
      );
    }
    label(sidebar, "FUNDAMENTOS", 9);
    const ds = auto(
      sidebar,
      "Navigation/Design system",
      "HORIZONTAL",
      196,
      12,
      12,
    );
    icon(ds, "palette");
    label(ds, "Design system", 12);
    const note = auto(sidebar, "Care note", "VERTICAL", 196, 12, 12);
    note.layoutGrow = 1;
    note.primaryAxisAlignItems = "MAX";
    text(note, "Ciência feita com cuidado.", "title", "text/primary", 172);
    label(note, "Organize as evidências.\nPreserve o contexto.", 11);
    label(note, "Registro de 15 out. 2026", 10);
  }
  const bodyWidth = mobile ? width : width - 244;
  const body = auto(
    screen,
    "Application body",
    "VERTICAL",
    bodyWidth,
    0,
    0,
    "bg/canvas",
  );
  const top = auto(body, "Topbar", "HORIZONTAL", bodyWidth, 0, 16, "bg/canvas");
  top.paddingLeft = mobile ? 20 : 40;
  top.paddingRight = mobile ? 20 : 40;
  top.resize(bodyWidth, 76);
  top.layoutSizingVertical = "FIXED";
  top.counterAxisAlignItems = "CENTER";
  label(
    top,
    mobile
      ? "☰   Visão geral"
      : `Pesquisa acadêmica     ›     ${refs ? "Referências" : "Visão geral"}`,
    11,
    "text/secondary",
  );
  const spacer = auto(top, "Flexible space", "HORIZONTAL", 1);
  spacer.layoutGrow = 1;
  label(
    top,
    mobile ? "15 out. 2026" : "Coleta parcial     |     15 out. 2026",
    10,
  );
  const padding = mobile ? 20 : 40;
  const content = auto(
    body,
    "Content",
    "VERTICAL",
    bodyWidth,
    padding,
    24,
    "bg/canvas",
  );
  return { screen, content, inner: bodyWidth - 2 * padding };
}
function metric(parent, labelValue, value, detail, width, featured = false) {
  const n = instance(
    parent,
    main.MetricCard,
    props("MetricCard", { Label: labelValue, Value: value, Detail: detail }),
  );
  n.resize(width, n.height);
  for (const t of n.findAllWithCriteria({ types: ["TEXT"] })) {
    t.textAutoResize = "HEIGHT";
    t.resize(width - 40, t.height);
  }
  if (featured) {
    fill(n, "brand/default");
    for (const t of n.findAllWithCriteria({ types: ["TEXT"] }))
      fill(t, "text/inverse");
  }
  return n;
}
function overview(width, mobile) {
  const { screen, content, inner } = shell(
    mobile ? "Overview · Mobile 390" : "Overview · Desktop 1440",
    width,
    mobile,
  );
  label(content, "CLAREZA EM CADA ETAPA", 10);
  const title = text(
    content,
    "Visão geral da pesquisa.",
    "display",
    "text/primary",
    inner,
  );
  if (mobile) {
    title.fontSize = 34;
    title.lineHeight = { unit: "PIXELS", value: 43 };
  }
  text(
    content,
    "Treinamento de equilíbrio em amputados\ntransfemorais unilaterais.",
    "body",
    "text/muted",
    inner,
  );
  if (mobile)
    instance(
      content,
      main.Button,
      props("Button", { Label: "Exportar registro" }),
    );
  pill(content, "Triagem em andamento");
  label(content, "15 out. 2019 — 15 out. 2026", 11);
  const metricData = [
    ["Registros capturados", "733", "PubMed, BVS e Google Scholar"],
    ["Retidos provisoriamente", "690", "Elegibilidade ainda em análise"],
    ["Duplicatas confirmadas", "43", "Ocorrências removidas do conjunto"],
    ["Fontes coletadas", "3 de 4", "SciELO com verificação pendente"],
  ];
  for (let i = 0; i < metricData.length; i += mobile ? 2 : 4) {
    const row = auto(content, "Metrics", "HORIZONTAL", inner, 0, 16);
    for (const [j, values] of metricData
      .slice(i, i + (mobile ? 2 : 4))
      .entries())
      metric(
        row,
        ...values,
        (inner - (mobile ? 16 : 48)) / (mobile ? 2 : 4),
        i === 0 && j === 0,
      );
  }
  const research = auto(
    content,
    "Research overview",
    mobile ? "VERTICAL" : "HORIZONTAL",
    inner,
    0,
    24,
  );
  const qw = mobile ? inner : Math.round((inner - 24) * 0.62);
  const question = auto(
    research,
    "Research question",
    "VERTICAL",
    qw,
    24,
    16,
    "bg/surface",
  );
  stroke(question);
  radius(question);
  label(question, "A PERGUNTA QUE NOS GUIA", 10);
  text(
    question,
    "Como o treinamento de equilíbrio pode transformar a reabilitação?",
    "heading",
    "text/primary",
    qw - 48,
  );
  text(
    question,
    "Quais são os efeitos no controle postural, na funcionalidade e no risco de quedas de indivíduos com amputação transfemoral unilateral?",
    "body",
    "text/muted",
    qw - 48,
  );
  label(
    question,
    "Controle postural  ·  Funcionalidade  ·  Risco de quedas",
    10,
  );
  label(question, "Conhecer o recorte da pesquisa →", 12, "brand/default");
  const nw = mobile ? inner : inner - qw - 24;
  const next = auto(
    research,
    "Next steps",
    "VERTICAL",
    nw,
    24,
    16,
    "bg/subtle",
  );
  stroke(next);
  radius(next);
  label(next, "NO HORIZONTE", 10);
  text(
    next,
    "O próximo passo\né a conferência.",
    "heading",
    "text/primary",
    nw - 48,
  );
  text(
    next,
    "A coleta avançou. Agora, cada referência precisa de uma leitura cuidadosa.",
    "body",
    "text/muted",
    nw - 48,
  );
  for (const value of [
    "○ Conferir as datas de 2019",
    "○ Concluir a triagem dos registros",
    "○ Obter e avaliar textos completos",
  ])
    text(next, value, "caption", "text/secondary", nw - 48);
  label(next, "Explorar registros →", 12, "brand/default");
  const heading = instance(content, main.SectionHeading);
  heading.resize(inner, heading.height);
  const sources = [
    ["PubMed", "19", "Descritores MeSH e termos em título e resumo."],
    ["BVS", "20", "Coleção completa, com filtro de 2019 a 2026."],
    [
      "Google Scholar",
      "694",
      "70 páginas acessíveis, por ordem de relevância.",
    ],
    ["SciELO", "—", "A interface não retornou uma lista verificável."],
  ];
  for (let i = 0; i < 4; i += mobile ? 2 : 4) {
    const row = auto(content, "Sources", "HORIZONTAL", inner, 0, 16);
    for (const [name, count, detail] of sources.slice(
      i,
      i + (mobile ? 2 : 4),
    )) {
      const n = instance(
        row,
        main.SourceCard,
        props("SourceCard", {
          Name: name,
          Count: count,
          Detail: detail,
          Action: name === "SciELO" ? "Ver pendência →" : "Ver estratégia →",
        }),
      );
      const w = (inner - (mobile ? 16 : 48)) / (mobile ? 2 : 4);
      n.resize(w, n.height);
      for (const t of n.findAllWithCriteria({ types: ["TEXT"] })) {
        if (t.name === "caption") {
          t.textAutoResize = "HEIGHT";
          t.resize(w - 40, t.height);
        }
      }
    }
  }
  const callout = instance(content, main.Callout);
  callout.resize(inner, callout.height);
  for (const t of callout.findAllWithCriteria({ types: ["TEXT"] })) {
    t.textAutoResize = "HEIGHT";
    t.resize(inner - 40, t.height);
  }
  text(content, "Um bom ponto de partida", "heading", "text/primary", inner);
  text(
    content,
    "Estudos próximos da pergunta, com leitura integral ainda necessária.",
    "caption",
    "text/muted",
    inner,
  );
  for (const value of [
    "2020  /  Demirdel e Erbahçeci  /  Treino com dupla tarefa",
    "2021  /  Suresh et al.  /  Treino pré-protético",
    "2025  /  Elfeky et al.  /  Vibração corporal",
  ])
    text(content, value, "caption", "text/secondary", inner);
  return screen;
}
const desktop = overview(1440, false);
const mobile = overview(390, true);
const reference = shell("References · Desktop 1440", 1440, false, true);
label(reference.content, "BIBLIOTECA DE EVIDÊNCIAS", 10);
text(reference.content, "Cada referência importa.", "display");
text(
  reference.content,
  "Explore as 733 ocorrências e acompanhe as decisões preliminares.",
  "body",
  "text/muted",
);
const tags = auto(
  reference.content,
  "Reference counts",
  "HORIZONTAL",
  reference.inner,
  0,
  16,
);
pill(tags, "733 ocorrências");
pill(tags, "690 retidos provisoriamente");
pill(tags, "43 duplicatas confirmadas");
const filters = auto(
  reference.content,
  "Reference filters",
  "HORIZONTAL",
  reference.inner,
  24,
  16,
  "bg/surface",
);
stroke(filters);
radius(filters);
instance(filters, main.Input);
instance(filters, main.Input, props("Input", { Label: "Todas as bases" }));
instance(
  filters,
  main.Input,
  props("Input", { Label: "Todas as ocorrências" }),
);
label(reference.content, "733 de 733 ocorrências exibidas", 12);
const records = RECORDS.filter((r) =>
  ["PM001", "PM013", "PM019", "GS022", "GS024"].includes(r.id),
);
for (const r of records) {
  const n = instance(
    reference.content,
    main.ReferenceRow,
    props("ReferenceRow", {
      ID: r.id,
      Title: r.title,
      Deduplication: `Retido · ${r.canonical_id}`,
      Decision: r.decision,
    }),
  );
  n.resize(reference.inner, n.height);
}
const screenNodes = [desktop, mobile, reference.screen];
return {
  createdNodeIds,
  screens: Object.fromEntries(
    screenNodes.map((n) => [
      n.name,
      { id: n.id, width: n.width, height: n.height },
    ]),
  ),
  counts: {
    nodes: createdNodeIds.length,
    instances: screenNodes.reduce(
      (sum, n) => sum + n.findAllWithCriteria({ types: ["INSTANCE"] }).length,
      0,
    ),
    imageNodes: 0,
  },
  fonts: [
    ...new Set(
      screenNodes.flatMap((n) =>
        n
          .findAllWithCriteria({ types: ["TEXT"] })
          .map((t) => t.fontName.family),
      ),
    ),
  ],
};
