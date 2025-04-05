import React, { useState } from 'react';
import { MailIcon, CheckIcon } from 'lucide-react';
export const PdfSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    // For now, we'll just simulate a successful submission
    setSubmitted(true);
  };
  return <section id="pdf" className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-amber-500 text-center">
          Scarica il PDF
        </h2>
        <p className="text-xl text-center mb-12">
          Inserisci la tua email per ricevere il PDF di Weave
        </p>
        <div className="max-w-lg mx-auto bg-slate-900/80 p-8 rounded-lg backdrop-blur-sm">
          {!submitted ? <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon size={20} className="text-slate-400" />
                  </div>
                  <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full pl-10 pr-3 py-3 border border-slate-600 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="La tua email" required />
                </div>
              </div>
              <div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-md transition cursor-pointer">
                  Ricevi il PDF
                </button>
              </div>
              <p className="text-sm text-slate-400 text-center">
                Riceverai una email con il PDF e le oneshot disponibili
              </p>
            </form> : <div className="text-center py-6">
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckIcon size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Grazie!</h3>
              <p className="text-lg mb-4">
                Abbiamo inviato il PDF alla tua email: {email}
              </p>
              <p className="text-slate-400">
                Controlla anche la cartella spam se non lo vedi arrivare.
              </p>
            </div>}
        </div>
      </div>
    </section>;
};