import React from 'react';
import { BookOpenIcon, UsersIcon, MapIcon } from 'lucide-react';
export const NarrativeSection = () => {
  return <section id="narrative" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Da un punto di vista narrativo
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800/60 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1 flex flex-col items-center text-center">
              <BookOpenIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Storie Coinvolgenti</h3>
              <p>
                Guide linea per costruire esplorazioni attive e scene di dialogo
                coinvolgenti.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <UsersIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Interpretazione</h3>
              <p>
                Esplorazioni, intrighi e dilemmi affrontati attraverso
                l'interpretazione dei personaggi.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <MapIcon size={48} className="text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Creatività</h3>
              <p>
                Ogni personaggio possiede capacità per affrontare situazioni in
                modo creativo.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Qui non troverai regole rigide per risolvere le varie scene, ma
            troverai guide linea per aiutarti a costruire esplorazioni attive e
            scene di dialogo coinvolgenti per le tue sessioni! Esplorazioni,
            intrighi, dilemmi e politica vengono affrontati attraverso
            l'interpretazione diretta dei personaggi, ognuno dei quali possiede
            capacità che può utilizzare per affrontare in modo creativo alcune
            situazioni, dando ad ogni giocatore il suo momento di gloria nella
            narrativa.
          </p>
        </div>
      </div>
    </section>;
};