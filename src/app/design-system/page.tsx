import type { Metadata } from "next";
import {
  Badge,
  Button,
  Callout,
  Input,
  MetricCard,
  SectionHeading,
} from "@/components/ui";
import { Icon } from "@/components/icon";
import tokens from "@/design-system/tokens.json";

export const metadata: Metadata = {
  title: "Terra · Design system do Equilíbrio",
};

export default function DesignSystemPage() {
  return (
    <main id="conteudo" className="page-content design-system-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">EQUILÍBRIO / TERRA / V1.0</p>
          <h1>
            O cuidado está nos detalhes<span>.</span>
          </h1>
          <p className="page-description">
            Uma linguagem visual acolhedora, consistente e feita para ler.
          </p>
        </div>
        <a
          href={tokens.figmaFile}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-secondary"
        >
          Abrir no Figma
          <Icon name="external" width="16" height="16" />
        </a>
      </div>
      <div className="ds-intro">
        <span className="ds-monogram">Aa</span>
        <div>
          <Badge>Terra · Design system</Badge>
          <h2>
            Clareza para a pesquisa.
            <br />
            Calma para a leitura.
          </h2>
          <p>
            Superfícies em bege, ações em marrom e sinais de estado discretos.
            Lora traz a voz editorial; DM Sans mantém os dados nítidos.
          </p>
        </div>
      </div>
      <section className="ds-section">
        <SectionHeading
          eyebrow="01 / CORES"
          title="Uma paleta que acolhe"
          description="Primitivos de cor e papéis semânticos compartilhados com o Figma."
        />
        <div className="swatch-grid">
          {Object.entries(tokens.primitives).map(([name, value]) => (
            <div key={name} className="swatch-card">
              <div style={{ backgroundColor: value }} />
              <strong>{name}</strong>
              <code>{value}</code>
            </div>
          ))}
        </div>
      </section>
      <section className="ds-section">
        <SectionHeading
          eyebrow="02 / TIPOGRAFIA"
          title="Duas vozes, a mesma intenção"
        />
        <div className="type-specimens">
          {Object.entries(tokens.typography).map(([name, t]) => (
            <div key={name} className="type-specimen">
              <code>
                {name}
                <span>
                  {t.family} · {t.size}/{t.lineHeight}
                </span>
              </code>
              <p
                style={{
                  fontFamily:
                    t.family === "Lora"
                      ? '"Lora Variable", Georgia, serif'
                      : '"DM Sans Variable", sans-serif',
                  fontSize: t.size,
                  lineHeight: `${t.lineHeight}px`,
                }}
              >
                Evidências que conectam.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="ds-section">
        <SectionHeading
          eyebrow="03 / COMPONENTES"
          title="O essencial, bem resolvido"
          description="Estados de hover, foco, seleção, erro e desabilitado fazem parte da linguagem."
        />
        <div className="component-demo">
          <h3>Ações</h3>
          <div className="demo-row">
            <Button>
              Continuar leitura
              <Icon name="arrow" width="16" height="16" />
            </Button>
            <Button variant="secondary">Ação secundária</Button>
            <Button variant="ghost">Ação discreta</Button>
            <Button disabled>Indisponível</Button>
          </div>
          <h3>Estados</h3>
          <div className="demo-row">
            <Badge>Registro original</Badge>
            <Badge tone="success">Coleta concluída</Badge>
            <Badge tone="warning">Conferência pendente</Badge>
            <Badge tone="error">Revisar informação</Badge>
          </div>
          <h3>Campos</h3>
          <div className="demo-fields">
            <label>
              Buscar referências
              <Input placeholder="Título, identificador ou motivo" />
            </label>
            <label>
              Campo com erro
              <Input
                placeholder="Informe um identificador"
                aria-invalid="true"
                aria-describedby="demo-input-error"
              />
              <small id="demo-input-error" className="error-text">
                Informe o identificador do registro.
              </small>
            </label>
            <label>
              Campo desabilitado
              <Input placeholder="Indisponível neste momento" disabled />
            </label>
          </div>
        </div>
        <div className="demo-metrics">
          <MetricCard
            label="Registros capturados"
            value="733"
            detail="PubMed, BVS e Google Scholar"
            icon="file"
            featured
          />
          <MetricCard
            label="Retidos provisoriamente"
            value="690"
            detail="Elegibilidade ainda em análise"
            icon="checkCircle"
          />
        </div>
        <Callout title="Sempre preserve o contexto.">
          <p>
            Uma pendência precisa de texto explicativo, além da cor. Contagens
            de registros não equivalem a estudos incluídos.
          </p>
        </Callout>
      </section>
      <section className="ds-section">
        <SectionHeading
          eyebrow="04 / GEOMETRIA"
          title="Ritmo e espaço para respirar"
        />
        <div className="geometry-grid">
          <div className="component-demo">
            <h3>Escala de espaçamento</h3>
            {Object.entries(tokens.spacing).map(([name, value]) => (
              <div key={name} className="spacing-sample">
                <code>space-{name}</code>
                <span style={{ width: value }} />
                <small>{value} px</small>
              </div>
            ))}
          </div>
          <div className="component-demo">
            <h3>Raios e superfícies</h3>
            <div className="radius-samples">
              {Object.entries(tokens.radius).map(([name, value]) => (
                <div key={name}>
                  <span style={{ borderRadius: value }} />
                  <code>{name}</code>
                  <small>{value === 999 ? "pill" : `${value} px`}</small>
                </div>
              ))}
            </div>
            <p className="muted">
              Bordas suaves e sombras leves deixam o conteúdo em primeiro plano.
            </p>
          </div>
        </div>
      </section>
      <section className="ds-section">
        <SectionHeading
          eyebrow="05 / ACESSIBILIDADE"
          title="Clareza também é inclusão"
        />
        <div className="accessibility-grid">
          {[
            {
              title: "Contraste",
              text: "Texto principal e secundário atendem ao contraste AA sobre suas superfícies.",
            },
            {
              title: "Navegação",
              text: "Foco visível, atalho para o conteúdo e navegação por teclado.",
            },
            {
              title: "Significado",
              text: "Estados combinam texto e cor. Ícones decorativos não interferem na leitura assistiva.",
            },
            {
              title: "Movimento",
              text: "Transições discretas respeitam a preferência de movimento reduzido.",
            },
          ].map((item) => (
            <article className="component-demo" key={item.title}>
              <Icon name="checkCircle" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
