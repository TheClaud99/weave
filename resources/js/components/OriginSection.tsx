import React from 'react';
export const OriginSection = () => {
  return <section id="origin" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Come nasce Weave
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-900/60 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-full md:w-1/3">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center rounded-lg"></div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg leading-relaxed">
                Weave's Echo inizia nel 2022, fra amici, come una delle nostre
                ennesime homebrew di vari giochi di ruolo, poiché insoddisfatti
                del bilanciamento e delle dinamiche presenti in essi. Nel tempo
                il sistema si è evoluto fino a diventare un gioco a sé stante;
                ciò ci ha dato l'ispirazione, così gli abbiamo dato una sua
                sfumatura ed un suo stile, fino a farlo diventare Weave.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Partendo dall'uso del comune d20 system, caratterizzato da una
            progressione a livelli ed un combattimento a turni, Weave si
            sviluppa partendo da D&D ed introducendo un sistema basato su "Punti
            Azione", ispirato dal videogioco Divinity: Original Sin 2 di Larian
            Studios, assieme all'aggiunta dell' "Energia", una risorsa comune a
            tutti i personaggi che ci permette di bilanciare il gioco nonostante
            la grande varietà delle capacità presenti.
          </p>
        </div>
      </div>
    </section>;
};