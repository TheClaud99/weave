import React from 'react';
type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};
export const TeamSection = () => {
  const team: TeamMember[] = [{
    name: 'Michele Palagi',
    role: 'Game Designer',
    bio: "Laureato all'università di Pisa in Strategia, Management e Controllo, giocatore di giochi di ruolo da oltre 10 anni ed ideatore del sistema di Weave's Echo.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }, {
    name: 'Samuele Soddu',
    role: 'Game Designer',
    bio: 'Imprenditore nel settore del marmo da oltre 5 anni, Game Designer amatoriale per passione da oltre 10 anni ed Ex Game Designer presso Monumenta MMO come lead degli encounter e bilanciamento dal 2017 fino al 2022.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }];
  return <section id="team" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-amber-500 text-center">
          Chi Siamo
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => <div key={index} className="bg-slate-800/60 rounded-lg overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-amber-500 mb-4">{member.role}</p>
                  <p className="text-slate-300">{member.bio}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};