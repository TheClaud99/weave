import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
type FaqItem = {
  question: string;
  answer: string;
};
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems: FaqItem[] = [{
    question: "Perché scegliere Weave's Echo?",
    answer: "Perché Weave unisce profondità tattica, personalizzazione avanzata ed un'ambientazione viva e dinamica. Il sistema è intuitivo ma ricco di possibilità che lasciano spazio a numerosi stili di gioco."
  }, {
    question: "Come posso contattarvi per qualsiasi cosa, come farvi avere feedback sull'esperienza che ho avuto?",
    answer: 'Puoi contattarci scrivendo alla nostra mail (mail), direttamente su Discord attraverso il nostro canale (link), oppure scrivendoci su (social).'
  }, {
    question: 'Come posso supportare lo sviluppo di Weave?',
    answer: 'Puoi sostenere lo sviluppo del gioco offrendoci un caffè tramite (paypal). Un modo ulteriore per sostenerci è richiedere il contenuto ricevibile via mail; per te è gratuito e così puoi aiutarci a presentarci meglio nella successiva fase editoriale.'
  }, {
    question: 'Il gioco è adatto a principianti? Quanto è complesso imparare le regole?',
    answer: 'Le regole sono intuitive ma le abilità sono tante per cui si consiglia di utilizzare personaggi pregenerati per i nuovi giocatori. Iniziando a giocare, le regole si faranno sempre più chiare.'
  }, {
    question: 'Quando sarà disponibile il gioco completo?',
    answer: 'Il nostro obbiettivo futuro è organizzare una campagna su Kickstarter per finanziare la pubblicazione ed il continuo sviluppo del gioco. In seguito alla campagna sarà reso disponibile il manuale completo.'
  }, {
    question: 'Che tipo di ambientazione devo aspettarmi?',
    answer: "L'ambientazione di Weave è in stile fantasy simil-rinascimentale dove lo sviluppo di arti e scienze sta facendo progredire, anche culturalmente, le civiltà più fiorenti. Rovine di un'epoca dimentica sono sparse per il mondo, attirando l'interesse di studiosi ed arcanisti che cercano di svelarne i segreti."
  }, {
    question: "L'ambientazione è fissa o posso usare la mia?",
    answer: 'Il sistema non ha restrizioni regolistiche dal punto di vista ambientativo. Weave si adatta facilmente ad ogni contesto fantasy, fintanto che nel tuo mondo esiste la magia non avrai problemi.'
  }, {
    question: "È simile a D&D, perché dovrei giocare a Weave's Echo invece che esso?",
    answer: "Weave offre maggior personalizzazione ai personaggi e combattimenti più incentrati sull'uso tattico delle proprie capacità. Qui, i personaggi migliorano man mano che avanzano di livello, anziché andar incontro a grandi salti di potere in certi livelli e piccoli miglioramenti in altri, permettendo una narrativa più coerente della progressione dei personaggi. Inoltre, Weave mantiene un buon livello di bilanciamento anche a livelli alti, permettendo di giocare senza vedere il sistema implodere. Se queste caratteristiche hanno valore per te, dovresti provare Weave!"
  }, {
    question: 'Per iniziare a giocare cosa mi serve?',
    answer: 'Per giocare ti servirà qualche set di dadi, le schede dei personaggi, e ti farà comodo avere una griglia quadrettata per gestire meglio i combattimenti.'
  }, {
    question: 'Posso fare una sessione investigativa su Weave?',
    answer: 'Ovviamente, è un gioco di ruolo. In Weave non ci sono regole meccaniche per risolvere una scena investigativa, ma i personaggi dispongono di capacità utili anche per questo tipo di situazioni.'
  }, {
    question: 'Posso creare razze, classi o percorsi personalizzati?',
    answer: 'Sì, puoi. Non ci sono regole per aiutarti in questo ma classi, razze e percorsi seguono tutte una struttura comparabile che puoi facilmente ricostruire per creare al meglio i tuoi contenuti.'
  }, {
    question: 'Sono previste future espansioni?',
    answer: "Sì, ci sono espansioni che abbiamo in programma, come aggiungere nuovi classi e fornire contenuti per l'ambientazione. L'avvenire di questo dipenderà anche da quanto Weave verrà apprezzato durante la sua pubblicazione."
  }];
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          F.A.Q.
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => <div key={index} className={`bg-slate-900/60 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg shadow-amber-900/20' : ''}`}>
                <button className="w-full px-6 py-4 text-left flex justify-between items-center" onClick={() => toggleItem(index)}>
                  <span className="font-bold text-lg">{item.question}</span>
                  {openIndex === index ? <ChevronUpIcon size={20} className="text-amber-500 flex-shrink-0" /> : <ChevronDownIcon size={20} className="text-amber-500 flex-shrink-0" />}
                </button>
                {openIndex === index && <div className="px-6 pb-4 text-slate-300">
                    <p>{item.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};