export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  coverNote: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "comment-choisir-un-bouquet-elegant-pour-son-interieur",
    title: "Comment choisir un bouquet élégant pour son intérieur",
    category: "Conseils",
    date: "Mars 2026",
    readingTime: "4 min",
    excerpt:
      "Un bouquet réussi ne dépend pas seulement des fleurs. Il dépend aussi de la pièce, de la lumière et du rythme visuel que l'on veut installer chez soi.",
    image:
      "https://kalis.com/wp-content/uploads/2025/10/IMG_5255-600x600.jpg",
    coverNote:
      "Des gestes simples pour choisir une composition qui respire juste, sans surcharger l'espace.",
    intro:
      "Chez Kalis, nous pensons un bouquet comme une présence. Il doit dialoguer avec la maison, avec la lumière du jour, avec le silence d'une table ou l'énergie d'une entrée. Avant de choisir une composition, il vaut mieux penser à l'effet recherché qu'à la seule couleur.",
    sections: [
      {
        heading: "Observer la pièce avant les fleurs",
        paragraphs: [
          "Un intérieur très minimal demande souvent une composition souple, avec du relief mais peu de confusion visuelle. À l'inverse, une pièce plus classique peut accueillir un bouquet dense, presque couture, qui assume sa présence.",
          "Nous regardons toujours la hauteur sous plafond, la profondeur de la table, la couleur des murs et la texture des matières autour. Cela aide à choisir une silhouette plutôt qu'une simple palette.",
        ],
      },
      {
        heading: "Choisir une palette qui accompagne",
        paragraphs: [
          "Les teintes poudrées, crème, blanc cassé ou vert olive s'intègrent facilement et donnent beaucoup d'élégance. Les rouges, orangés ou roses profonds fonctionnent très bien aussi, à condition de les laisser respirer avec des espaces de feuillage et quelques fleurs plus légères.",
          "Quand on hésite, il vaut mieux une palette courte mais nuancée qu'un trop-plein de couleurs. L'impression finale paraît tout de suite plus haut de gamme.",
        ],
      },
      {
        heading: "Penser à la vie du bouquet sur plusieurs jours",
        paragraphs: [
          "Un beau bouquet n'est pas seulement photogénique à la livraison. Il doit rester vivant, intéressant et bien dessiné au fil de son ouverture. C'est pour cela que nous aimons les compositions avec plusieurs rythmes de floraison.",
          "En changeant l'eau régulièrement et en recoupant les tiges, on garde plus longtemps cette sensation de fraîcheur. La composition continue alors d'évoluer sans perdre sa tenue.",
        ],
      },
    ],
  },
  {
    slug: "fleurs-de-saison-pour-un-mariage-civil-chic",
    title: "Fleurs de saison pour un mariage civil chic",
    category: "Mariage",
    date: "Février 2026",
    readingTime: "5 min",
    excerpt:
      "Pour un mariage civil, la justesse compte souvent plus que l'abondance. Quelques choix bien posés suffisent à créer une allure mémorielle.",
    image:
      "https://kalis.com/wp-content/uploads/2024/03/image00001-600x600.jpeg",
    coverNote:
      "Comment composer un décor floral chic, léger et photogénique sans tomber dans l'effet cérémonie trop chargée.",
    intro:
      "Le mariage civil appelle une forme de précision. Le lieu est parfois plus sobre, le temps plus court, l'intention plus intime. Cela ne veut pas dire faire moins, mais faire plus juste. Un bouquet bien pensé, un centre de table aérien et quelques fleurs à la boutonnière peuvent suffire à tout installer.",
    sections: [
      {
        heading: "Chercher une élégance simple",
        paragraphs: [
          "Pour ce type de célébration, nous privilégions souvent des fleurs de saison avec de belles tiges et peu d'espèces différentes. Cela donne une ligne nette, plus mode que cérémonielle, et laisse respirer les silhouettes.",
          "Le blanc cassé, le crème, les beiges rosés ou les verts doux fonctionnent très bien. Sur une base neutre, il devient plus facile d'introduire une note plus personnelle, comme un rose ancien ou un ton caramel.",
        ],
      },
      {
        heading: "Penser au bouquet comme à un accessoire",
        paragraphs: [
          "Le bouquet de mariée doit accompagner la tenue sans l'alourdir. Sa taille, sa tenue en main et son mouvement comptent autant que ses fleurs. Un bouquet trop rond ou trop compact peut vite casser l'allure générale.",
          "Nous aimons les compositions allongées, souples, avec quelques lignes qui prolongent le geste. Elles apportent une sophistication immédiate sur les photos sans paraître rigides.",
        ],
      },
      {
        heading: "Faire peu, mais le faire partout",
        paragraphs: [
          "Au lieu de concentrer tout le budget sur un seul décor, il est souvent plus intelligent de parsemer plusieurs petites présences florales. Une table d'accueil, un ruban de voiture, deux compositions à l'intimité du dîner: cela crée un fil visuel continu.",
          "Le résultat est plus cohérent, plus raffiné, et souvent plus marquant qu'un unique point fort isolé.",
        ],
      },
    ],
  },
  {
    slug: "pourquoi-les-fleurs-sechees-ne-sont-plus-un-plan-b",
    title: "Pourquoi les fleurs séchées ne sont plus un plan B",
    category: "Inspiration",
    date: "Janvier 2026",
    readingTime: "3 min",
    excerpt:
      "Longtemps vues comme une alternative, les fleurs séchées sont aujourd'hui un vrai langage décoratif à part entière.",
    image:
      "https://kalis.com/wp-content/uploads/2024/11/image00006-600x600.jpeg",
    coverNote:
      "Matière, tenue, couleurs sourdes: les fleurs séchées offrent une autre temporalité, plus silencieuse et très contemporaine.",
    intro:
      "Les fleurs séchées n'imitent pas les fleurs fraîches. Elles racontent autre chose. Leur beauté est plus mate, plus texturale, souvent plus architecturale. Elles conviennent parfaitement à des intérieurs qui aiment les tonalités calmes et les objets qui durent.",
    sections: [
      {
        heading: "Une présence plus graphique",
        paragraphs: [
          "Les variétés séchées dessinent très bien l'espace. Elles tiennent leur ligne, projettent des ombres intéressantes et créent des compositions plus sculpturales. Cela les rend idéales dans des pièces épurées ou des projets de décoration durable.",
          "Leur palette naturellement poussiéreuse, sablée ou tabac dialogue très bien avec le bois, la pierre, le lin ou les céramiques mates.",
        ],
      },
      {
        heading: "Moins fragiles, mais pas sans soin",
        paragraphs: [
          "Leur solidité apparente ne veut pas dire qu'on peut les oublier. Elles aiment les endroits secs, peu exposés au soleil direct, et demandent d'être manipulées avec douceur pour garder leur forme.",
          "Bien entretenue, une composition séchée peut rester belle plusieurs mois, parfois davantage, en gardant une vraie présence décorative.",
        ],
      },
      {
        heading: "Un choix de style plus qu'un compromis",
        paragraphs: [
          "Aujourd'hui, beaucoup de clients choisissent les fleurs séchées pour leur langage visuel, pas seulement pour leur durée. Elles installent une ambiance plus collectionnée, plus tactile, parfois presque éditoriale.",
          "Dans le bon intérieur, elles deviennent un point d'ancrage très fort sans jamais paraître démonstratives.",
        ],
      },
    ],
  },
  {
    slug: "trois-gestes-pour-faire-durer-un-bouquet-plus-longtemps",
    title: "Trois gestes pour faire durer un bouquet plus longtemps",
    category: "Atelier",
    date: "Décembre 2025",
    readingTime: "2 min",
    excerpt:
      "Quelques réflexes simples changent vraiment la tenue d'un bouquet. Ce sont des gestes d'atelier faciles à refaire chez soi.",
    image:
      "https://kalis.com/wp-content/uploads/2024/04/IMG_2073-600x600.jpg",
    coverNote:
      "Recouper, renouveler, replacer: trois gestes sobres qui prolongent la fraîcheur d'une composition.",
    intro:
      "Lorsqu'un bouquet arrive chez vous, il entre dans un nouvel environnement. Chaleur, eau, lumière et circulation de l'air jouent immédiatement sur sa tenue. Avec quelques habitudes simples, on prolonge très nettement sa beauté.",
    sections: [
      {
        heading: "Recouper dès l'arrivée",
        paragraphs: [
          "Une coupe nette, en biais, permet aux tiges de mieux boire. Nous conseillons de recouper un à deux centimètres dès réception, puis de recommencer quelques jours plus tard si besoin.",
          "Ce geste est simple mais décisif, surtout après un transport ou une livraison.",
        ],
      },
      {
        heading: "Changer l'eau régulièrement",
        paragraphs: [
          "Une eau claire et propre fait une grande différence. Mieux vaut la renouveler souvent plutôt que d'en remettre un peu dans le vase. Le vase lui-même doit rester propre pour éviter que la composition ne fatigue trop vite.",
          "Quand certaines fleurs évoluent plus vite que d'autres, on peut aussi retirer délicatement les tiges fatiguées pour alléger le bouquet.",
        ],
      },
      {
        heading: "Éviter les mauvaises places",
        paragraphs: [
          "Les bouquets n'aiment ni le soleil direct, ni un radiateur, ni un courant d'air trop fort. Une lumière douce et une température stable sont toujours préférables.",
          "Posé sur une console, une table basse ou une grande table de repas, le bouquet garde alors mieux sa présence jour après jour.",
        ],
      },
    ],
  },
];

export const featuredBlogPost = blogPosts[0];
