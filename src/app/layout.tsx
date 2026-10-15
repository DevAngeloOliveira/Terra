import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/lora";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Busca e triagem — treinamento de equilíbrio em amputados",
  description:
    "Registro de estratégias de busca, referências bibliográficas e triagem preliminar sobre treinamento de equilíbrio em amputados transfemorais unilaterais.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
