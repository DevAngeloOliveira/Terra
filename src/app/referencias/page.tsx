import type { Metadata } from "next";
import { ReferenceRegistry } from "@/components/reference-registry";
import { researchAudit } from "@/lib/research";

export const metadata: Metadata = { title: "Referências · Equilíbrio" };

export default function ReferencesPage() {
  return (
    <main id="conteudo" className="page-content">
      <ReferenceRegistry records={researchAudit.records} />
    </main>
  );
}
