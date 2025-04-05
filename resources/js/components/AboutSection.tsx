import React from 'react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Cosa è Weave
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-900/60 p-8 rounded-lg">
          <p className="text-lg mb-6 leading-relaxed">
            Weave è un gioco di ruolo da tavolo strategico e narrativo
            ambientato in un mondo fantasy simil-rinascimentale dove le terre
            sono ricche di antiche rovine, città in espansione e civiltà che
            entrano in contatto. Qui, i giocatori assumono il ruolo di eroi,
            viaggiatori, studiosi e avventurieri che si immergono in questa
            realtà tanto incantevole quanto pericolosa.
          </p>
          <div className="w-full h-64 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-lg mb-6"></div>
        </div>
      </div>
    </section>;
};