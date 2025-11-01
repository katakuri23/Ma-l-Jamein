
import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Sérum Éclat à la Vitamine C',
    category: 'Sérums',
    price: 75.00,
    shortDescription: 'Un sérum puissant pour un teint radieux.',
    description: 'Notre sérum éclat à la Vitamine C est une formule concentrée conçue pour illuminer, raffermir et protéger la peau. Parfait pour tous les types de peau, il combat les signes du vieillissement et redonne de la vitalité.',
    imageUrl: 'https://picsum.photos/seed/serum/800/800',
    gallery: ['https://picsum.photos/seed/serum/800/800', 'https://picsum.photos/seed/serum2/800/800', 'https://picsum.photos/seed/serum3/800/800'],
    ingredients: ['Eau', 'Acide Ascorbique (Vitamine C)', 'Glycérine', 'Acide Hyaluronique', 'Extrait de Thé Vert'],
    howToUse: 'Appliquer 3-4 gouttes sur une peau propre et sèche matin et soir. Faire suivre d\'une crème hydratante.'
  },
  {
    id: 2,
    name: 'Crème Hydratante Intense',
    category: 'Hydratants',
    price: 62.00,
    shortDescription: 'Hydratation profonde et durable pendant 24h.',
    description: 'Une crème riche mais non grasse qui fournit une hydratation intense et durable. Formulée avec des céramides et de l\'acide hyaluronique pour restaurer la barrière cutanée.',
    imageUrl: 'https://picsum.photos/seed/cream/800/800',
    gallery: ['https://picsum.photos/seed/cream/800/800', 'https://picsum.photos/seed/cream2/800/800', 'https://picsum.photos/seed/cream3/800/800'],
    ingredients: ['Eau', 'Beurre de Karité', 'Céramides NP', 'Acide Hyaluronique', 'Niacinamide'],
    howToUse: 'Appliquer généreusement sur le visage et le cou après le sérum.'
  },
  {
    id: 3,
    name: 'Nettoyant Doux Purifiant',
    category: 'Nettoyants',
    price: 38.00,
    shortDescription: 'Nettoie en douceur sans agresser la peau.',
    description: 'Ce nettoyant au pH équilibré élimine efficacement les impuretés, le maquillage et l\'excès de sébum tout en respectant l\'hydratation naturelle de la peau.',
    imageUrl: 'https://picsum.photos/seed/cleanser/800/800',
    gallery: ['https://picsum.photos/seed/cleanser/800/800', 'https://picsum.photos/seed/cleanser2/800/800'],
    ingredients: ['Eau', 'Glycérine', 'Extrait de Camomille', 'Allantoïne'],
    howToUse: 'Masser sur peau humide, puis rincer abondamment.'
  },
  {
    id: 4,
    name: 'Lotion Tonique Apaisante',
    category: 'Toniques',
    price: 45.00,
    shortDescription: 'Calme et prépare la peau pour les soins.',
    description: 'Une lotion sans alcool qui apaise les rougeurs, équilibre le pH de la peau et la prépare à mieux absorber les sérums et crèmes.',
    imageUrl: 'https://picsum.photos/seed/toner/800/800',
    gallery: ['https://picsum.photos/seed/toner/800/800'],
    ingredients: ['Eau de Rose', 'Aloe Vera', 'Extrait de Calendula', 'Panthénol'],
    howToUse: 'Appliquer sur un coton ou directement avec les paumes sur le visage après le nettoyage.'
  },
  {
    id: 5,
    name: 'Masque Nuit Réparateur',
    category: 'Masques',
    price: 68.00,
    shortDescription: 'Régénère la peau pendant votre sommeil.',
    description: 'Ce masque de nuit agit pendant que vous dormez pour réparer, hydrater et repulper la peau. Réveillez-vous avec un teint frais et reposé.',
    imageUrl: 'https://picsum.photos/seed/mask/800/800',
    gallery: ['https://picsum.photos/seed/mask/800/800', 'https://picsum.photos/seed/mask2/800/800'],
    ingredients: ['Eau', 'Squalane', 'Peptides', 'Extrait de Lavande'],
    howToUse: 'Appliquer en couche fine comme dernière étape de votre routine du soir. Rincer le matin.'
  },
  {
    id: 6,
    name: 'Huile Visage Nourrissante',
    category: 'Huiles',
    price: 82.00,
    shortDescription: 'Un cocktail d\'huiles précieuses pour une peau souple.',
    description: 'Légère et à absorption rapide, cette huile visage nourrit en profondeur, améliore l\'élasticité et donne un éclat sain sans laisser de film gras.',
    imageUrl: 'https://picsum.photos/seed/oil/800/800',
    gallery: ['https://picsum.photos/seed/oil/800/800'],
    ingredients: ['Huile de Jojoba', 'Huile d\'Argan', 'Huile de Rose Musquée', 'Vitamine E'],
    howToUse: 'Chauffer 2-3 gouttes dans les paumes et presser délicatement sur le visage.'
  },
  {
    id: 7,
    name: 'Crème Contour des Yeux',
    category: 'Soins Ciblés',
    price: 55.00,
    shortDescription: 'Réduit les cernes et les ridules.',
    description: 'Une crème délicate pour le contour des yeux qui hydrate, illumine et lisse visiblement la zone fragile du regard.',
    imageUrl: 'https://picsum.photos/seed/eyecream/800/800',
    gallery: ['https://picsum.photos/seed/eyecream/800/800'],
    ingredients: ['Eau', 'Caféine', 'Peptides', 'Extrait de Concombre'],
    howToUse: 'Tapoter délicatement une petite quantité autour de l\'œil avec l\'annulaire.'
  },
  {
    id: 8,
    name: 'Exfoliant Doux aux AHA',
    category: 'Exfoliants',
    price: 58.00,
    shortDescription: 'Révèle une peau plus lisse et lumineuse.',
    description: 'Cet exfoliant chimique doux élimine les cellules mortes, affine le grain de peau et améliore l\'éclat sans irritation.',
    imageUrl: 'https://picsum.photos/seed/exfoliant/800/800',
    gallery: ['https://picsum.photos/seed/exfoliant/800/800'],
    ingredients: ['Eau', 'Acide Glycolique', 'Acide Lactique', 'Aloe Vera'],
    howToUse: 'Appliquer sur peau propre 2-3 fois par semaine le soir. Ne pas rincer.'
  },
  {
    id: 9,
    name: 'Protection Solaire SPF 50',
    category: 'Protections Solaires',
    price: 42.00,
    shortDescription: 'Protection à large spectre, fini invisible.',
    description: 'Un écran solaire minéral léger qui protège des rayons UVA/UVB sans laisser de traces blanches. Idéal comme base de maquillage.',
    imageUrl: 'https://picsum.photos/seed/sunscreen/800/800',
    gallery: ['https://picsum.photos/seed/sunscreen/800/800'],
    ingredients: ['Oxyde de Zinc', 'Dioxyde de Titane', 'Niacinamide'],
    howToUse: 'Appliquer généreusement 15 minutes avant l\'exposition au soleil. Renouveler toutes les 2 heures.'
  },
];
