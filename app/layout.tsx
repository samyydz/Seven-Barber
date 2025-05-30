import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seven Barber - Barbershop Haut de Gamme à Annecy | Coiffeur Homme Professionnel",
  description:
    "Découvrez Seven Barber, le barbershop haut de gamme d'Annecy. Coupe homme, taille de barbe, soins premium par des maîtres barbiers. 69 Av. de Genève.",
  keywords:
    "Seven Barber, barbershop Annecy, coiffeur homme Annecy, barber Annecy, coupe homme, taille barbe, 69 avenue de Genève, salon coiffure masculine",
  authors: [{ name: "Seven Barber Annecy" }],
  creator: "Seven Barber",
  publisher: "Seven Barber",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Seven Barber - Barbershop Haut de Gamme à Annecy",
    description:
      "L'art de la coupe masculine à Annecy. Barbershop premium avec des maîtres barbiers expérimentés. 69 Av. de Genève.",
    url: "https://sevenbarber-annecy.vercel.app",
    siteName: "Seven Barber",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seven Barber Annecy - Barbershop Haut de Gamme",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Barber - Barbershop Haut de Gamme à Annecy",
    description: "L'art de la coupe masculine à Annecy. Réservez votre rendez-vous. 69 Av. de Genève.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
