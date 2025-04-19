type TeamMember = {
    name: string;
    role: string;
    bio: string;
    image: string;
};
export const TeamSection = () => {
    const team: TeamMember[] = [
        {
            name: 'Michele Palagi',
            role: 'Game Designer',
            bio: "Laureato all'università di Pisa in Strategia, Management e Controllo, giocatore di giochi di ruolo da oltre 10 anni ed ideatore del sistema di Weave's Echo.",
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        },
        {
            name: 'Samuele Soddu',
            role: 'Game Designer',
            bio: 'Imprenditore nel settore del Marmo da oltre 5 anni, Game Designer amatoriale per passione da oltre 10 anni ed Ex Game Designer presso Monumenta MMO come lead degli encounter e bilanciamento dal 2017 fino al 2022.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        },
        {
            name: 'Caterina Vannucchi',
            role: 'Main Artist',
            bio: 'Laurea in Belle Arti. Uso di tecniche tradizionali, disegno digitale e xilografia. Disegnatrice e appassionata di fumetti. Poliglotta (Italiano, Inglese, Francese, Spagnolo).',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        },
    ];
    return (
        <section id="team" className="bg-slate-900 py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-4xl font-bold text-amber-500">Chi Siamo</h2>
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {team.map((member, index) => (
                            <div key={index} className="overflow-hidden rounded-lg bg-slate-800/60">
                                <div className="relative aspect-[3/2]">
                                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-1 text-2xl font-bold">{member.name}</h3>
                                    <p className="mb-4 text-amber-500">{member.role}</p>
                                    <p className="text-slate-300">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
