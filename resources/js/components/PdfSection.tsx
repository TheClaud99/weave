import { useForm } from '@inertiajs/react';
import { CheckIcon, MailIcon } from 'lucide-react';
import React, { useState } from 'react';
export const PdfSection = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('send-pdf'), {
            onSuccess: () => {
                setSubmitted(true);
            },
            preserveScroll: true,
        });
    };
    return (
        <section id="pdf" className="relative bg-slate-800 py-20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="mb-4 text-center text-4xl font-bold text-amber-500">Scarica il PDF</h2>
                <p className="mb-12 text-center text-xl">Inserisci la tua email per ricevere il PDF di Weave</p>
                <div className="mx-auto max-w-lg rounded-lg bg-slate-900/80 p-8 backdrop-blur-sm">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MailIcon size={20} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className={`block w-full rounded-md border bg-slate-800 py-3 pr-3 pl-10 text-white placeholder-slate-400 focus:ring-2 focus:outline-none ${
                                            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-amber-500'
                                        }`}
                                        placeholder="La tua email"
                                        required
                                    />
                                </div>
                                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer rounded-md bg-amber-500 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-600"
                                >
                                    Ricevi il PDF
                                </button>
                            </div>
                            <p className="text-center text-sm text-slate-400">Riceverai una email con il PDF e le oneshot disponibili</p>
                        </form>
                    ) : (
                        <div className="py-6 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                                <CheckIcon size={32} className="text-green-500" />
                            </div>
                            <h3 className="mb-2 text-2xl font-bold">Grazie!</h3>
                            <p className="mb-4 text-lg">Abbiamo inviato il PDF alla tua email: {email}</p>
                            <p className="text-slate-400">Controlla anche la cartella spam se non lo vedi arrivare.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
