export interface Insight {
  id: string;
  category: "Medo" | "Autoconhecimento" | "Superação" | "Processo Terapêutico" | "Ideias sobre a Vida";
  title: string;
  text: string;
  quote?: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  modality: "Presencial" | "Online" | "Ambos";
  target: string;
  features: string[];
}
