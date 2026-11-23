import type { Metadata, Viewport } from "next";
import "./globals.css";

// Pas de police web : on utilise les polices déjà installées sur l'appareil (0 octet téléchargé).

export const metadata: Metadata = {
  title: "Ailyas Filali — CV Développeur Data",
  description:
    "CV d'Ailyas Filali, étudiant BUT 3 Informatique (data & développement), à la recherche d'un stage à partir de mars 2027.",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
