import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/data/site";
export const metadata = {
  title: {
    default: `${SITE.name} — Restaurant & Traiteur à Dakar`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Restaurant, Fast-Food, Pâtisserie, Dibiterie, Glacier et Traiteur à Grand Mbao, Dakar. Ouvert 7j/7.",
  keywords: [
    "restaurant dakar",
    "traiteur dakar",
    "fast food dakar",
    "dibiterie",
    "pâtisserie",
    "mariage traiteur sénégal",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="light">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
