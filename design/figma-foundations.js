// Adapted from figma-generate-library/scripts/createVariableCollection.js
// and createSemanticTokens.js. TOKENS is supplied by the orchestration call.
const createdNodeIds = [];
const rgb = (hex) => ({
  r: parseInt(hex.slice(1, 3), 16) / 255,
  g: parseInt(hex.slice(3, 5), 16) / 255,
  b: parseInt(hex.slice(5, 7), 16) / 255,
});
const old = await figma.variables.getLocalVariableCollectionsAsync();
if (old.length)
  throw new Error(
    "Foundations already exist; inspect the state ledger before rerunning.",
  );
async function createVariableCollection(name, modeNames) {
  const collection = figma.variables.createVariableCollection(name);
  collection.renameMode(collection.modes[0].modeId, modeNames[0]);
  return {
    collection,
    modeIds: { [modeNames[0]]: collection.modes[0].modeId },
  };
}
async function createSemanticTokens(collection, modeIds, tokens) {
  const variables = {};
  for (const token of tokens) {
    const variable = figma.variables.createVariable(
      token.name,
      collection,
      token.type,
    );
    variable.setValueForMode(modeIds.Value, token.value);
    variable.scopes = token.scopes;
    variable.setVariableCodeSyntax("WEB", `var(--${token.css})`);
    variables[token.name] = variable;
  }
  return variables;
}
const primitiveCollection = await createVariableCollection(
  "Terra · Primitives",
  ["Value"],
);
const primitives = await createSemanticTokens(
  primitiveCollection.collection,
  primitiveCollection.modeIds,
  Object.entries(TOKENS.primitives).map(([name, value]) => ({
    name,
    type: "COLOR",
    value: rgb(value),
    scopes: [],
    css: `primitive-${name.replaceAll("/", "-")}`,
  })),
);
const semanticCollection = await createVariableCollection("Terra · Semantic", [
  "Value",
]);
const colors = await createSemanticTokens(
  semanticCollection.collection,
  semanticCollection.modeIds,
  Object.entries(TOKENS.colors).map(([name, value]) => ({
    name: `color/${name}`,
    type: "COLOR",
    value: { type: "VARIABLE_ALIAS", id: primitives[value].id },
    scopes: name.startsWith("text/")
      ? ["TEXT_FILL"]
      : name.startsWith("border/")
        ? ["STROKE_COLOR"]
        : ["FRAME_FILL", "SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"],
    css: `color-${name.replaceAll("/", "-")}`,
  })),
);
const dimensionCollection = await createVariableCollection(
  "Terra · Dimensions",
  ["Value"],
);
const dimensions = await createSemanticTokens(
  dimensionCollection.collection,
  dimensionCollection.modeIds,
  [
    ...Object.entries(TOKENS.spacing).map(([name, value]) => ({
      name: `space/${name}`,
      type: "FLOAT",
      value,
      scopes: ["GAP"],
      css: `space-${name}`,
    })),
    ...Object.entries(TOKENS.radius).map(([name, value]) => ({
      name: `radius/${name}`,
      type: "FLOAT",
      value,
      scopes: ["CORNER_RADIUS"],
      css: `radius-${name}`,
    })),
    ...Object.entries(TOKENS.typography).flatMap(([name, t]) => [
      {
        name: `type/${name}/size`,
        type: "FLOAT",
        value: t.size,
        scopes: ["FONT_SIZE"],
        css: `type-${name}-size`,
      },
      {
        name: `type/${name}/line`,
        type: "FLOAT",
        value: t.lineHeight,
        scopes: ["LINE_HEIGHT"],
        css: `type-${name}-line`,
      },
    ]),
  ],
);
await Promise.all(
  Object.values(TOKENS.typography).map((t) =>
    figma.loadFontAsync({ family: t.family, style: t.style }),
  ),
);
const styles = {};
for (const [name, t] of Object.entries(TOKENS.typography)) {
  const style = figma.createTextStyle();
  style.name = `Terra/${name}`;
  style.fontName = { family: t.family, style: t.style };
  style.fontSize = t.size;
  style.lineHeight = { unit: "PIXELS", value: t.lineHeight };
  styles[name] = style;
}
const effect = figma.createEffectStyle();
effect.name = "Terra/soft";
effect.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#30251F"), a: 0.045 },
    offset: { x: 0, y: 4 },
    radius: 20,
    spread: 0,
    visible: true,
    blendMode: "NORMAL",
  },
];
const page = await figma.getNodeByIdAsync("0:1");
await figma.setCurrentPageAsync(page);
page.name = "01 · Fundamentos";
const componentPage = figma.createPage();
componentPage.name = "02 · Componentes";
createdNodeIds.push(componentPage.id);
const screenPage = figma.createPage();
screenPage.name = "03 · Interfaces";
createdNodeIds.push(screenPage.id);
function paint(name) {
  return figma.variables.setBoundVariableForPaint(
    { type: "SOLID", color: rgb("#FFFFFF") },
    "color",
    colors[`color/${name}`],
  );
}
function text(parent, value, kind = "body", color = "text/primary") {
  const n = figma.createText();
  createdNodeIds.push(n.id);
  n.fontName = styles[kind].fontName;
  n.textStyleId = styles[kind].id;
  n.characters = value;
  n.fills = [paint(color)];
  parent.appendChild(n);
  return n;
}
function frame(
  parent,
  name,
  direction = "VERTICAL",
  gap = 24,
  padding = 0,
  bg = "bg/surface",
) {
  const n = figma.createAutoLayout(direction);
  createdNodeIds.push(n.id);
  n.name = name;
  parent.appendChild(n);
  n.itemSpacing = gap;
  n.fills = [paint(bg)];
  for (const prop of [
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
  ]) {
    n[prop] = padding;
    const v = dimensions[`space/${padding / 4}`];
    if (v) n.setBoundVariable(prop, v);
  }
  const v = Object.entries(TOKENS.spacing).find(([, value]) => value === gap);
  if (v) n.setBoundVariable("itemSpacing", dimensions[`space/${v[0]}`]);
  return n;
}
const sheet = frame(
  page,
  "Terra · Foundations",
  "VERTICAL",
  32,
  48,
  "bg/canvas",
);
sheet.x = 100;
sheet.y = 100;
sheet.resize(1120, 100);
sheet.layoutSizingVertical = "HUG";
text(sheet, "equilíbrio.", "display");
text(sheet, "TERRA / DESIGN SYSTEM / V1.0", "label", "text/muted");
text(sheet, "Uma base acolhedora para organizar evidências.", "heading");
text(
  sheet,
  "Pesquisa acadêmica com clareza, rigor e espaço para leitura.",
  "body",
  "text/muted",
);
text(sheet, "01 / Paleta e papéis semânticos", "title");
const swatches = frame(sheet, "Palette", "HORIZONTAL", 16, 0, "bg/canvas");
for (const name of [
  "bg/canvas",
  "bg/selected",
  "brand/accent",
  "brand/default",
  "text/primary",
]) {
  const item = frame(swatches, name, "VERTICAL", 12, 0, "bg/canvas");
  const swatch = figma.createRectangle();
  createdNodeIds.push(swatch.id);
  item.appendChild(swatch);
  swatch.resize(184, 96);
  swatch.cornerRadius = 10;
  swatch.setBoundVariable("cornerRadius", dimensions["radius/md"]);
  swatch.fills = [paint(name)];
  text(item, name, "caption");
  text(item, TOKENS.primitives[TOKENS.colors[name]], "caption", "text/muted");
}
text(sheet, "02 / Tipografia", "title");
for (const [kind, t] of Object.entries(TOKENS.typography))
  text(
    sheet,
    `${kind} / ${t.family} / ${t.size}px — Evidências que conectam.`,
    kind,
  );
