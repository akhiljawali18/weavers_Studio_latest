// Without this import Tailwind is not applied to any page. It also brings in the
// preflight reset, which now applies app-wide.
import './globals.css'
import localFont from 'next/font/local'

// globals.css and the Tailwind config read these two variables, so they must be
// defined here or every page falls back to the browser's default fonts.
const ttNormsPro = localFont({
  src: [
    { path: './fonts/TT-norms/TT_Norms_Pro_Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/TT-norms/TT_Norms_Pro_Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/TT-norms/TT_Norms_Pro_Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-TTNormsPro',
  display: 'swap',
})

const bodoniModa = localFont({
  src: [
    { path: '../node_modules/@fontsource/bodoni-moda/files/bodoni-moda-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../node_modules/@fontsource/bodoni-moda/files/bodoni-moda-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-bodoni-moda',
  display: 'swap',
})

export const metadata = {
  title: 'Sarong to Sari',
  description: 'Sarong to Sari, an exhibition by Weavers Studio Resource Centre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ttNormsPro.variable} ${bodoniModa.variable}`}>
      <body>{children}</body>
    </html>
  )
}
