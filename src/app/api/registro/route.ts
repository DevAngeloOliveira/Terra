import { researchAudit } from "@/lib/research";

export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(researchAudit, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="registro_pesquisa_tcc.json"',
      "X-Content-Type-Options": "nosniff",
    },
  });
}
