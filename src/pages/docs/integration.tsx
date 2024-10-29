"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Headset, Menu, Home, Download, Book, Puzzle, Workflow } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import "@/app/globals.css";
import { ModeToggle } from "@/components/ModeToggle";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const components = [
    { title: "Início", href: "/", description: "Volte ao início da página." },
    { title: "Documentação", href: "/docs", description: "Veja como iniciar seus componentes." },
    { title: "Instalação", href: "/docs/installation", description: "Tutorial de instalação." },
    { title: "Integração", href: "/docs/integration", description: "Tutorial de instalação." },
    { title: "Componentes", href: "/docs/components", description: "Confira os componentes." },
    { title: "Suporte", href: "/support", description: "Entre em contato com nosso suporte." },
];

const Installation = () => {
    return (
        <section className="p-4 bg-white dark:bg-slate-900 mt-12 lg:mt-0">
            <Breadcrumb>
                <BreadcrumbList className="flex items-center mb-6 text-xl">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="text-gray-600 dark:text-gray-300">Início</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Guia de Integrações</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-4xl font-bold mb-4">Guia de Integrações do InnoTech UI</h2>
            <p>...</p>
        </section>
    );
};


const IntegrationDocs = () => {
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
                    <aside className="w-80 min-h-screen pt-4 bg-white border-r border-slate-200 dark:bg-slate-950 dark:border-slate-700">
                        <div className="h-screen px-3 pb-4 overflow-y-auto">
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
                                            {component.title === "Integração" && <Workflow className="w-5 h-5 text-blue-700" />}
                                            {component.title === "Componentes" && <Puzzle className="w-5 h-5 text-blue-700" />}
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

export default IntegrationDocs;