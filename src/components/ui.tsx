import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "@/components/icon";
import type { ResearchRecord } from "@/lib/research";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <button className={`button button-${variant} ${className}`} {...props} />
  );
}

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "success" | "warning" | "error";
  children: ReactNode;
}) {
  return (
    <span className={`badge badge-${tone}`}>
      <span className="badge-dot" />
      {children}
    </span>
  );
}

export function Input({ className = "", ...props }: ComponentProps<"input">) {
  return <input className={`input ${className}`} {...props} />;
}

export function NavItem({
  href,
  active = false,
  icon,
  children,
  onClick,
}: {
  href: string;
  active?: boolean;
  icon: IconName;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={`nav-item ${active ? "is-active" : ""}`}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      <Icon name={icon} />
      <span>{children}</span>
      {active && <span className="nav-active-dot" />}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className="muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  detail,
  icon,
  featured = false,
}: {
  label: string;
  value: string | number;
  detail: string;
  icon: IconName;
  featured?: boolean;
}) {
  return (
    <article className={`metric-card ${featured ? "metric-featured" : ""}`}>
      <div className="metric-top">
        <span>{label}</span>
        <span className="metric-icon">
          <Icon name={icon} />
        </span>
      </div>
      <strong className="metric-value">{value}</strong>
      <p>{detail}</p>
    </article>
  );
}

export function Callout({
  title,
  children,
  tone = "warning",
}: {
  title: string;
  children: ReactNode;
  tone?: "warning" | "neutral";
}) {
  return (
    <aside className={`callout callout-${tone}`}>
      <Icon name="info" />
      <div>
        <strong>{title}</strong>
        <div>{children}</div>
      </div>
    </aside>
  );
}

export function SourceCard({
  name,
  initials,
  count,
  detail,
  pending = false,
  href,
}: {
  name: string;
  initials: string;
  count: string;
  detail: string;
  pending?: boolean;
  href: string;
}) {
  return (
    <article className="source-card">
      <div className="source-top">
        <span className="source-mark">{initials}</span>
        <Badge tone={pending ? "warning" : "success"}>
          {pending ? "Pendente" : "Coletada"}
        </Badge>
      </div>
      <h3>{name}</h3>
      <div className="source-count">
        {count}
        <span>{pending ? "contagem a confirmar" : "registros capturados"}</span>
      </div>
      <p>{detail}</p>
      <Link href={href} className="text-link">
        {pending ? "Ver pendência" : "Ver estratégia"}
        <Icon name="arrow" width="16" height="16" />
      </Link>
    </article>
  );
}

export function ReferenceRow({ record }: { record: ResearchRecord }) {
  const tone = record.duplicate
    ? "neutral"
    : record.decision.includes("Pendente")
      ? "warning"
      : record.decision.includes("Excluir")
        ? "neutral"
        : "success";
  return (
    <tr data-base={record.base} data-dup={record.duplicate ? "yes" : "no"}>
      <td>
        <span className="record-id">{record.id}</span>
        <span className="record-base">{record.base}</span>
      </td>
      <td>
        <a
          className="record-title"
          href={record.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {record.title}
          <Icon name="external" width="13" height="13" />
        </a>
        <small>{record.metadata}</small>
      </td>
      <td>
        <span className={`dedup-label ${record.duplicate ? "" : "retained"}`}>
          <Icon
            name={record.duplicate ? "copy" : "checkCircle"}
            width="15"
            height="15"
          />
          {record.duplicate ? "Duplicata" : "Retido"}
        </span>
        <span className="canonical-id">{record.canonical_id}</span>
      </td>
      <td>
        <Badge tone={tone}>{record.decision}</Badge>
        <p className="record-reason">{record.reason}</p>
      </td>
    </tr>
  );
}
