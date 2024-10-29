"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Headset, Menu, Home, Download, Book, PlusCircle, Info } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import "@/app/globals.css";
import { ModeToggle } from "@/components/ModeToggle";

const components = [
    { title: "Início", href: "/", description: "Volte ao início da página." },
    { title: "Documentação", href: "/docs", description: "Veja como iniciar seus componentes." },
    { title: "Instalação", href: "/docs/installation", description: "Tutorial de instalação." },
    { title: "Suporte", href: "/docs/support", description: "Entre em contato com nosso suporte." },
];

const Installation = () => {
    return (
        <section className="p-4 bg-white dark:bg-slate-900 mt-12 lg:mt-0 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Como Utilizar os Componentes do InnoTech UI</h2>
            <p className="mb-4">
                O InnoTech UI facilita o uso de componentes em seus projetos. Siga os passos abaixo para iniciar sua jornada!
            </p>

            <h3 className="text-xl font-semibold mb-2">1. Instalação do Lucide React</h3>
            <p className="mb-4">
                Para incorporar os ícones do InnoTech UI, comece instalando a biblioteca Lucide React. Execute o seguinte comando em seu terminal:
            </p>
            <code className="block p-2 mb-4 bg-slate-100 dark:bg-slate-800 rounded">
                npm install lucide-react
            </code>

            <h3 className="text-xl font-semibold mb-2">2. Utilização dos Componentes</h3>
            <p className="mb-4">
                Os componentes do InnoTech UI podem ser facilmente copiados e colados em seu projeto. Não é necessário instalar bibliotecas adicionais. Siga estes passos simples:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Clique no botão de copiar ao lado do código do componente desejado.</li>
                <li>Cole o código em seu projeto no local onde deseja que o componente apareça.</li>
                <li>Estilize o componente como preferir, ajustando as classes CSS conforme necessário.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3. Usando a Biblioteca Shadcn</h3>
            <p className="mb-4">
                Para aprimorar ainda mais a estilização de seus componentes, considere utilizar a biblioteca Shadcn. Siga o tutorial abaixo para instalá-la:
            </p>
            <code className="block p-2 mb-4 bg-slate-100 dark:bg-slate-800 rounded">
                npm install shadcn
            </code>
            <p className="mb-4">
                Após a instalação, você poderá usar as classes da Shadcn para melhorar a aparência dos seus componentes de maneira fácil e rápida.
            </p>

            <h3 className="text-xl font-semibold mb-2">Exemplo de Componente</h3>
            <p className="mb-4">
                Aqui está um exemplo de um botão que você pode usar em seu projeto:
            </p>
            <code className="block p-2 mb-4 bg-slate-100 dark:bg-slate-800 rounded">
                {`<button className="bg-blue-600 text-white p-2 rounded">Clique Aqui</button>`}
            </code>
            <p className="mb-4">Sinta-se à vontade para copiar e colar este código em seu projeto e adaptá-lo conforme necessário!</p>
        </section>
    );
};


const InstallationDocs = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <div>
            <div className="hidden lg:block">
                <nav className="relative z-50 w-full bg-white border-b border-slate-200 dark:bg-slate-950 dark:border-slate-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <Link href="/" className="flex ms-2 md:me-24 items-center gap-2">
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">InnoTech UI</span>
                                </Link>
                            </div>
                            <div className="flex gap-4 items-center">
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex">
                    <aside className="w-60 min-h-screen pt-4 bg-white border-r border-slate-200 dark:bg-slate-950 dark:border-slate-700">
                        <div className="h-full px-3 pb-4 overflow-y-auto">
                            <ul className="space-y-2 font-normal text-xl">
                                {components.map(component => (
                                    <li key={component.title}>
                                        <Link href={component.href} className={`flex duration-300 transition-all items-center p-2 rounded-lg dark:text-white ${isActive(component.href)
                                            ? "bg-slate-200 dark:bg-slate-900 dark:text-blue-600"
                                            : "hover:bg-slate-200 hover:dark:bg-slate-900"
                                            }`}>
                                            {component.title === "Início" && <Home className="w-5 h-5 text-blue-700" />}
                                            {component.title === "Documentação" && <Book className="w-5 h-5 text-blue-700" />}
                                            {component.title === "Instalação" && <Download className="w-5 h-5 text-blue-700" />}
                                            {component.title === "Suporte" && <Headset className="w-5 h-5 text-blue-700" />}
                                            <span className="flex-1 ml-2">{component.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                    <main className="min-h-screen p-4 w-full bg-slate-50 dark:bg-slate-900">
                        <Installation />
                    </main>
                </div>
            </div>
            <div className="block lg:hidden min-h-screen">
                <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-md border-b border-slate-200 dark:border-slate-700 dark:bg-slate-950">
                    <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
                        InnoTech UI
                    </Link>
                    <Sheet>
                        <SheetTrigger>
                            <span className="p-3">
                                <Menu size={24} className="text-slate-900 dark:text-white" />
                            </span>
                        </SheetTrigger>
                        <SheetContent className="max-h-screen overflow-y-auto">
                            <SheetHeader className="flex flex-row justify-between mt-6">
                                <SheetTitle className="flex items-center ml-3">InnoTech UI</SheetTitle>
                                <div className="border-b border-gray-800"></div>
                            </SheetHeader>
                            <div className="mt-4 space-y-4">
                                <ModeToggle />
                                {components.map((component) => (
                                    <Link
                                        key={component.title}
                                        href={component.href}
                                        className="block p-3 text-lg font-semibold dark:text-white text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-blue-600 duration-200 rounded-md"
                                    >
                                        {component.title}
                                        <p className="text-sm dark:text-slate-400 text-slate-500">{component.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <main className="pt-16 min-h-screen p-4 w-full bg-slate-50 dark:bg-slate-900">
                    <Installation />
                </main>
            </div>
        </div>
    );
};

export default InstallationDocs;