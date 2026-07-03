import { Insight, FAQItem, ServiceDetail } from "./types";

export const INSIGHTS: Insight[] = [
  {
    id: "insight-1",
    category: "Medo",
    title: "O extraordinário vem depois do medo",
    text: "O medo é uma reação de autoproteção natural. No entanto, quando permitimos que ele guie nossas escolhas, começamos a estreitar os horizontes da nossa própria história. O extraordinário não é a ausência total de receios, mas sim a coragem interna de dar o próximo passo, mesmo quando as pernas parecem hesitar.",
    quote: "Que possamos olhar para o medo não como um ponto final, mas como um portal de travessia para quem desejamos nos tornar.",
    readTime: "2 min de leitura"
  },
  {
    id: "insight-2",
    category: "Processo Terapêutico",
    title: "A pressa de se curar e a paciência com o processo",
    text: "Vivemos em uma cultura do imediatismo, que nos cobra soluções rápidas para feridas emocionais profundas que foram construídas ao longo de anos. A terapia nos ensina a desacelerar e a respeitar o nosso próprio tempo. Curar-se não é uma corrida de velocidade, mas sim uma caminhada de paciência, respeito próprio e autocompaixão.",
    quote: "Respeitar o seu tempo é, por si só, um ato profundo de cura.",
    readTime: "3 min de leitura"
  },
  {
    id: "insight-3",
    category: "Autoconhecimento",
    title: "Olhar para dentro exige coragem e suavidade",
    text: "Iniciar o autoconhecimento é como abrir portas de cômodos que passamos muito tempo sem visitar. No início, pode haver poeira e desorganização. O papel da psicologia clínica é fornecer um espaço seguro e sem julgamentos para que possamos, juntos, reorganizar esses espaços internos, compreendendo que todas as nossas partes têm uma história para contar.",
    quote: "Acolher a própria vulnerabilidade é o primeiro passo para a verdadeira força.",
    readTime: "2 min de leitura"
  },
  {
    id: "insight-4",
    category: "Ideias sobre a Vida",
    title: "Presença e conexões na era digital",
    text: "O atendimento online revolucionou o acesso à saúde mental, permitindo conexões genuínas entre diferentes estados e países com absoluto sigilo profissional. Ao mesmo tempo, o atendimento presencial (em Bertioga) preserva o valor da presença física no espaço terapêutico. O mais importante é que a terapia seja um porto seguro para você, independente do formato escolhido.",
    quote: "Onde quer que você esteja, o espaço terapêutico se faz no encontro e no acolhimento.",
    readTime: "2 min de leitura"
  },
  {
    id: "insight-5",
    category: "Superação",
    title: "O peso das expectativas externas",
    text: "Muitas das nossas dores vêm da tentativa constante de corresponder ao roteiro ideal escrito por terceiros: a carreira perfeita, o relacionamento impecável, a postura inabalável. Quando nos permitimos falhar e aceitamos nossa humanidade, tiramos uma armadura pesada que nunca foi nossa obrigação carregar.",
    quote: "Liberte-se da necessidade de ser perfeito para ter o direito de ser feliz.",
    readTime: "3 min de leitura"
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "serv-1",
    title: "Psicoterapia Individual (Online)",
    description: "Sessões realizadas via videochamada em plataforma de saúde segura e criptografada. Oferece a mesma profundidade, sigilo e eficácia do presencial, com a conveniência de realizar de onde você estiver.",
    modality: "Online",
    target: "Jovens e Adultos",
    features: [
      "Flexibilidade de horários",
      "Sem necessidade de deslocamento",
      "Sigilo total garantido pelo CFP",
      "Foco em ansiedade, autoconhecimento e desafios da vida moderna"
    ]
  },
  {
    id: "serv-2",
    title: "Psicoterapia Presencial (Bertioga)",
    description: "Atendimento acolhedor em consultório físico localizado na cidade litorânea de Bertioga/SP. Um ambiente especialmente preparado para desconectar da rotina externa e focar inteiramente na sua saúde mental.",
    modality: "Presencial",
    target: "Jovens e Adultos",
    features: [
      "Ambiente acolhedor e reservado",
      "Localização central em Bertioga",
      "Contato humano presencial no processo de escuta",
      "Disponibilidade para jovens e adultos"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona a primeira sessão?",
    answer: "A primeira sessão é um momento de aproximação. É um espaço para você contar o que te trouxe à terapia, suas principais queixas ou objetivos, e para eu explicar como funciona a minha abordagem de trabalho. Não há necessidade de preparação; apenas venha como você está."
  },
  {
    id: "faq-2",
    question: "Quais são os dias e horários de atendimento?",
    answer: "Os horários dependem da disponibilidade atual de agenda para atendimentos presenciais em Bertioga e sessões online. Você pode consultar a disponibilidade atual clicando no link de agendamento ou enviando uma mensagem por e-mail."
  },
  {
    id: "faq-3",
    question: "O atendimento online é seguro e sigiloso?",
    answer: "Sim, absolutamente. Todas as sessões online são realizadas de acordo com as normas estritas do Conselho Federal de Psicologia (CFP). Recomenda-se que você esteja em um ambiente privado, de preferência usando fones de ouvido, para garantir a sua total privacidade durante o atendimento."
  },
  {
    id: "faq-4",
    question: "Vocês aceitam planos de saúde / convênios?",
    answer: "Trabalho exclusivamente com atendimento particular. No entanto, emito recibos e relatórios de acompanhamento com todas as especificações profissionais (incluindo meu CRP: 06/200154) para que você possa solicitar o reembolso integral ou parcial junto ao seu convênio médico."
  },
  {
    id: "faq-5",
    question: "Como funciona o agendamento?",
    answer: "Você pode agendar sua sessão de forma prática através do meu link oficial do Linktree (que contém opções de contato direto) ou enviar um e-mail para psico.vitorialarissa@gmail.com. Responderei com as opções de horários disponíveis."
  }
];
