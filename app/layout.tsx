import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jonasdiop.com"),
  title: { default: "Jonas Diop — Architecte d’affaires et expert en scaling", template: "%s — Jonas Diop" },
  description: "Ajoute un zéro à ton chiffre d’affaires sans ajouter un zéro à la complexité grâce à la méthode CDT™.",
  icons: { icon: "/favicon.svg" },
  openGraph: { locale: "fr_CA", type: "website", siteName: "Jonas Diop" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr-CA"><body>{children}</body></html>;
}
