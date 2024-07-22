import "@/src/assets/globals.css";

export const metadata = {
  title: 'ZapStream - Login',
  description: 'ZapStream - Pagina para Realizar Login',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
