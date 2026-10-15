"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { NavItem } from "@/components/ui";

const pages = [
  { href: "/", label: "Visão geral", icon: "grid" as const },
  { href: "/relatorio", label: "Registro de busca", icon: "book" as const },
  { href: "/referencias", label: "Referências", icon: "layers" as const },
  { href: "/design-system", label: "Design system", icon: "palette" as const },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () =>
      Array.from(
        sidebarRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not(:disabled)",
        ) ?? [],
      );
    focusable()[0]?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const handleDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleDesktop);
      document.body.style.overflow = originalOverflow;
      previousFocus?.focus();
    };
  }, [open]);
  const current =
    pages.find((page) => page.href === pathname)?.label ?? "Pesquisa";
  return (
    <div className="app-shell">
      {open && (
        <button
          className="sidebar-backdrop"
          aria-label="Fechar navegação"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        ref={sidebarRef}
        id="navegacao"
        className={`sidebar ${open ? "sidebar-open" : ""}`}
      >
        <button
          className="icon-button sidebar-close"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        >
          <Icon name="close" />
        </button>
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            e<span>.</span>
          </span>
          <span>
            equilíbrio<span className="brand-period">.</span>
            <small>ESPAÇO DE PESQUISA</small>
          </span>
        </Link>
        <div className="workspace-card">
          <span className="workspace-icon">
            <Icon name="book" />
          </span>
          <div>
            <strong>Pesquisa acadêmica</strong>
            <small>Trabalho de conclusão de curso</small>
          </div>
        </div>
        <span className="nav-label">ESPAÇO DE TRABALHO</span>
        <nav aria-label="Navegação principal">
          {pages.slice(0, 3).map((page) => (
            <NavItem
              key={page.href}
              href={page.href}
              active={pathname === page.href}
              icon={page.icon}
              onClick={() => setOpen(false)}
            >
              {page.label}
            </NavItem>
          ))}
        </nav>
        <div className="sidebar-secondary">
          <span className="nav-label">FUNDAMENTOS</span>
          <NavItem
            href="/design-system"
            active={pathname === "/design-system"}
            icon="palette"
            onClick={() => setOpen(false)}
          >
            Design system
          </NavItem>
        </div>
        <div className="sidebar-bottom">
          <span className="sidebar-note-icon">
            <Icon name="file" />
          </span>
          <strong>Ciência feita com cuidado.</strong>
          <p>
            Organize as evidências.
            <br />
            Preserve o contexto.
          </p>
          <div className="sidebar-version">
            <span className="badge-dot" />
            Registro de 15 out. 2026
          </div>
        </div>
      </aside>
      <div className="app-body">
        <header className="topbar">
          <div className="breadcrumb">
            <button
              className="icon-button mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="navegacao"
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
            <span className="breadcrumb-root">Pesquisa acadêmica</span>
            <Icon name="chevron" width="13" height="13" />
            <span>{current}</span>
          </div>
          <div className="topbar-meta">
            <span className="collection-status">
              <span className="badge-dot" />
              Coleta parcial
            </span>
            <span className="topbar-divider" />
            <Icon name="calendar" width="16" height="16" />
            <span>15 out. 2026</span>
          </div>
        </header>
        {children}
        <div className="app-bottom">
          <span>
            equilíbrio<span className="brand-period">.</span>
          </span>
          <p>Um espaço para conectar pesquisa e cuidado.</p>
          <span>TCC · 2026</span>
        </div>
      </div>
    </div>
  );
}
