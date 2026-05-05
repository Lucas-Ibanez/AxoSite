import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-[800px] mx-auto py-20 px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-axo-orange hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Voltar para a página inicial
        </Link>
        
        <h1 className="font-sparo text-4xl md:text-5xl font-bold mb-8">Política de Privacidade</h1>
        <div className="space-y-6 text-axo-muted leading-relaxed">
          <p>
            A sua privacidade é importante para nós. É política da Axo respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Axo, e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
          </p>
          
          <h2 className="text-2xl text-white font-bold mt-10 mb-4">Compromisso do Usuário</h2>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Axo oferece no site e com caráter enunciativo, mas não limitativo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
            <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, apostas desportivas, pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Axo, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
          </ul>

          <p className="mt-8">Esta política é efetiva a partir de Janeiro/2026.</p>
        </div>
      </div>
    </div>
  );
}
