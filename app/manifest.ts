import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "7Barber - Barbershop Annecy",
    short_name: "7Barber",
    description: "Barbershop haut de gamme à Annecy - Coupe homme et taille de barbe",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#fbbf24",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
