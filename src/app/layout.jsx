import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/data/site'

export const metadata = {
  title: {
    default: `${SITE.name} — Restaurant & Traiteur à Dakar`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Restaurant, Fast-Food, Pâtisserie, Dibiterie, Glacier et Traiteur événementiel à Grand Mbao, Dakar. Ouvert 7j/7.',
  keywords: ['restaurant dakar', 'traiteur dakar', 'fast food dakar', 'dibiterie dakar', 'pâtisserie dakar', 'mariage traiteur sénégal', 'fely traiteur grand mbao'],
  openGraph: {
    title: `${SITE.name} — Restaurant & Traiteur à Dakar`,
    description: 'On ne pouvait pas rêver mieux. Restaurant, Fast-Food, Traiteur à Dakar.',
    locale: 'fr_SN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="light">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