text(sheet, "03 / Espaçamento e geometria", "title");
text(
  sheet,
  "Escala de 4 px: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64",
  "body",
);
text(
  sheet,
  "Raios: 6 · 10 · 16 · 24 · pill. Ícones: 18 ou 20 px. Alvos interativos: mínimo de 44 px.",
  "body",
);
text(sheet, "04 / Uso e acessibilidade", "title");
text(
  sheet,
  "Marrom para ações; bege para superfícies; verde sálvia para verificação; âmbar para pendências.",
  "body",
);
text(
  sheet,
  "Foco visível de 3 px. Estados nunca dependem apenas de cor. Texto principal com contraste AA.",
  "body",
);
text(
  sheet,
  "As contagens representam registros de busca; não equivalem a estudos incluídos.",
  "body",
);
return {
  createdNodeIds,
  mutatedNodeIds: [page.id],
  pages: {
    foundations: page.id,
    components: componentPage.id,
    screens: screenPage.id,
  },
  sheet: sheet.id,
  collections: [
    primitiveCollection.collection.id,
    semanticCollection.collection.id,
    dimensionCollection.collection.id,
  ],
  variables: Object.fromEntries(
    [
      ...Object.entries(primitives),
      ...Object.entries(colors),
      ...Object.entries(dimensions),
    ].map(([k, v]) => [k, v.id]),
  ),
  textStyles: Object.fromEntries(
    Object.entries(styles).map(([k, v]) => [k, v.id]),
  ),
  effectStyle: effect.id,
  counts: {
    primitives: Object.keys(primitives).length,
    semantic: Object.keys(colors).length,
    dimensions: Object.keys(dimensions).length,
    textStyles: Object.keys(styles).length,
  },
  bounds: { width: sheet.width, height: sheet.height },
};
