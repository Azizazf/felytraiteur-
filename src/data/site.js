export const SITE = {
  name:     'Fely Traiteur',
  tagline:  'On ne pouvait pas rêver mieux',
  sub:      'Restaurant · Fast-Food · Traiteur · Glacier',
  phone:    '+221 77 653 60 02',
  email:    'felydiouf8@gmail.com',
  address: {
    street:  'Cité Baobab, Grand Mbao',
    detail:  'À côté de Cabis School',
    city:    'Dakar',
    country: 'Sénégal',
    full:    'Cité Baobab, Grand Mbao, Dakar',
  },
  hours:   '07h00 – 23h00',
  days:    'Ouvert 7j/7',
  social: {
    instagram: 'https://instagram.com/fely_traiteur_officiel',
    tiktok:    'https://tiktok.com/@felytraiteur',
    facebook:  'https://facebook.com',
    igHandle:  '@fely_traiteur_officiel',
    ttHandle:  '@felytraiteur',
  },
}

export const NAV_LINKS = [
  { label: 'Accueil',  href: '/' },
  { label: 'Menu',     href: '/menu' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact',  href: '/contact' },
]

export const SLIDES = [
  { id:1, food:'🍗🥘', bg:'linear-gradient(135deg,#0f0800,#2d1a00,#3d2400)' },
  { id:2, food:'🥘🌿', bg:'linear-gradient(135deg,#080f00,#1a3d00,#243d00)' },
  { id:3, food:'🎂🧁', bg:'linear-gradient(135deg,#0f0000,#3d0800,#3d1500)' },
  { id:4, food:'🥩🔥', bg:'linear-gradient(135deg,#04080f,#00153d,#001030)' },
  { id:5, food:'🍦🧊', bg:'linear-gradient(135deg,#080414,#150028,#200040)' },
]

export const STATS = [
  { value:'200+', label:'Événements' },
  { value:'98%',  label:'Satisfaction' },
  { value:'7j/7', label:'Ouverture' },
]

export const SPECIALITES = [
  { id:'ff', emoji:'🍗', label:'Fast-Food',           title:'Fast-Food & Snacking',     desc:'Poulet-frites, burgers maison, sandwichs généreux préparés chaque jour avec des produits frais.',         bgLight:'linear-gradient(145deg,#fff8ee,#f5e4c0)', bgDark:'linear-gradient(145deg,#1a0d00,#3d2200)' },
  { id:'cs', emoji:'🥘', label:'Cuisine Sénégalaise', title:'Cuisine Africaine',         desc:'Thiéboudienne, Yassa, Mafé… nos recettes traditionnelles aux saveurs authentiques du Sénégal.',           bgLight:'linear-gradient(145deg,#f0f8ee,#d4edcc)', bgDark:'linear-gradient(145deg,#001a08,#003d18)' },
  { id:'pa', emoji:'🎂', label:'Pâtisserie',           title:'Pâtisserie & Viennoiseries',desc:'Gâteaux sur commande, viennoiseries fraîches, tartes et entremets réalisés avec soin.',                   bgLight:'linear-gradient(145deg,#fff0ee,#f5d0c8)', bgDark:'linear-gradient(145deg,#1a0000,#3d0800)' },
  { id:'di', emoji:'🥩', label:'Dibiterie',            title:'Dibiterie',                 desc:'Viande grillée au charbon, dibi haoussa, mouton rôti servi avec moutarde et oignons traditionnels.',       bgLight:'linear-gradient(145deg,#eef0f8,#c8d0ed)', bgDark:'linear-gradient(145deg,#00101a,#00253d)' },
  { id:'gl', emoji:'🍦', label:'Glacier',              title:'Glacier & Brunch',          desc:'Glaces artisanales aux parfums locaux, brunchs du weekend, petits-déjeuners complets et jus frais.',       bgLight:'linear-gradient(145deg,#f8f0ff,#e0ccf5)', bgDark:'linear-gradient(145deg,#150a1a,#2d1840)' },
  { id:'tr', emoji:'🎉', label:'Traiteur Événements',  title:'Traiteur & Événementiel',   desc:'Mariages, baptêmes, séminaires, anniversaires. Service complet clé en main. Devis entièrement gratuit.', bgLight:'linear-gradient(145deg,#f8ffee,#d8edc8)', bgDark:'linear-gradient(145deg,#0a1a00,#1a3d00)' },
]

export const SERVICES = [
  { emoji:'💍', title:'Mariages & Cérémonies', desc:'Service à table, buffet, pièce montée, décoration' },
  { emoji:'🏢', title:'Événements Pro',         desc:'Séminaires, cocktails d\'affaires, team building' },
  { emoji:'🎂', title:'Anniversaires',          desc:'Gâteau personnalisé, cocktail, animation' },
  { emoji:'🕌', title:'Fêtes Religieuses',      desc:'Menus halal, cuisine traditionnelle sénégalaise' },
  { emoji:'🍱', title:'Livraison',              desc:'Plateaux repas, livraison sur Dakar' },
  { emoji:'👨‍🍳', title:'Chef à Domicile',       desc:'Jusqu\'à 20 personnes, courses incluses' },
]

export const HORAIRES = [
  { jour:'Tous les jours', heure:'07h00 – 23h00', highlight:true },
  { jour:'Service continu', heure:'Non-stop' },
  { jour:'Livraison',       heure:'08h00 – 22h00' },
  { jour:'Traiteur sur RDV',heure:'24h à l\'avance' },
]

export const VALEURS = [
  { emoji:'🌿', title:'Produits frais',       desc:'Ingrédients frais et locaux sélectionnés chaque matin pour garantir la saveur et la qualité.' },
  { emoji:'❤',  title:'Fait maison',           desc:'Toutes nos recettes préparées avec amour dans notre cuisine, sans compromis sur la qualité.' },
  { emoji:'🤝', title:'Service personnalisé',  desc:'Chaque événement est unique. Nous vous accompagnons de A à Z pour créer des moments inoubliables.' },
]

export const MENU_CATEGORIES = ['Tout','Fast-Food','Cuisine Sénégalaise','Pâtisserie','Glacier','Dibiterie','Brunch']

export const MENU_ITEMS = [
  { emoji:'🍗', name:'Poulet-frites',        category:'Fast-Food',          desc:'Notre signature croustillante' },
  { emoji:'🍔', name:'Burger maison',         category:'Fast-Food',          desc:'Pain brioche, steak haché, sauce maison' },
  { emoji:'🌯', name:'Shawarma',              category:'Fast-Food',          desc:'Garniture généreuse, sauce blanche' },
  { emoji:'🥘', name:'Thiéboudienne',         category:'Cuisine Sénégalaise',desc:'Riz au poisson, légumes, sauce tomate' },
  { emoji:'🥩', name:'Yassa poulet',          category:'Cuisine Sénégalaise',desc:'Marinade citron-oignon caramélisée' },
  { emoji:'🍲', name:'Mafé',                  category:'Cuisine Sénégalaise',desc:'Sauce arachide, viande fondante' },
  { emoji:'🎂', name:'Gâteau sur commande',   category:'Pâtisserie',         desc:'Personnalisé selon vos envies' },
  { emoji:'🥐', name:'Viennoiseries',         category:'Pâtisserie',         desc:'Croissants, pains au chocolat, brioche' },
  { emoji:'🧁', name:'Cupcakes & Muffins',    category:'Pâtisserie',         desc:'Variétés locales et classiques' },
  { emoji:'🍦', name:'Glaces artisanales',    category:'Glacier',            desc:'Parfums locaux : bissap, tamarin, mangue' },
  { emoji:'🍨', name:'Sundae maison',         category:'Glacier',            desc:'Coupe glacée généreuse' },
  { emoji:'🥩', name:'Dibi haoussa',          category:'Dibiterie',          desc:'Mouton grillé, moutarde, oignons' },
  { emoji:'🍖', name:'Côtelettes grillées',   category:'Dibiterie',          desc:'Marinées aux épices locales' },
  { emoji:'🥗', name:'Brunch Fely',           category:'Brunch',             desc:'Formule complète du weekend' },
  { emoji:'🥤', name:'Jus frais',             category:'Brunch',             desc:'Bissap, ditakh, gingembre, tamarin' },
]

export const CONTACT_SUBJECTS = [
  'Sélectionner...',
  'Réservation table',
  'Devis traiteur',
  'Mariage & Cérémonie',
  'Événement professionnel',
  'Baptême & Cérémonie religieuse',
  'Commande spéciale',
  'Autre question',
]
