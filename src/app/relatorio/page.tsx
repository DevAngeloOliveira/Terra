import type { Metadata } from "next";
import Link from "next/link";
import { ResearchContent } from "@/components/research-content";
import { ResearchFooter } from "@/components/research-footer";
import { Icon } from "@/components/icon";

export const metadata: Metadata = { title: "Registro de busca · Equilíbrio" };

export default function ReportPage() {
  return (
    <main id="conteudo" className="page-content report-page">
      <div className="report-actions">
        <span className="eyebrow">MÉTODO & TRANSPARÊNCIA</span>
        <Link href="/referencias" className="button button-secondary">
          Explorar referências
          <Icon name="arrow" width="16" height="16" />
        </Link>
      </div>
      <article className="research-document">
        <ResearchContent />
        <div className="report-end">
          <h2>Registro completo das referências capturadas</h2>
          <p>
            Explore as 733 ocorrências com busca por título, identificador e
            motivo, filtros por base e deduplicação.
          </p>
          <Link href="/referencias" className="button button-primary">
            Abrir biblioteca de referências
            <Icon name="arrow" width="16" height="16" />
          </Link>
        </div>
        <ResearchFooter />
      </article>
    </main>
  );
}
