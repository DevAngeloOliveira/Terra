import Link from "next/link";
import { Icon } from "@/components/icon";
import {
  Badge,
  Callout,
  MetricCard,
  SectionHeading,
  SourceCard,
} from "@/components/ui";
import { researchAudit } from "@/lib/research";

export default function HomePage() {
  return (
    <main id="conteudo" className="page-content overview">
      <div className="page-heading">
        <div>
          <p className="eyebrow">CLAREZA EM CADA ETAPA</p>
          <h1>
            Visão geral da pesquisa<span>.</span>
          </h1>
          <p className="page-description">
            Treinamento de equilíbrio em amputados
            <br className="desktop-break" /> transfemorais unilaterais.
          </p>
        </div>
        <a
          className="button button-secondary"
          href="/api/registro"
          download="registro_pesquisa_tcc.json"
        >
          <Icon name="download" width="17" height="17" />
          Exportar registro
        </a>
      </div>
      <div className="research-meta">
        <Badge tone="warning">Triagem em andamento</Badge>
        <span className="meta-dot">·</span>
        <span>
          <Icon name="calendar" width="15" height="15" />
          15 out. 2019 — 15 out. 2026
        </span>
        <span className="meta-dot">·</span>
        <span>Registro de busca · TCC</span>
      </div>
      <div className="metrics-grid">
        <MetricCard
          label="Registros capturados"
          value={researchAudit.raw_captured}
          detail="PubMed, BVS e Google Scholar"
          icon="file"
          featured
        />
        <MetricCard
          label="Retidos provisoriamente"
          value={researchAudit.remaining_records}
          detail="Elegibilidade ainda em análise"
          icon="checkCircle"
        />
        <MetricCard
          label="Duplicatas confirmadas"
          value={researchAudit.duplicate_occurrences_confirmed}
          detail="Ocorrências removidas do conjunto"
          icon="copy"
        />
        <MetricCard
          label="Fontes coletadas"
          value="3 de 4"
          detail="SciELO com verificação pendente"
          icon="globe"
        />
      </div>
      <div className="overview-grid">
        <section className="question-card">
          <div className="question-heading">
            <span className="icon-tile">
              <Icon name="book" />
            </span>
            <span className="eyebrow">A PERGUNTA QUE NOS GUIA</span>
            <span className="card-corner">01 / PESQUISA</span>
          </div>
          <h2>
            Como o treinamento de equilíbrio
            <br className="desktop-break" /> pode transformar a reabilitação?
          </h2>
          <p>
            Quais são os efeitos no controle postural, na funcionalidade e no
            risco de quedas de indivíduos com amputação transfemoral unilateral?
          </p>
          <div className="question-tags">
            <span>Controle postural</span>
            <span>Funcionalidade</span>
            <span>Risco de quedas</span>
          </div>
          <Link className="text-link" href="/relatorio#recorte">
            Conhecer o recorte da pesquisa
            <Icon name="arrow" width="17" height="17" />
          </Link>
        </section>
        <section className="next-step-card">
          <div className="next-step-heading">
            <span className="eyebrow">NO HORIZONTE</span>
            <Icon name="clock" width="18" height="18" />
          </div>
          <h2>
            O próximo passo
            <br />é a conferência.
          </h2>
          <p>
            A coleta avançou. Agora, cada referência precisa de uma leitura
            cuidadosa.
          </p>
          <ul className="step-list">
            <li>
              <span className="step-circle" />
              Conferir as datas de 2019
            </li>
            <li>
              <span className="step-circle" />
              Concluir a triagem dos registros
            </li>
            <li>
              <span className="step-circle" />
              Obter e avaliar textos completos
            </li>
          </ul>
          <Link href="/referencias" className="text-link">
            Explorar registros
            <Icon name="arrow" width="16" height="16" />
          </Link>
        </section>
      </div>
      <section className="sources-section">
        <SectionHeading
          title="Onde buscamos evidências"
          description="Quatro fontes, estratégias adaptadas e um registro transparente."
          action={
            <Link href="/relatorio#estrategias" className="text-link">
              Ver estratégias
              <Icon name="arrow" width="16" height="16" />
            </Link>
          }
        />
        <div className="sources-grid">
          <SourceCard
            name="PubMed"
            initials="Pm"
            count="19"
            detail="Descritores MeSH e termos em título e resumo."
            href="/relatorio#pubmed"
          />
          <SourceCard
            name="BVS"
            initials="Bv"
            count="20"
            detail="Coleção completa, com filtro de 2019 a 2026."
            href="/relatorio#bvs"
          />
          <SourceCard
            name="Google Scholar"
            initials="Gs"
            count="694"
            detail="70 páginas acessíveis, por ordem de relevância."
            href="/relatorio#scholar"
          />
          <SourceCard
            name="SciELO"
            initials="Sc"
            count="—"
            detail="A interface não retornou uma lista verificável."
            pending
            href="/relatorio#scielo"
          />
        </div>
      </section>
      <Callout title="Um registro em construção, com o contexto preservado.">
        <p>
          As contagens são provisórias e não representam estudos incluídos. A
          triagem completa, a conferência das datas e a coleta da SciELO seguem
          pendentes.{" "}
          <Link href="/relatorio#fluxograma">Entenda o estágio atual.</Link>
        </p>
      </Callout>
      <section className="priority-section">
        <SectionHeading
          title="Um bom ponto de partida"
          description="Estudos próximos da pergunta, com leitura integral ainda necessária."
          action={
            <Link href="/relatorio#leitura-prioritaria" className="text-link">
              Ver análise de pertinência
              <Icon name="arrow" width="16" height="16" />
            </Link>
          }
        />
        <div className="priority-list">
          {[
            {
              id: "PM019",
              author: "Demirdel e Erbahçeci",
              tag: "Treino com dupla tarefa",
            },
            {
              id: "GS024",
              author: "Suresh et al.",
              tag: "Treino pré-protético",
            },
            { id: "GS022", author: "Elfeky et al.", tag: "Vibração corporal" },
          ].map((study) => {
            const record = researchAudit.records.find(
              (r) => r.id === study.id,
            )!;
            return (
              <article key={study.id} className="priority-row">
                <span className="study-year">{record.year}</span>
                <div>
                  <h3>
                    <a
                      href={record.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {study.author}
                      <Icon name="external" width="14" height="14" />
                    </a>
                  </h3>
                  <p>{record.title}</p>
                </div>
                <span className="study-tag">{study.tag}</span>
              </article>
            );
          })}
        </div>
        <p className="footnote">
          <Icon name="info" width="14" height="14" />
          Prioridade de leitura não constitui inclusão definitiva nem avaliação
          de risco de viés.
        </p>
      </section>
    </main>
  );
}
