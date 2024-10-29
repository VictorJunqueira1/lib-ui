"use client";
import React from 'react';
import Link from 'next/link';
import { Component, Users, Info } from 'lucide-react';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';

export default function Home() {

    return (
        <div className='min-h-screen font-sans bg-white text-black dark:bg-slate-950 dark:text-white'>
            <header className="border-b border-slate-300 dark:border-slate-800 bg-opacity-80 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
                <Navbar />
            </header>

            <main className="pt-28 max-w-7xl mx-auto px-6 md:px-20 py-10">
                <section className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Descubra a InnoTech UI</h2>
                    <p className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-400">
                        A biblioteca de componentes UI brasileira que transforma sua produtividade!
                    </p>
                    <Link href="/docs">
                        <p className="mt-6 inline-block px-8 py-4 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition">
                            Comece Agora
                        </p>
                    </Link>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Por Que Escolher a InnoTech UI?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Uso Intuitivo",
                                description: "Componentes prontos para uso, eliminando a complexidade da instalação e importação. Basta copiar e colar para começar a usar!",
                                icon: <Component className="h-12 w-12 text-blue-500" />
                            },
                            {
                                title: "Compatibilidade Ampla",
                                description: "Totalmente compatível com Next.js, TypeScript, Tailwind, HTML, CSS, JS, Vue.js e Nuxt.js. Integração fácil em qualquer projeto.",
                                icon: <Users className="h-12 w-12 text-blue-500" />
                            },
                            {
                                title: "Simples e Rápido",
                                description: "A única recomendação é instalar a biblioteca 'npm i lucide-react'. Com isso, você ganha agilidade e eficiência no desenvolvimento.",
                                icon: <Info className="h-12 w-12 text-blue-500" />
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center">
                                <div className="flex items-center justify-center w-16 h-16 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pronto para Começar?</h2>
                    <p className="text-gray-400 mb-6">
                        Junte-se à comunidade InnoTech UI e descubra como podemos simplificar seu trabalho.
                    </p>
                    <Link href="/docs">
                        <p className="inline-block px-8 py-4 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition">
                            Veja a Documentação
                        </p>
                    </Link>
                </section>
            </main>

            <footer className="py-6 dark:bg-slate-950 border-t border-slate-400 dark:border-slate-800 text-center">
                <p className="dark:text-gray-400 text-gray-800">© 2024 InnoTech UI. Feito com ❤️ no Brasil.</p>
            </footer>
        </div>
    );
}