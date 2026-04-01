export const SITE = {
  name: 'Fely Traiteur', tagline: 'On ne pouvait pas rêver mieux',
  sub: 'Restaurant · Fast-Food · Traiteur · Glacier',
  phone: '+221 77 653 60 02', whatsapp: '221776536002',
  email: 'felydiouf8@gmail.com',
  orderUrl: 'https://fely-traiteur-front.vercel.app/menu',
  address: {
    street: 'Cité Baobab, Grand Mbao', detail: 'À côté de Cabis School',
    city: 'Dakar', country: 'Sénégal', full: 'Cité Baobab, Grand Mbao, Dakar',
    mapsUrl: 'https://maps.google.com/?q=Cite+Baobab+Grand+Mbao+Dakar+Senegal',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15436!2d-17.35!3d14.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCit%C3%A9+Baobab+Grand+Mbao!5e0!3m2!1sfr!2ssn!4v1',
  },
  hours: '07h00 – 03h00', days: 'Ouvert 7j/7',
  social: {
    instagram: 'https://instagram.com/fely_traiteur_officiel',
    tiktok: 'https://tiktok.com/@felytraiteur', facebook: 'https://facebook.com',
    igHandle: '@fely_traiteur_officiel', ttHandle: '@felytraiteur',
  },
}
export const NAV_LINKS = [
  { label: 'Accueil', href: '/' }, { label: 'Menu', href: '/menu' },
  { label: 'À propos', href: '/a-propos' }, { label: 'Contact', href: '/contact' },
]
export const SLIDES = [
  { id: 1, label: 'Fast-Food & Snacking', alt: 'Poulet-frites Fely Traiteur', image: '/images/slides/slide-1.jpg', bg: 'linear-gradient(135deg,#2d1a00,#4a2e0a)' },
  { id: 2, label: 'Cuisine Sénégalaise', alt: 'Thiéboudienne Fely Traiteur', image: '/images/slides/slide-2.jpg', bg: 'linear-gradient(135deg,#0a2d00,#1a4a0a)' },
  { id: 3, label: 'Pâtisserie & Glacier', alt: 'Pâtisserie Fely Traiteur', image: '/images/slides/slide-3.jpg', bg: 'linear-gradient(135deg,#2d0a00,#4a1a10)' },
  { id: 4, label: 'Dibiterie', alt: 'Viande grillée Fely Traiteur', image: '/images/slides/slide-4.jpg', bg: 'linear-gradient(135deg,#0a1a2d,#102040)' },
  { id: 5, label: 'Traiteur & Événements', alt: 'Service traiteur Fely Traiteur', image: '/images/slides/slide-5.jpg', bg: 'linear-gradient(135deg,#1a0a2d,#2d1040)' },
]
export const STATS = [
  { value: '200+', label: 'Événements' }, { value: '98%', label: 'Satisfaction' }, { value: '7j/7', label: 'Ouverture' },
]
export const SPECIALITES = [
  {
    id: 'ff', label: 'Fast-Food', title: 'Fast-Food & Snacking', emoji: '🍗', image: '/images/specialites/fast-food.jpg', bg: 'linear-gradient(145deg,#fff8ee,#f5e4c0)',
    desc: 'Poulet-frites croustillants, burgers maison généreux, sandwichs savoureux préparés chaque jour avec des produits frais.'
  },
  {
    id: 'cs', label: 'Cuisine Sénégalaise', title: 'Cuisine Africaine', emoji: '🥘', image: '/images/specialites/cuisine.jpg', bg: 'linear-gradient(145deg,#f0f8ee,#d4edcc)',
    desc: 'Thiéboudienne, Yassa, Mafé… nos recettes traditionnelles aux saveurs authentiques qui font la fierté du Sénégal.'
  },
  {
    id: 'pa', label: 'Pâtisserie', title: 'Pâtisserie & Viennoiseries', emoji: '🎂', image: '/images/specialites/patisserie.jpg', bg: 'linear-gradient(145deg,#fff0ee,#f5d0c8)',
    desc: 'Gâteaux sur commande, viennoiseries fraîches du matin, tartes et entremets réalisés avec soin chaque jour.'
  },
  {
    id: 'di', label: 'Dibiterie', title: 'Dibiterie', emoji: '🥩', image: '/images/specialites/dibiterie.jpg', bg: 'linear-gradient(145deg,#eef0f8,#c8d0ed)',
    desc: 'Viande grillée au charbon, dibi haoussa, mouton rôti avec moutarde et oignons. Spécialité incontournable de Dakar.'
  },
  {
    id: 'gl', label: 'Glacier', title: 'Glacier & Brunch', emoji: '🍦', image: '/images/specialites/glacier.jpg', bg: 'linear-gradient(145deg,#f8f0ff,#e0ccf5)',
    desc: 'Glaces artisanales — bissap, tamarin, mangue. Brunchs du weekend, petits-déjeuners et jus frais pressés.'
  },
  {
    id: 'tr', label: 'Traiteur Événements', title: 'Traiteur & Événementiel', emoji: '🎉', image: '/images/specialites/traiteur.jpg', bg: 'linear-gradient(145deg,#f8ffee,#d8edc8)',
    desc: 'Mariages, baptêmes, séminaires, anniversaires. Service complet clé en main. Devis gratuit sous 24h.'
  },
]
export const SERVICES = [
  { title: 'Mariages & Cérémonies', desc: 'Service à table, buffet, pièce montée', emoji: '💍', image: '/images/services/mariage.jpg' },
  { title: 'Événements Pro', desc: "Séminaires, cocktails d'affaires", emoji: '🏢', image: '/images/services/events.jpg' },
  { title: 'Anniversaires', desc: 'Gâteau personnalisé, cocktail', emoji: '🎂', image: '/images/services/anniversaire.jpg' },
  { title: 'Fêtes Religieuses', desc: 'Menus halal, cuisine traditionnelle', emoji: '🕌', image: '/images/services/religieux.jpg' },
  { title: 'Livraison', desc: 'Plateaux repas, livraison Dakar', emoji: '🍱', image: '/images/services/livraison.jpg' },
  { title: 'Chef à Domicile', desc: "Jusqu'à 20 personnes, courses incluses", emoji: '👨‍🍳', image: '/images/services/chef.jpg' },
]
export const HORAIRES = [
  { jour: 'Tous les jours', heure: '07h00 – 02h00', highlight: true },
  { jour: 'Service continu', heure: 'Non-stop' },
  { jour: 'Livraison', heure: '08h00 – 22h00' },
  { jour: 'Traiteur sur RDV', heure: "24h à l'avance" },
]
export const VALEURS = [
  { emoji: '🌿', title: 'Produits frais', desc: 'Ingrédients frais et locaux sélectionnés chaque matin.' },
  { emoji: '❤', title: 'Fait maison', desc: 'Toutes nos recettes préparées avec amour dans notre cuisine.' },
  { emoji: '🤝', title: 'Service personnalisé', desc: 'Chaque événement est unique — accompagnement de A à Z.' },
]
export const MENU_CATEGORIES = ['Tout', 'Fast-Food', 'Cuisine Sénégalaise', 'Pâtisserie', 'Glacier', 'Dibiterie', 'Brunch']
export const MENU_ITEMS = [
  { emoji: '🍗', name: 'Poulet-frites', category: 'Fast-Food', desc: 'Notre signature croustillante' },
  { emoji: '🍔', name: 'Burger maison', category: 'Fast-Food', desc: 'Pain brioche, steak haché, sauce maison' },
  { emoji: '🌯', name: 'Shawarma', category: 'Fast-Food', desc: 'Garniture généreuse, sauce blanche' },
  { emoji: '🥘', name: 'Thiéboudienne', category: 'Cuisine Sénégalaise', desc: 'Riz au poisson, légumes, sauce tomate' },
  { emoji: '🥩', name: 'Yassa poulet', category: 'Cuisine Sénégalaise', desc: 'Marinade citron-oignon caramélisée' },
  { emoji: '🍲', name: 'Mafé', category: 'Cuisine Sénégalaise', desc: 'Sauce arachide, viande fondante' },
  { emoji: '🎂', name: 'Gâteau sur commande', category: 'Pâtisserie', desc: 'Personnalisé selon vos envies' },
  { emoji: '🥐', name: 'Viennoiseries', category: 'Pâtisserie', desc: 'Croissants, pains au chocolat' },
  { emoji: '🍦', name: 'Glaces artisanales', category: 'Glacier', desc: 'Bissap, tamarin, mangue, vanille' },
  { emoji: '🥩', name: 'Dibi haoussa', category: 'Dibiterie', desc: 'Mouton grillé, moutarde, oignons' },
  { emoji: '🥗', name: 'Brunch Fely', category: 'Brunch', desc: 'Formule complète du weekend' },
  { emoji: '🥤', name: 'Jus frais', category: 'Brunch', desc: 'Bissap, ditakh, gingembre' },
]
export const CONTACT_SUBJECTS = [
  'Sélectionner...', 'Réservation table', 'Devis traiteur',
  'Mariage & Cérémonie', 'Événement professionnel', 'Baptême', 'Commande spéciale', 'Autre',
]
