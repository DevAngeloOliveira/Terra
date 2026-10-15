import audit from "@/data/research-audit.json";

export type ResearchRecord = (typeof audit.records)[number];

export const researchAudit = audit;
