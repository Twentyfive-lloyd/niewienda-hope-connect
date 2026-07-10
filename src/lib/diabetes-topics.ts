export type TopicSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: { title: string; body: string };
};

export type Topic = {
  slug: string;
  category: "intro" | "prevention" | "practice";
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  intro: { fr: string; en: string };
  sections: { fr: TopicSection[]; en: TopicSection[] };
};

export const topics: Topic[] = [
  {
    slug: "comprendre-le-diabete",
    category: "intro",
    title: { fr: "Comprendre le diabète", en: "Understanding diabetes" },
    excerpt: {
      fr: "Une maladie chronique qui affecte la façon dont le corps régule le sucre dans le sang.",
      en: "A chronic disease that affects how the body regulates blood sugar.",
    },
    intro: {
      fr: "Le diabète est une maladie chronique caractérisée par une glycémie trop élevée. Il touche aujourd'hui des centaines de millions de personnes dans le monde et progresse rapidement en Afrique.",
      en: "Diabetes is a chronic disease characterized by elevated blood sugar. It affects hundreds of millions of people worldwide and is rising rapidly in Africa.",
    },
    sections: {
      fr: [
        {
          heading: "Qu'est-ce que le diabète ?",
          paragraphs: [
            "Le diabète survient lorsque le pancréas ne produit pas suffisamment d'insuline ou lorsque le corps n'utilise pas correctement l'insuline qu'il produit.",
            "L'insuline est l'hormone qui permet au sucre présent dans le sang d'entrer dans les cellules pour y être transformé en énergie.",
          ],
        },
        {
          heading: "Pourquoi est-ce important ?",
          paragraphs: [
            "Un diabète non contrôlé peut entraîner de graves complications : maladies cardiovasculaires, atteintes des reins, des yeux et des nerfs.",
          ],
          callout: { title: "À retenir", body: "Un dépistage précoce et un accompagnement adapté permettent de vivre pleinement avec le diabète." },
        },
      ],
      en: [
        {
          heading: "What is diabetes?",
          paragraphs: [
            "Diabetes occurs when the pancreas does not produce enough insulin, or when the body cannot effectively use the insulin it produces.",
            "Insulin is the hormone that allows blood sugar to enter cells and be turned into energy.",
          ],
        },
        {
          heading: "Why does it matter?",
          paragraphs: [
            "Uncontrolled diabetes can lead to serious complications: cardiovascular disease, kidney damage, eye and nerve problems.",
          ],
          callout: { title: "Key takeaway", body: "Early screening and proper support allow people to live fully with diabetes." },
        },
      ],
    },
  },
  {
    slug: "types-de-diabete",
    category: "intro",
    title: { fr: "Les différents types de diabète", en: "Types of diabetes" },
    excerpt: { fr: "Type 1, type 2 et diabète gestationnel : mieux les distinguer.", en: "Type 1, type 2 and gestational diabetes." },
    intro: {
      fr: "Il existe plusieurs formes de diabète. Chacune a ses causes, ses caractéristiques et sa prise en charge.",
      en: "There are several forms of diabetes. Each has its own causes, features and management.",
    },
    sections: {
      fr: [
        { heading: "Diabète de type 1", paragraphs: ["Souvent diagnostiqué chez l'enfant ou le jeune adulte. Le corps ne produit plus d'insuline. Il nécessite un traitement à l'insuline à vie."] },
        { heading: "Diabète de type 2", paragraphs: ["Le plus fréquent. Le corps produit encore de l'insuline, mais l'utilise mal. Il est fortement lié au mode de vie."] },
        { heading: "Diabète gestationnel", paragraphs: ["Apparaît pendant la grossesse. Un suivi adapté protège la mère et l'enfant."] },
      ],
      en: [
        { heading: "Type 1 diabetes", paragraphs: ["Often diagnosed in children or young adults. The body no longer produces insulin. Requires lifelong insulin therapy."] },
        { heading: "Type 2 diabetes", paragraphs: ["The most common. The body still produces insulin but uses it poorly. Strongly linked to lifestyle."] },
        { heading: "Gestational diabetes", paragraphs: ["Appears during pregnancy. Adapted follow-up protects mother and child."] },
      ],
    },
  },
  {
    slug: "symptomes",
    category: "intro",
    title: { fr: "Les symptômes", en: "Symptoms" },
    excerpt: { fr: "Reconnaître les signes qui doivent alerter.", en: "Recognizing the warning signs." },
    intro: {
      fr: "Les symptômes du diabète peuvent apparaître progressivement et rester longtemps discrets. Les reconnaître permet de consulter rapidement.",
      en: "Diabetes symptoms may appear gradually and remain subtle for a long time. Recognizing them allows early consultation.",
    },
    sections: {
      fr: [
        {
          heading: "Signes à surveiller",
          bullets: [
            "Soif intense et fréquente",
            "Envie d'uriner souvent, y compris la nuit",
            "Fatigue importante et durable",
            "Perte de poids inexpliquée",
            "Vision trouble",
            "Plaies qui cicatrisent lentement",
          ],
          callout: { title: "Quand consulter", body: "Si plusieurs de ces symptômes sont présents, un test de glycémie s'impose sans attendre." },
        },
      ],
      en: [
        {
          heading: "Signs to watch for",
          bullets: [
            "Intense and frequent thirst",
            "Frequent urination, including at night",
            "Deep and lasting fatigue",
            "Unexplained weight loss",
            "Blurred vision",
            "Slow-healing wounds",
          ],
          callout: { title: "When to consult", body: "If several of these symptoms are present, a blood glucose test should be done without delay." },
        },
      ],
    },
  },
  {
    slug: "facteurs-de-risque",
    category: "intro",
    title: { fr: "Les facteurs de risque", en: "Risk factors" },
    excerpt: { fr: "Ce qui augmente le risque de développer un diabète.", en: "What increases the risk of developing diabetes." },
    intro: {
      fr: "Certains facteurs augmentent le risque de développer un diabète. Les connaître, c'est mieux prévenir.",
      en: "Some factors increase the risk of developing diabetes. Knowing them means better prevention.",
    },
    sections: {
      fr: [
        {
          heading: "Facteurs principaux",
          bullets: [
            "Antécédents familiaux",
            "Surpoids ou obésité",
            "Sédentarité",
            "Alimentation déséquilibrée",
            "Hypertension artérielle",
            "Âge (à partir de 45 ans)",
          ],
        },
      ],
      en: [
        {
          heading: "Main factors",
          bullets: [
            "Family history",
            "Overweight or obesity",
            "Sedentary lifestyle",
            "Unbalanced diet",
            "High blood pressure",
            "Age (from 45 years)",
          ],
        },
      ],
    },
  },
  {
    slug: "prevention",
    category: "prevention",
    title: { fr: "La prévention", en: "Prevention" },
    excerpt: { fr: "Des gestes simples pour réduire les risques au quotidien.", en: "Simple habits to reduce daily risks." },
    intro: {
      fr: "La prévention repose sur des habitudes accessibles à tous. L'objectif : préserver sa santé sur le long terme.",
      en: "Prevention relies on habits accessible to everyone. The goal: preserving health for the long run.",
    },
    sections: {
      fr: [
        {
          heading: "Bouger chaque jour",
          paragraphs: ["Au moins 30 minutes d'activité physique modérée par jour aident à réguler la glycémie et à maintenir un poids sain."],
        },
        {
          heading: "Manger équilibré",
          bullets: ["Privilégier les légumes, les céréales complètes, les légumineuses", "Limiter les boissons sucrées et les aliments ultra-transformés", "Boire de l'eau régulièrement"],
          callout: { title: "Conseil", body: "Un dépistage régulier permet une prise en charge précoce et beaucoup plus efficace." },
        },
      ],
      en: [
        { heading: "Move every day", paragraphs: ["At least 30 minutes of moderate physical activity per day helps regulate blood sugar and maintain a healthy weight."] },
        {
          heading: "Eat a balanced diet",
          bullets: ["Favor vegetables, whole grains, legumes", "Limit sugary drinks and ultra-processed foods", "Drink water regularly"],
          callout: { title: "Tip", body: "Regular screening enables early and much more effective care." },
        },
      ],
    },
  },
  {
    slug: "bonnes-pratiques",
    category: "practice",
    title: { fr: "Les bonnes pratiques au quotidien", en: "Best practices in daily life" },
    excerpt: { fr: "Vivre avec le diabète : suivi, alimentation et hygiène de vie.", en: "Living with diabetes: follow-up, nutrition, lifestyle." },
    intro: {
      fr: "Vivre avec le diabète est possible et compatible avec une vie pleine et active. Voici les repères essentiels.",
      en: "Living with diabetes is possible and compatible with a full, active life. Here are essential guidelines.",
    },
    sections: {
      fr: [
        { heading: "Suivi médical", paragraphs: ["Une consultation régulière et un suivi de la glycémie permettent d'ajuster la prise en charge."] },
        { heading: "Vie quotidienne", bullets: ["Prendre son traitement avec régularité", "Soigner les pieds et la peau", "Adopter une bonne hygiène du sommeil", "Réduire le stress"] },
      ],
      en: [
        { heading: "Medical follow-up", paragraphs: ["Regular consultation and blood sugar monitoring help adjust care."] },
        { heading: "Daily life", bullets: ["Take treatment regularly", "Care for feet and skin", "Sleep well", "Reduce stress"] },
      ],
    },
  },
  {
    slug: "faq",
    category: "practice",
    title: { fr: "Questions fréquentes", en: "Frequently asked questions" },
    excerpt: { fr: "Réponses claires aux questions les plus courantes.", en: "Clear answers to the most common questions." },
    intro: {
      fr: "Vous vous posez des questions sur le diabète ? Voici les réponses aux plus fréquentes.",
      en: "Have questions about diabetes? Here are answers to the most common ones.",
    },
    sections: {
      fr: [
        { heading: "Le diabète est-il héréditaire ?", paragraphs: ["Il existe une part héréditaire, surtout pour le type 2. Le mode de vie reste un facteur déterminant."] },
        { heading: "Peut-on guérir du diabète ?", paragraphs: ["Le diabète est une maladie chronique. Une prise en charge adaptée permet toutefois d'en contrôler les effets et de vivre pleinement."] },
        { heading: "Un enfant peut-il être diabétique ?", paragraphs: ["Oui, particulièrement dans le cas du diabète de type 1. Un accompagnement médical spécifique est nécessaire."] },
      ],
      en: [
        { heading: "Is diabetes hereditary?", paragraphs: ["There is a hereditary component, especially for type 2. Lifestyle remains a decisive factor."] },
        { heading: "Can diabetes be cured?", paragraphs: ["Diabetes is a chronic disease. Proper care allows its effects to be controlled and life to be lived fully."] },
        { heading: "Can a child be diabetic?", paragraphs: ["Yes, especially with type 1 diabetes. Specific medical support is needed."] },
      ],
    },
  },
];

export function bannerFor(category: Topic["category"]): { src: string; label: string } {
  switch (category) {
    case "prevention":
      return { src: "/images/img13.png", label: "img13" };
    case "practice":
      return { src: "/images/img14.png", label: "img14" };
    default:
      return { src: "/images/img12.png", label: "img12" };
  }
}

const topicImageOverrides: Record<string, { src: string; label: string }> = {
  "comprendre-le-diabete": { src: "/images/img12.png", label: "img12" },
  "bonnes-pratiques": { src: "/images/img28.png", label: "img28" },
  "faq": { src: "/images/img25.png", label: "img25" },
};

export function imageForTopic(slug: string, idx: number): { src: string; label: string } {
  if (topicImageOverrides[slug]) return topicImageOverrides[slug];
  return { src: `/images/img${12 + idx}.png`, label: `img${12 + idx}` };
}