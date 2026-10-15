const page = await figma.getNodeByIdAsync(STATE.pages.components);
await figma.setCurrentPageAsync(page);
if (page.children.length)
  throw new Error("Component page already populated; inspect before retry.");
// Adapted from createComponentWithVariants.js: Cartesian axes, combine, grid.
function createComponentWithVariants(name, combinations, width, height, build) {
  const components = combinations.map((combo) => {
    const c = track(figma.createComponent());
    c.name = Object.entries(combo)
      .map(([k, v]) => `${k}=${v}`)
      .join(", ");
    c.layoutMode = "HORIZONTAL";
    c.resize(width, height);
    c.primaryAxisAlignItems = "CENTER";
    c.counterAxisAlignItems = "CENTER";
    dimensions(c, 12, 8);
    radius(c, "md");
    build(c, combo);
    return c;
  });
  const set = track(figma.combineAsVariants(components, page));
  set.name = name;
  set.description = `Terra/${name}. Variáveis semânticas compartilhadas com src/design-system/tokens.json. Estados para navegação por teclado e leitura clara.`;
  const cols = 4;
  components.forEach((c, i) => {
    c.x = 24 + (i % cols) * (width + 20);
    c.y = 24 + Math.floor(i / cols) * (height + 20);
  });
  set.resize(
    cols * (width + 20) + 28,
    Math.ceil(components.length / cols) * (height + 20) + 28,
  );
  set.x = 1600;
  set.y = 100 + Object.keys(sets).length * 450;
  sets[name] = set;
  return { set, components };
}
const sets = {};
const main = {};
const properties = {};
const buttonCombos = ["Primary", "Secondary", "Ghost"].flatMap((Style) =>
  ["Default", "Hover", "Focus", "Disabled"].map((State) => ({ Style, State })),
);
const buttons = createComponentWithVariants(
  "Button",
  buttonCombos,
  180,
  44,
  (c, { Style, State }) => {
    fill(
      c,
      Style === "Primary"
        ? State === "Hover"
          ? "brand/hover"
          : "brand/default"
        : State === "Hover"
          ? "bg/selected"
          : Style === "Secondary"
            ? "bg/surface"
            : null,
    );
    if (Style === "Secondary") stroke(c, "border/strong");
    if (State === "Focus") {
      stroke(c, "brand/accent");
      c.strokeWeight = 3;
    }
    if (State === "Disabled") c.opacity = 0.45;
    text(
      c,
      "Continuar leitura",
      "label",
      Style === "Primary" ? "text/inverse" : "text/secondary",
    );
  },
);
const buttonLabel = buttons.set.addComponentProperty(
  "Label",
  "TEXT",
  "Continuar leitura",
);
for (const c of buttons.components)
  c.children[0].componentPropertyReferences = { characters: buttonLabel };
properties.Button = { Label: buttonLabel };
main.Button = buttons.components[0];
const badges = createComponentWithVariants(
  "Badge",
  ["Neutral", "Success", "Warning", "Error"].map((Tone) => ({ Tone })),
  160,
  28,
  (c, { Tone }) => {
    const tone = Tone.toLowerCase();
    fill(c, Tone === "Neutral" ? "bg/subtle" : `status/${tone}-bg`);
    radius(c, "full");
    text(
      c,
      {
        Neutral: "Registro original",
        Success: "Coletada",
        Warning: "Pendente",
        Error: "Revisar",
      }[Tone],
      "caption",
      Tone === "Neutral" ? "text/muted" : `status/${tone}-text`,
    );
  },
);
main.Badge = badges.components[0];
const badgeLabel = badges.set.addComponentProperty(
  "Label",
  "TEXT",
  "Registro original",
);
for (const c of badges.components)
  c.children[0].componentPropertyReferences = { characters: badgeLabel };
properties.Badge = { Label: badgeLabel };
const inputs = createComponentWithVariants(
  "Input",
  ["Default", "Focus", "Error", "Disabled"].map((State) => ({ State })),
  280,
  44,
  (c, { State }) => {
    fill(c, State === "Disabled" ? "bg/subtle" : "bg/surface");
    stroke(
      c,
      State === "Error"
        ? "status/error-text"
        : State === "Focus"
          ? "brand/accent"
          : "border/strong",
    );
    if (State === "Focus") c.strokeWeight = 3;
    if (State === "Disabled") c.opacity = 0.5;
    c.primaryAxisAlignItems = "MIN";
    text(c, "Título, identificador ou motivo", "caption", "text/muted");
  },
);
main.Input = inputs.components[0];
const inputLabel = inputs.set.addComponentProperty(
  "Label",
  "TEXT",
  "Título, identificador ou motivo",
);
for (const c of inputs.components)
  c.children[0].componentPropertyReferences = { characters: inputLabel };
properties.Input = { Label: inputLabel };
const nav = createComponentWithVariants(
  "NavItem",
  ["Default", "Active"].map((State) => ({ State })),
  208,
  46,
  (c, { State }) => {
    fill(c, State === "Active" ? "bg/selected" : null);
    c.primaryAxisAlignItems = "MIN";
    text(
      c,
      "Visão geral",
      "label",
      State === "Active" ? "brand/default" : "text/muted",
    );
  },
);
main.NavItem = nav.components[0];
const navLabel = nav.set.addComponentProperty("Label", "TEXT", "Visão geral");
for (const c of nav.components)
  c.children[0].componentPropertyReferences = { characters: navLabel };
