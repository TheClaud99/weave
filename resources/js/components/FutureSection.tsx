import React from 'react';
import { TrendingUpIcon, BookIcon, UsersIcon } from 'lucide-react';
export const FutureSection = () => {
  return <section id="future" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Sviluppi Futuri
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800/60 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1 flex flex-col items-center text-center">
              <TrendingUpIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Espansione Continua</h3>
              <p>Continuo sviluppo con nuovi contenuti e disegni migliorati.</p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <BookIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Manuale Completo</h3>
              <p>
                12 Classi, oltre 40 Percorsi, più di 100 talenti e 400 azioni
                diverse!
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <UsersIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Supporto della Community
              </h3>
              <p>
                Campagna Kickstarter per finanziare la continua espansione del
                progetto.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Il nostro obbiettivo principale è continuare a sviluppare Weave
            aggiungendo sempre più contenuti, disegni migliorati e molto altro;
            per farlo non è sufficiente il solo nostro tempo libero. Perciò, se
            Weave vi piacerà, il nostro obbiettivo futuro sarà organizzare una
            campagna Kickstarter per finanziare la continua espansione del
            progetto, aggiungendo altre creature, classi e storie. Il manuale
            comprenderà 12 Classi, oltre 40 Percorsi, più di 100 talenti e 400
            azioni diverse fra manovre tattiche, incantesimi ed altro!
          </p>
        </div>
      </div>
    </section>;
};