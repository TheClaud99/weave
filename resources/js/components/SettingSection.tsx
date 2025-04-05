import React from 'react';
export const SettingSection = () => {
  return <section id="setting" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Da un punto di vista ambientativo
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                Weave è ambientato in un mondo fantasy simil-rinascimentale dove
                tecnica, arte e scienza stanno vivendo un rapido avanzamento
                culturale. I primi galeoni vengono progettati mentre gli
                artificieri apprendono come lavorare la scoppiopietra per
                ricavarne munizioni. La magia dei tempi antichi non è ancora
                stata pienamente compresa dagli studiosi, mentre gli incantatori
                si inventano nuovi modi di utilizzarla.
              </p>
            </div>
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1579492450119-80542d516179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-lg"></div>
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-lg order-4 md:order-3"></div>
            <div className="bg-slate-900/60 p-8 rounded-lg order-3 md:order-4">
              <p className="text-lg leading-relaxed">
                Questo mondo, ricolmo di rovine di un'epoca remota, racchiude
                numerosi enigmi che ancora attendono di essere svelati; le
                università finanziano gruppi di ricerca mentre la politica fra
                le nazioni è tesa su chi ha il diritto di esplorare certe terre.
                Fra misteri e progresso, fra commercio e magia, le rotte che
                uniscono le grandi città si districano fra tane di mostri e
                luoghi selvaggi richiedendo avventurieri a supporto dei lunghi
                viaggi. Chi sarai in questo mondo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};