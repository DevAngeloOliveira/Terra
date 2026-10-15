// Shared helpers for Figma Plugin API scripts; prepended by the orchestrator.
const createdNodeIds = [];
const variables = Object.fromEntries(
  await Promise.all(
    Object.entries(STATE.variables).map(async ([name, id]) => [
      name,
      await figma.variables.getVariableByIdAsync(id),
    ]),
  ),
);
const styles = Object.fromEntries(
  await Promise.all(
    Object.entries(STATE.textStyles).map(async ([name, id]) => [
      name,
      await figma.getStyleByIdAsync(id),
    ]),
  ),
);
await Promise.all(
  Object.values(TOKENS.typography).map((t) =>
    figma.loadFontAsync({ family: t.family, style: t.style }),
  ),
);
function track(n) {
  createdNodeIds.push(n.id);
  return n;
}
function paint(name) {
  return figma.variables.setBoundVariableForPaint(
    { type: "SOLID", color: { r: 1, g: 1, b: 1 } },
    "color",
    variables[`color/${name}`],
  );
}
function fill(n, name) {
  n.fills = name ? [paint(name)] : [];
}
function stroke(n, name = "border/default") {
  n.strokes = [paint(name)];
  n.strokeWeight = 1;
}
function radius(n, name = "lg") {
  n.cornerRadius = TOKENS.radius[name];
  n.setBoundVariable("cornerRadius", variables[`radius/${name}`]);
}
function dimensions(n, padding = 0, gap = 0) {
  const p = Object.entries(TOKENS.spacing).find(([, v]) => v === padding);
  const g = Object.entries(TOKENS.spacing).find(([, v]) => v === gap);
  for (const k of [
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
  ]) {
    n[k] = padding;
    if (p) n.setBoundVariable(k, variables[`space/${p[0]}`]);
  }
  n.itemSpacing = gap;
  if (g) n.setBoundVariable("itemSpacing", variables[`space/${g[0]}`]);
}
function auto(
  parent,
  name,
  dir = "VERTICAL",
  width = 0,
  padding = 0,
  gap = 0,
  bg,
) {
  const n = track(figma.createAutoLayout(dir));
  n.name = name;
  parent.appendChild(n);
  fill(n, bg);
  dimensions(n, padding, gap);
  if (width) {
    n.resize(width, 100);
    n.layoutSizingVertical = "HUG";
  }
  return n;
}
function text(parent, value, kind = "body", color = "text/primary", width = 0) {
  const n = track(figma.createText());
  n.name = kind;
  n.fontName = styles[kind].fontName;
  n.textStyleId = styles[kind].id;
  n.characters = value;
  fill(n, color);
  parent.appendChild(n);
  if (width) {
    n.textAutoResize = "HEIGHT";
    n.resize(width, n.height);
    n.layoutSizingHorizontal = "FIXED";
  }
  return n;
}
function instance(parent, component, props = {}) {
  const n = track(component.createInstance());
  parent.appendChild(n);
  if (Object.keys(props).length) n.setProperties(props);
  return n;
}
function bindTextProperty(component, node, name, value) {
  const key = component.addComponentProperty(name, "TEXT", value);
  node.componentPropertyReferences = { characters: key };
  return key;
}
