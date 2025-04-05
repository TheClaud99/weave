import React from 'react';
export const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="bg-slate-900/60 p-8 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="max-w-md mx-auto">
              <img src="images/Logo_2.png" alt="Weave's Echo Logo" className="w-full h-auto" />
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-slate-100">
            Un gioco di ruolo da tavolo strategico e narrativo
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('pdf')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition cursor-pointer">
              Scarica il PDF
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-transparent hover:bg-slate-700 border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-md transition cursor-pointer">
              Scopri di più
            </button>
          </div>
        </div>
      </div>
    </section>;
};