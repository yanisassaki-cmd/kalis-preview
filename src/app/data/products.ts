export type ProductSize = {
  label: string;
  price: string;
  amount?: number;
  note: string;
};

export type ProductAccompanimentVariation = {
  id: string;
  label: string;
  price: string;
  amount: number;
};

export type ProductAccompaniment = {
  id: string;
  name: string;
  price: string;
  amount?: number;
  note: string;
  visual: "bear" | "citronella" | "candle" | "card";
  variationLabel?: string;
  variations?: ProductAccompanimentVariation[];
};

export type Product = {
  name: string;
  slug?: string;
  image: string;
  secondaryImage?: string;
  badge?: string;
  price: string;
  desc: string;
  intro?: string;
  story?: string;
  palette?: string;
  stemCount?: string;
  availability?: string;
  sizes?: ProductSize[];
  highlights?: string[];
  details?: string[];
  care?: string[];
  accompaniments?: ProductAccompaniment[];
};

export const products: Product[] = [
  {
    name: "Bouquet Rose Passion",
    slug: "bouquet-rose-passion",
    image:
      "https://kalis.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-03-at-17.15.48-1-600x600.jpeg",
    secondaryImage:
      "https://kalis.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-19.25.09-e1760533620748-600x600.jpeg",
    badge: "NOUVEAU",
    price: "79 — 159 CHF",
    desc: "Roses premium, composition romantique",
    intro:
      "Une composition travaillée comme un geste de couture florale, entre velours carmin, nuances poudre et feuillage profond.",
    story:
      "Rose Passion a été imaginé comme un bouquet de déclaration, mais sans excès. La silhouette reste ample, aérienne, avec un cœur de roses premium et une finition volontairement souple pour garder un sentiment de fraîcheur et de mouvement.",
    palette: "Rose poudré, rouge framboise, ivoire crème et feuillage olive.",
    stemCount: "Environ 25 à 45 tiges selon la taille choisie.",
    availability: "Composé à l'atelier, disponible en retrait boutique ou livraison Genève.",
    sizes: [
      {
        label: "Signature",
        price: "79 CHF",
        amount: 79,
        note: "Format élégant pour une attention marquante.",
      },
      {
        label: "Atelier",
        price: "119 CHF",
        amount: 119,
        note: "Volume plus généreux, idéal pour une table ou un grand message.",
      },
      {
        label: "Grand Geste",
        price: "159 CHF",
        amount: 159,
        note: "Présence spectaculaire, pensée pour impressionner dès l'arrivée.",
      },
    ],
    highlights: [
      "Roses premium sélectionnées pour leur ouverture lente",
      "Montage souple et asymétrique, signature Kalis",
      "Palette romantique, chic et contemporaine",
    ],
    details: [
      "Fleurs de saison en soutien pour donner relief et profondeur",
      "Ruban textile ton sur ton et finition main à l'atelier",
      "Chaque pièce est unique selon l'arrivage et la maturité des fleurs",
    ],
    care: [
      "Recouper les tiges en biais à réception",
      "Changer l'eau tous les deux jours",
      "Garder le bouquet loin d'une source de chaleur directe",
    ],
    accompaniments: [
      {
        id: "ours-dore",
        name: "Ours en peluche",
        price: "+20 CHF",
        amount: 20,
        note: "Une présence douce et intemporelle pour accompagner le bouquet.",
        visual: "bear",
      },
      {
        id: "citronnelle",
        name: "Bougie à la citronnelle",
        price: "Dès 5 CHF",
        note: "Idéale pour une terrasse ou un dîner d'été, avec plusieurs formats.",
        visual: "citronella",
        variationLabel: "Choisissez votre bougie anti-moustique à la citronnelle",
        variations: [
          {
            id: "citronnelle-mini",
            label: "Petit pot",
            price: "+5 CHF",
            amount: 5,
          },
          {
            id: "citronnelle-duo",
            label: "Format terrasse",
            price: "+9 CHF",
            amount: 9,
          },
          {
            id: "citronnelle-grand",
            label: "Grand format",
            price: "+14 CHF",
            amount: 14,
          },
        ],
      },
      {
        id: "bougie-parfumee",
        name: "Bougie parfumée",
        price: "+30 CHF",
        amount: 30,
        note: "Une pièce parfumée aux notes ambrées pour prolonger l'émotion.",
        visual: "candle",
      },
      {
        id: "ours-pastel",
        name: "Ours en peluche pastel",
        price: "+16 CHF",
        amount: 16,
        note: "Une version plus tendre, parfaite pour une attention délicate.",
        visual: "bear",
      },
      {
        id: "carte",
        name: "Carte de correspondance",
        price: "+3,50 CHF",
        amount: 3.5,
        note: "Ajoutez un mot manuscrit glissé avec le bouquet.",
        visual: "card",
      },
    ],
  },
  {
    name: "Bouquet Sunset",
    image:
      "https://kalis.com/wp-content/uploads/2025/10/Photoroom_20251014_100956-scaled-e1760533178610-600x600.jpg",
    price: "79 — 250 CHF",
    desc: "Tons chauds, floraisons d'automne",
  },
  {
    name: "White Harmony",
    image: "https://kalis.com/wp-content/uploads/2025/10/IMG_5255-600x600.jpg",
    badge: "COUP DE CŒUR",
    price: "79 — 250 CHF",
    desc: "Élégance épurée, blanc et crème",
  },
  {
    name: "Bouquet Passionata",
    image: "https://kalis.com/wp-content/uploads/2021/01/M-rouge-2-600x600.jpg",
    price: "79 — 159 CHF",
    desc: "Roses rouges, intensité & caractère",
  },
  {
    name: "L'Amoureux",
    image:
      "https://kalis.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-19.25.09-e1760533620748-600x600.jpeg",
    price: "79 — 250 CHF",
    desc: "Douceur romantique, tons pastels",
  },
  {
    name: "Roses Blanches",
    image: "https://kalis.com/wp-content/uploads/2024/04/IMG_2073-600x600.jpg",
    price: "30 — 600 CHF",
    desc: "Pureté absolue, tiges 60 cm",
  },
  {
    name: "Passion Éclatante",
    image: "https://kalis.com/wp-content/uploads/2024/11/image00006-600x600.jpeg",
    badge: "SÉCHÉES",
    price: "79 — 159 CHF",
    desc: "Fleurs séchées, durabilité & poésie",
  },
  {
    name: "Piqué Pastel",
    image: "https://kalis.com/wp-content/uploads/2024/03/image00001-600x600.jpeg",
    price: "120 — 250 CHF",
    desc: "Arrangement de table, douceur florale",
  },
];

export const featuredProduct = products[0];
