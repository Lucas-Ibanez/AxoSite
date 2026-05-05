import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Termos() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-[800px] mx-auto py-20 px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-axo-orange hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Voltar para a página inicial
        </Link>
        
        <h1 className="font-sparo text-4xl md:text-5xl font-bold mb-8">Termos de Uso</h1>
        <div className="space-y-6 text-axo-muted leading-relaxed">
          <h2 className="text-2xl text-white font-bold mt-10 mb-4">1. Termos</h2>
          <p>
            Ao acessar ao site Axo, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <h2 className="text-2xl text-white font-bold mt-10 mb-4">2. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Axo , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modificar ou copiar os materiais;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Axo;</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>
          <p>
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida pela Axo a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
          </p>

          <h2 className="text-2xl text-white font-bold mt-10 mb-4">3. Isenção de responsabilidade</h2>
          <p>
            Os materiais no site da Axo são fornecidos 'como estão'. Axo não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>

          <h2 className="text-2xl text-white font-bold mt-10 mb-4">4. Limitações</h2>
          <p>
            Em nenhum caso a Axo ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Axo, mesmo que Axo ou um representante autorizado da Axo tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
          </p>

          <h2 className="text-2xl text-white font-bold mt-10 mb-4">5. Precisão dos materiais</h2>
          <p>
            Os materiais exibidos no site da Axo podem incluir erros técnicos, tipográficos ou fotográficos. Axo não garante que qualquer material em seu site seja preciso, completo ou atual. Axo pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Axo não se compromete a atualizar os materiais.
          </p>

          <p className="mt-8">Estes termos são efetivos a partir de Janeiro/2026.</p>
        </div>
      </div>
    </div>
  );
}