properties.NavItem = { Label: navLabel };
function component(name, width, padding = 24, gap = 12, bg = "bg/surface") {
  const c = track(figma.createComponent());
  page.appendChild(c);
  c.name = name;
  c.layoutMode = "VERTICAL";
  c.resize(width, 100);
  c.layoutSizingVertical = "HUG";
  fill(c, bg);
  stroke(c);
  radius(c);
  dimensions(c, padding, gap);
  c.x = 1600;
  c.y = 100 + Object.keys(sets).length * 450;
  c.description = `Terra/${name} — src/components/ui.tsx`;
  main[name] = c;
  sets[name] = c;
  return c;
}
const metric = component("MetricCard", 240, 20, 8);
const ml = text(metric, "Registros capturados", "caption", "text/muted");
const mv = text(metric, "733", "display");
const md = text(
  metric,
  "PubMed, BVS e Google Scholar",
  "caption",
  "text/muted",
);
properties.MetricCard = {
  Label: bindTextProperty(metric, ml, "Label", "Registros capturados"),
  Value: bindTextProperty(metric, mv, "Value", "733"),
  Detail: bindTextProperty(
    metric,
    md,
    "Detail",
    "PubMed, BVS e Google Scholar",
  ),
};
const callout = component("Callout", 940, 20, 8, "bg/subtle");
const ct = text(
  callout,
  "Um registro em construção, com o contexto preservado.",
  "label",
);
const cb = text(
  callout,
  "As contagens são provisórias e não representam estudos incluídos. A triagem completa e a coleta da SciELO seguem pendentes.",
  "caption",
  "text/muted",
  900,
);
properties.Callout = {
  Title: bindTextProperty(callout, ct, "Title", ct.characters),
  Description: bindTextProperty(callout, cb, "Description", cb.characters),
};
const source = component("SourceCard", 220, 20, 12);
const sl = text(source, "PubMed", "title");
const sc = text(source, "19", "heading");
text(source, "registros capturados", "caption", "text/muted");
const sd = text(
  source,
  "Descritores MeSH e termos em título e resumo.",
  "caption",
  "text/muted",
  180,
);
const sa = text(source, "Ver estratégia →", "label", "brand/default");
properties.SourceCard = {
  Name: bindTextProperty(source, sl, "Name", "PubMed"),
  Count: bindTextProperty(source, sc, "Count", "19"),
  Detail: bindTextProperty(source, sd, "Detail", sd.characters),
  Action: bindTextProperty(source, sa, "Action", sa.characters),
};
const ref = component("ReferenceRow", 940, 20, 12);
ref.layoutMode = "HORIZONTAL";
const ri = text(ref, "PM019", "label", "text/primary", 70);
const rt = text(
  ref,
  "Investigation of the Effects of Dual-Task Balance Training on Gait and Balance in Transfemoral Amputees",
  "body",
  "brand/default",
  470,
);
const rs = text(ref, "Retido · PM019", "caption", "status/success-text", 115);
const rd = text(ref, "Leitura prioritária", "caption", "text/muted", 185);
properties.ReferenceRow = {
  ID: bindTextProperty(ref, ri, "ID", "PM019"),
  Title: bindTextProperty(ref, rt, "Title", rt.characters),
  Deduplication: bindTextProperty(ref, rs, "Deduplication", rs.characters),
  Decision: bindTextProperty(ref, rd, "Decision", rd.characters),
};
const heading = component("SectionHeading", 940, 0, 4);
heading.strokes = [];
const ht = text(heading, "Onde buscamos evidências", "heading");
const hd = text(
  heading,
  "Quatro fontes, estratégias adaptadas e um registro transparente.",
  "caption",
  "text/muted",
);
properties.SectionHeading = {
  Title: bindTextProperty(heading, ht, "Title", ht.characters),
  Description: bindTextProperty(heading, hd, "Description", hd.characters),
};
const sheet = auto(
  page,
  "Terra · Component showcase",
  "VERTICAL",
  1280,
  48,
  24,
  "bg/canvas",
);
sheet.x = 100;
sheet.y = 100;
text(sheet, "O essencial, bem resolvido.", "display");
text(
  sheet,
  "Componentes / Estados / Propriedades de texto / Tokens semânticos",
  "body",
  "text/muted",
);
for (const [label, group] of [
  ["Button", buttons.components],
  ["Badge", badges.components],
  ["Input", inputs.components],
  ["NavItem", nav.components],
]) {
  text(sheet, label, "title");
  for (let i = 0; i < group.length; i += 4) {
    const row = auto(sheet, `${label} states`, "HORIZONTAL", 0, 0, 16);
    for (const c of group.slice(i, i + 4)) instance(row, c);
  }
}
text(sheet, "Cards, mensagens e dados", "title");
const cards = auto(sheet, "Card examples", "HORIZONTAL", 0, 0, 16);
instance(cards, metric);
instance(cards, source);
instance(sheet, callout);
instance(sheet, heading);
instance(sheet, ref);
return {
  createdNodeIds,
  showcase: sheet.id,
  sets: Object.fromEntries(Object.entries(sets).map(([k, v]) => [k, v.id])),
  main: Object.fromEntries(Object.entries(main).map(([k, v]) => [k, v.id])),
  properties,
  variantCounts: {
    Button: buttons.components.length,
    Badge: badges.components.length,
    Input: inputs.components.length,
    NavItem: nav.components.length,
  },
  counts: { families: Object.keys(sets).length, nodes: createdNodeIds.length },
  bounds: { width: sheet.width, height: sheet.height },
  fonts: [
    ...new Set(
      sheet
        .findAllWithCriteria({ types: ["TEXT"] })
        .map((n) => n.fontName.family),
    ),
  ],
};
