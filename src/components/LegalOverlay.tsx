import React, { useEffect } from "react";
import { X, ArrowLeft, Shield, FileText } from "lucide-react";
import { motion } from "motion/react";

interface LegalOverlayProps {
  documentType: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalOverlay({ documentType, onClose }: LegalOverlayProps) {
  // Prevent body scrolling when the overlay is open
  useEffect(() => {
    if (documentType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [documentType]);

  if (!documentType) return null;

  const isPrivacy = documentType === "privacy";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-brand-beige overflow-y-auto flex flex-col min-h-screen text-left"
    >
      {/* Top Banner / Navigation */}
      <div className="sticky top-0 bg-brand-beige/95 backdrop-blur-md border-b border-brand-sage-100 px-4 py-4 sm:py-5 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-brand-sage-800 hover:text-brand-terracotta transition-colors text-sm font-sans font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </button>
          
          <button
            onClick={onClose}
            className="p-1.5 text-brand-sage-800 hover:text-brand-terracotta hover:bg-brand-sage-50 rounded-full transition-all cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Document Body */}
      <div className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-brand-sage-100 text-brand-sage-700 rounded-xl">
            {isPrivacy ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <span className="font-sans text-xs tracking-widest text-brand-terracotta uppercase font-semibold">
              Documentação Legal
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-light text-brand-sage-800 tracking-tight mt-1">
              {isPrivacy ? "Política de Privacidade" : "Termos de Uso"}
            </h1>
          </div>
        </div>

        <p className="font-sans text-xs text-brand-sage-600 mb-10 pb-6 border-b border-brand-sage-100">
          Última atualização: Julho de 2026 • Em conformidade com a Lei Geral de Proteção de Dados (LGPD) • Consultório de Psicologia Vitória Larissa
        </p>

        <div className="space-y-8 font-sans text-brand-sage-800/90 leading-relaxed font-light text-sm sm:text-base">
          {isPrivacy ? (
            // --- PRIVACY POLICY ---
            <>
              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  1. Introdução e Compromisso
                </h2>
                <p>
                  A privacidade e a proteção dos seus dados pessoais são valores fundamentais no meu exercício profissional. Como Psicóloga Clínica (inscrita no CRP/SP sob o nº 06/200154), assumo o compromisso ético de resguardar o sigilo e a segurança de todas as informações compartilhadas por pacientes e visitantes deste site, em estrita consonância com o Código de Ética Profissional do Psicólogo e com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/18).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  2. Coleta de Dados Pessoais
                </h2>
                <p>
                  Coletamos apenas as informações estritamente necessárias para viabilizar o seu contato, agendamento de consultas ou responder às suas mensagens espontâneas.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Dados de Contato:</strong> Nome completo, endereço de e-mail, número de WhatsApp/telefone e mensagem enviada por meio do formulário de contato ou direcionamento para os botões de atendimento.
                  </li>
                  <li>
                    <strong>Dados Clínicos e de Triagem:</strong> Informações sobre sintomas, motivação e histórico, as quais são protegidas sob o mais absoluto <strong>sigilo profissional</strong> e jamais são compartilhadas ou armazenadas em servidores públicos desprotegidos.
                  </li>
                  <li>
                    <strong>Dados de Navegação:</strong> Informações básicas de acesso como endereço IP, navegador, páginas visitadas e tempo de permanência coletados de forma anônima para aprimorar o desempenho técnico do site.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  3. Finalidade do Uso das Informações
                </h2>
                <p>
                  As informações pessoais fornecidas no site possuem finalidades claras e restritas:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Viabilizar o agendamento de consultas psicológicas presenciais ou online;</li>
                  <li>Responder a dúvidas, feedbacks ou pedidos de informação enviados através do e-mail ou formulário;</li>
                  <li>Cumprir obrigações legais, regulatórias ou administrativas em conformidade com o Conselho Regional de Psicologia;</li>
                  <li>Otimizar a sua experiência de navegação técnica dentro do nosso domínio.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  4. Uso de Cookies
                </h2>
                <p>
                  Este site utiliza cookies apenas para garantir o correto funcionamento das páginas e registrar estatísticas de tráfego de maneira agregada e anônima. Você pode desativar o uso de cookies a qualquer momento ajustando as configurações de privacidade do seu navegador, o que não afetará de forma substancial a navegação no site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  5. Proteção de Dados e Armazenamento Seguro
                </h2>
                <p>
                  Empregamos medidas técnicas organizacionais de segurança da informação adequadas para proteger os seus dados pessoais contra acessos não autorizados, perdas, destruições ou alterações indesejadas. Lembramos que os dados que constituem o prontuário psicológico são confidenciais por força de lei e seguem regras estritas de armazenamento criptografado e seguro, conforme as resoluções vigentes do Conselho Federal de Psicologia (CFP).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  6. Direitos do Titular dos Dados
                </h2>
                <p>
                  De acordo com a LGPD, você possui plenos direitos sobre os seus dados pessoais. A qualquer momento, você poderá solicitar:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Confirmação da existência de tratamento de dados;</li>
                  <li>Acesso gratuito e simplificado aos seus dados em nosso poder;</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>Eliminação dos dados pessoais tratados com o seu consentimento, exceto quando o armazenamento for exigido por dever legal ou regulamentar do prontuário médico/psicológico;</li>
                  <li>Revogação do consentimento para contatos futuros de agendamento.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  7. Responsabilidades e Limitações
                </h2>
                <p>
                  Nossa responsabilidade é restrita ao tratamento ético e legal dos dados coletados diretamente sob este domínio. Links externos (como redes sociais ou plataformas de terceiros) possuem suas próprias políticas, pelas quais não podemos nos responsabilizar de forma direta. O usuário é corresponsável por garantir a integridade dos dados inseridos nos campos de digitação.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  8. Alterações Futuras e Contato
                </h2>
                <p>
                  Esta política pode passar por atualizações periódicas para se adequar a novas diretrizes do CFP ou alterações legislativas na LGPD. Toda alteração relevante será devidamente identificada com a data de sua revisão no topo desta página.
                </p>
                <p className="mt-4">
                  Para exercer seus direitos de titular de dados ou esclarecer dúvidas, entre em contato diretamente com a encarregada do tratamento de dados:
                </p>
                <div className="bg-brand-sage-50/60 p-4 rounded-xl border border-brand-sage-200 mt-3 text-sm">
                  <p><strong>Encarregada:</strong> Vitória Larissa (Psicóloga Clínica)</p>
                  <p><strong>E-mail de Contato:</strong> <a href="mailto:psico.vitorialarissa@gmail.com" className="text-brand-terracotta hover:underline font-normal">psico.vitorialarissa@gmail.com</a></p>
                </div>
              </section>
            </>
          ) : (
            // --- TERMS OF USE ---
            <>
              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  1. Aceitação dos Termos
                </h2>
                <p>
                  Ao acessar e utilizar este site institucional pertencente à Psicóloga Clínica Vitória Larissa (CRP: 06/200154), você concorda de maneira livre e informada em cumprir com os presentes Termos de Uso, bem como com todas as leis e regulamentos aplicáveis à navegação na internet e à prestação de serviços digitais. Se você não concordar com qualquer termo aqui descrito, por favor, encerre a utilização deste site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  2. Uso do Conteúdo e Propriedade Intelectual
                </h2>
                <p>
                  Todo o conteúdo disponibilizado neste site — incluindo textos informativo-clínicos, artigos, layout visual, fotografias autorais, logotipos, ideias e marcas registradas — é de propriedade exclusiva da profissional Vitória Larissa ou está sob licença autorizada de uso, sendo protegido pelas leis brasileiras de direitos autorais e propriedade intelectual.
                </p>
                <p>
                  É estritamente proibida a reprodução, cópia, distribuição, modificação ou uso comercial de qualquer parte do conteúdo sem o consentimento formal e por escrito da titular.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  3. Limitação de Responsabilidade
                </h2>
                <p>
                  O material e os artigos publicados aqui possuem finalidade exclusivamente educativa e informativa sobre saúde mental e psicologia clínica. O conteúdo deste site <strong>não substitui em hipótese alguma</strong> o diagnóstico profissional, acompanhamento psicoterapêutico ou aconselhamento individualizado.
                </p>
                <p>
                  Para suporte terapêutico individualizado, é fundamental agendar uma sessão formal de psicoterapia através dos canais de agendamento disponíveis (WhatsApp ou e-mail).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  4. Diretrizes de Uso e Links de Terceiros
                </h2>
                <p>
                  O usuário compromete-se a utilizar o site de forma ética, respeitosa e lícita, não inserindo dados falsos ou maliciosos nos formulários de contato.
                </p>
                <p>
                  Este site pode indicar links para redes sociais (como o perfil oficial do Instagram) ou canais de conversa (como o aplicativo WhatsApp). O uso destas plataformas externas é regido pelos termos de uso e políticas de privacidade específicos destas respectivas empresas, sobre os quais a psicóloga não detém controle ou ingerência.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  5. Modificações do Serviço e dos Termos
                </h2>
                <p>
                  A proprietária do site reserva-se o direito de, a qualquer momento e sem aviso prévio, alterar, suspender ou descontinuar partes do site, bem como revisar estes Termos de Uso e a respectiva Política de Privacidade para refletir alterações regulatórias, profissionais ou de novas leis em território nacional.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg sm:text-xl font-medium text-brand-sage-800">
                  6. Legislação Aplicável e Foro
                </h2>
                <p>
                  Estes Termos são regidos e interpretados sob as leis vigentes na República Federativa do Brasil. Quaisquer disputas, litígios ou questionamentos decorrentes do uso do site que não puderem ser solucionados de forma amigável serão submetidos ao foro da Comarca de Bertioga, Estado de São Paulo.
                </p>
                <p className="mt-4">
                  Se você deseja obter esclarecimentos adicionais, sinta-se à vontade para nos enviar um e-mail em:
                </p>
                <div className="bg-brand-sage-50/60 p-4 rounded-xl border border-brand-sage-200 mt-3 text-sm">
                  <p><strong>E-mail para esclarecimentos:</strong> <a href="mailto:psico.vitorialarissa@gmail.com" className="text-brand-terracotta hover:underline font-normal">psico.vitorialarissa@gmail.com</a></p>
                </div>
              </section>
            </>
          )}
        </div>

        {/* Closing Button */}
        <div className="mt-16 pt-8 border-t border-brand-sage-100 flex justify-center">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 bg-brand-sage-600 hover:bg-brand-sage-700 text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 btn-shadow cursor-pointer"
          >
            Compreendido, voltar ao site
          </button>
        </div>
      </div>
    </motion.div>
  );
}
