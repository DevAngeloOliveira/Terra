"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { Badge, Button, Callout, Input, ReferenceRow } from "@/components/ui";
import type { ResearchRecord } from "@/lib/research";

export function ReferenceRegistry({ records }: { records: ResearchRecord[] }) {
  const [search, setSearch] = useState("");
  const [base, setBase] = useState("");
  const [duplicates, setDuplicates] = useState("");
  const term = search.trim().toLocaleLowerCase("pt-BR");

  const filteredRecords = records.filter((record) => {
    if (base && record.base !== base) return false;
    if (duplicates === "yes" && !record.duplicate) return false;
    if (duplicates === "no" && record.duplicate) return false;

    const text = [
      record.id,
      record.base,
      record.title,
      record.metadata,
      record.pmid,
      record.doi,
      record.year,
      record.canonical_id,
      record.duplicate ? "Duplicata de" : "Retido",
      record.decision,
      record.reason,
    ]
      .join(" ")
      .toLocaleLowerCase("pt-BR");

    return !term || text.includes(term);
  });

  return (
    <section id="referencias" aria-labelledby="referencias-titulo">
      <div className="page-heading">
        <div>
          <p className="eyebrow">BIBLIOTECA DE EVIDÊNCIAS</p>
          <h1 id="referencias-titulo">
            Cada referência importa<span>.</span>
          </h1>
          <p className="page-description">
            Explore as 733 ocorrências e acompanhe as decisões preliminares.
          </p>
        </div>
        <a
          className="button button-secondary"
          id="download"
          href="/api/registro"
          download="registro_pesquisa_tcc.json"
        >
          <Icon name="download" width="17" height="17" />
          Exportar registro JSON
        </a>
      </div>
      <div className="registry-summary">
        <Badge>733 ocorrências</Badge>
        <Badge tone="success">690 retidos provisoriamente</Badge>
        <Badge tone="warning">43 duplicatas confirmadas</Badge>
      </div>
      <Callout title="A elegibilidade ainda está em análise." tone="neutral">
        <p>
          Os títulos e metadados abaixo refletem as páginas de busca; alguns
          títulos do Scholar estão abreviados. Abra a fonte original antes de
          montar a referência final. “Pendente” significa que o registro foi
          identificado, mas ainda não teve elegibilidade confirmada. A tabela
          não declara 690 estudos relevantes.
        </p>
      </Callout>
      <div className="registry-panel">
        <div className="toolbar">
          <label className="filter-field" htmlFor="search">
            <span>Buscar referências</span>
            <div className="search-input">
              <Icon name="search" width="18" height="18" />
              <Input
                id="search"
                type="search"
                placeholder="Procurar título, ID ou motivo"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </label>
          <label className="filter-field" htmlFor="base">
            <span>Base de dados</span>
            <select
              id="base"
              value={base}
              onChange={(event) => setBase(event.target.value)}
            >
              <option value="">Todas as bases</option>
              <option>PubMed</option>
              <option>BVS</option>
              <option>Google Scholar</option>
            </select>
          </label>
          <label className="filter-field" htmlFor="dup">
            <span>Ocorrências</span>
            <select
              id="dup"
              value={duplicates}
              onChange={(event) => setDuplicates(event.target.value)}
            >
              <option value="">Todas as ocorrências</option>
              <option value="no">Registros retidos</option>
              <option value="yes">Duplicatas</option>
            </select>
          </label>
          <Button
            variant="ghost"
            onClick={() => {
              setSearch("");
              setBase("");
              setDuplicates("");
            }}
            disabled={!search && !base && !duplicates}
          >
            Limpar filtros
          </Button>
        </div>
        <div className="registry-results">
          <p id="counter" role="status" aria-live="polite" aria-atomic="true">
            {filteredRecords.length} de {records.length} ocorrências exibidas
          </p>
          <span>
            <Icon name="filter" width="15" height="15" />
            Registro original da coleta
          </span>
        </div>
        <div
          className="tablewrap"
          role="region"
          aria-label="Referências capturadas"
          tabIndex={0}
        >
          <table id="records">
            <caption className="sr-only">
              Referências capturadas e decisões preliminares de pertinência
            </caption>
            <thead>
              <tr>
                <th scope="col">ID / base</th>
                <th scope="col">Título e fonte</th>
                <th scope="col">Deduplicação</th>
                <th scope="col">Pertinência</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={4}>
                    Nenhuma referência encontrada para os filtros selecionados.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((record) => (
                  <ReferenceRow key={record.id} record={record} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
