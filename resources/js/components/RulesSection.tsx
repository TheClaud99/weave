import React from 'react';
import { SwordIcon, ShieldIcon, CrosshairIcon } from 'lucide-react';
export const RulesSection = () => {
  return <section id="rules" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Da un punto di vista regolistico
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800/60 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1 flex flex-col items-center text-center">
              <SwordIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Combattimento Profondo</h3>
              <p>
                Effettua molti attacchi o uno grande, usa armi e magia insieme o
                solo magia.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <ShieldIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Bilanciamento</h3>
              <p>
                Ogni opzione è calibrata con cura utilizzando matematica e test
                pratici.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <CrosshairIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Personalizzazione</h3>
              <p>
                Numerosi talenti e capacità bilanciate fra loro da poter
                scegliere.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            In Weave le regole sono incentrate sul combattimento e la
            personalizzazione dei personaggi, fornendoti numerosi talenti e
            capacità bilanciate fra di loro da poter scegliere. Qui, il
            combattimento è profondo: puoi effettuare molti attacchi o uno
            grande, ricorrere ad armi e magia o solo alla magia, così come puoi
            scoccare una freccia per poi lanciare via l'arco e caricare il
            nemico, tutto nello stesso turno! Ogni opzione nel gioco è stata
            calibrata con cura ed attenzione utilizzando matematica, statistica
            e test pratici, per far sì che ogni scelta possa essere valida,
            creando un gioco, che pur premiando i più esperti, non impedisce a
            chi crea personaggi in modo spontaneo di poter contribuire appieno
            assieme al resto del gruppo.
          </p>
        </div>
      </div>
    </section>;
};