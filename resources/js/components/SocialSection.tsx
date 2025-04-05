import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
export const SocialSection = () => {
  return <section id="social" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Unisciti alla Community
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            Per chiunque sia interessato a fare due chiacchere, dare
            suggerimenti sulle cose già presenti, cosa vorreste vedere in futuro
            o ricevere aggiornamenti sul gioco, unisciti al discord!
          </p>
          <a href="#" className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 px-6 rounded-md transition">
            <MessageCircleIcon size={24} className="mr-2" />
            Unisciti al Discord
          </a>
        </div>
      </div>
    </section>;
};