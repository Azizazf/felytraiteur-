# ✦ Fely Traiteur — Site Web
**Restaurant · Fast-Food · Pâtisserie · Dibiterie · Glacier · Traiteur**
Grand Mbao, Dakar — Sénégal

---

## 🚀 Démarrage rapide

```bash
cd fely-traiteur
./start.sh
```
Ouvrir **http://localhost:3000**

---

## 📧 ÉTAPE 1 — Configurer les emails du formulaire

### 1. Créer un compte Resend (gratuit)
→ Aller sur **https://resend.com** → Sign Up (gratuit)
→ Gratuit jusqu'à **3 000 emails/mois**

### 2. Obtenir la clé API
→ Dashboard Resend → **API Keys** → **Create API Key**
→ Copier la clé : `re_xxxxxxxxxxxxxxxx`

### 3. Configurer .env.local
Ouvrir le fichier `.env.local` et remplir :
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
CONTACT_EMAIL=felydiouf8@gmail.com
```

### 4. Vérifier votre domaine email (optionnel mais recommandé)
→ Dans Resend → **Domains** → Ajouter votre domaine
→ Sans domaine vérifié, les emails partent depuis `onboarding@resend.dev`

### 5. Tester
→ Remplir le formulaire sur `/contact`
→ Vous recevez un email sur `felydiouf8@gmail.com`
→ Le client reçoit un email de confirmation automatique

---

## 🌐 ÉTAPE 2 — Déployer le site en ligne

### Option A — Vercel (recommandé, gratuit)

**Vercel** est fait par les créateurs de Next.js. Déploiement en 3 minutes.

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter (crée un compte sur vercel.com si besoin)
vercel login

# 3. Déployer
vercel

# 4. Pour la production
vercel --prod
```

**Ajouter les variables d'environnement sur Vercel :**
→ Dashboard Vercel → votre projet → **Settings** → **Environment Variables**
→ Ajouter :
- `RESEND_API_KEY` = `re_xxxxxxxxxxxxxxxx`
- `CONTACT_EMAIL` = `felydiouf8@gmail.com`

Votre site sera en ligne sur `https://fely-traiteur.vercel.app`

---

### Option B — Render (alternative gratuite)

```bash
# 1. Pousser sur GitHub d'abord
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_USER/fely-traiteur.git
git push -u origin main
```

→ Aller sur **https://render.com**
→ New → Web Service → connecter GitHub
→ Settings :
  - **Build Command** : `npm install && npm run build`
  - **Start Command** : `npm start`
→ Environment Variables : même que Vercel ci-dessus

---

### Option C — Nom de domaine personnalisé

Après déploiement sur Vercel :
→ Dashboard → votre projet → **Settings** → **Domains**
→ Ajouter : `www.felytraiteur.sn` ou `felytraiteur.com`
→ Configurer les DNS chez votre registrar

---

## 📁 Structure du projet

```
src/
├── app/                          Pages (Next.js App Router)
│   ├── layout.jsx                Layout global
│   ├── page.jsx                  Accueil
│   ├── menu/page.jsx             Menu
│   ├── a-propos/page.jsx         À propos
│   ├── contact/page.jsx          Contact
│   └── api/contact/route.js      API email (Resend)
├── components/
│   ├── layout/Navbar.jsx         Navigation + dark/light toggle
│   ├── layout/Footer.jsx         Footer 4 colonnes
│   ├── sections/                 Sections page d'accueil
│   └── ui/ThemeToggle.jsx        Bouton ☾/☀
├── data/site.js                  Tout le contenu du site
├── hooks/useReveal.js            Animations au scroll
└── styles/
    ├── globals.css               Reset + animations
    └── theme.css                 Variables light/dark
```

---

## ✏️ Modifier le contenu

Tout dans **`src/data/site.js`** :
- Nom, téléphone, adresse, email, réseaux sociaux
- Slides du hero, spécialités, services, menu, horaires

---

## 🗺️ Intégrer Google Maps

Dans `HorairesSection.jsx` et `contact/page.jsx`, remplacer le `div.map-placeholder` par :
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=VOTRE_CODE"
  width="100%" height="230"
  style={{ border:0 }} allowFullScreen loading="lazy"
/>
```
**Obtenir le code** : Google Maps → chercher votre adresse → Partager → Intégrer une carte.

---

*✦ On ne pouvait pas rêver mieux — Fely Traiteur, Dakar*
