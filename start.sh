#!/bin/bash
# ═══════════════════════════════════════════════════
#   FELY TRAITEUR — Script de démarrage
# ═══════════════════════════════════════════════════

GREEN='\033[0;32m'
GOLD='\033[0;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

clear
echo ""
echo -e "${GOLD}  ╔════════════════════════════════════╗${NC}"
echo -e "${GOLD}  ║     ✦  FELY TRAITEUR  ✦            ║${NC}"
echo -e "${GOLD}  ║   Restaurant & Traiteur · Dakar     ║${NC}"
echo -e "${GOLD}  ╚════════════════════════════════════╝${NC}"
echo ""

# 1. Vérifier Node.js >= 18
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js non trouvé.${NC}"
    echo -e "  Télécharger sur : https://nodejs.org (version 18 ou plus)"
    exit 1
fi
NODE_VER=$(node -v)
echo -e "${GREEN}✓ Node.js $NODE_VER${NC}"

# 2. Installer les dépendances si besoin
if [ ! -d "node_modules" ]; then
    echo -e "${CYAN}→ Installation des dépendances (npm install)...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}✗ Erreur lors de npm install${NC}"
        exit 1
    fi
    echo -e "${GREEN}✓ Dépendances installées${NC}"
else
    echo -e "${GREEN}✓ Dépendances déjà présentes${NC}"
fi

# 3. Créer .env.local si inexistant
if [ ! -f ".env.local" ]; then
    if [ -f ".env.local.example" ]; then
        cp .env.local.example .env.local
        echo ""
        echo -e "${GOLD}  ⚠ IMPORTANT — Configurez .env.local avant de déployer :${NC}"
        echo -e "  ${CYAN}RESEND_API_KEY${NC}  → Votre clé sur resend.com (gratuit)"
        echo -e "  ${CYAN}CONTACT_EMAIL${NC}   → felydiouf8@gmail.com"
        echo ""
    fi
else
    echo -e "${GREEN}✓ .env.local présent${NC}"
fi

echo ""
echo -e "${BOLD}  Pages disponibles :${NC}"
echo -e "  ${CYAN}http://localhost:3000${NC}           Accueil"
echo -e "  ${CYAN}http://localhost:3000/menu${NC}      Menu & Spécialités"
echo -e "  ${CYAN}http://localhost:3000/a-propos${NC}  À propos"
echo -e "  ${CYAN}http://localhost:3000/contact${NC}   Contact & Devis"
echo ""
echo -e "  ${GOLD}☾/☀ Toggle dark/light dans la navbar${NC}"
echo ""
echo -e "${GREEN}→ Démarrage...${NC}"
echo ""

npm run dev
