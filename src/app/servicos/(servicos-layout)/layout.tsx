import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Serviços para PCD | Portal PCD",
  description: "Informações e recursos para pessoas com deficiência",
}

export default function ServicosLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen">{children}</div>
}
