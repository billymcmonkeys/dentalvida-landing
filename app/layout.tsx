import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentaVida — Clínica Odontológica",
  description: "Tu sonrisa, nuestra pasión. Salud dental integral, odontología infantil e Invisalign en Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
