"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Component } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <nav className={`flex justify-between items-center bg-opacity-80 backdrop-blur-sm max-w-7xl mx-auto px-6 md:px-20 py-6 ${theme === 'light' ? 'bg-white text-black' : 'bg-slate-950 text-white'}`}>
            <h1 className="text-3xl font-bold">InnoTech UI</h1>

            <div className="hidden lg:flex gap-8">
                <Link href="/docs" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Documentação</Link>
                <Link href="/docs/installation" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Instalação</Link>
                <Link href="/installation" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Algo 1</Link>
                <Link href="/installation" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Algo 2</Link>
                <Link href="/contact" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Contato</Link>
            </div>

            <div className="block lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <button className="text-gray-400 hover:text-white transition">
                            <Component className="h-6 w-6 text-black dark:text-white" />
                        </button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>InnoTech UI</SheetTitle>
                        </SheetHeader>
                        <div className='border-b border-gray-800'></div>
                        <nav className="flex flex-col gap-4 py-4">
                            <ModeToggle />
                            <Link href="/docs" className="dark:text-gray-400 dark:hover:text-white hover:text-gray-500 transition">Documentação</Link>
                            <Link href="/components" className="dark:text-gray-400 dark:hover:text-white hover:text-gray-500 transition">Componentes</Link>
                            <Link href="/tutorials" className="dark:text-gray-400 dark:hover:text-white hover:text-gray-500 transition">Tutoriais</Link>
                            <Link href="/contact" className="dark:text-gray-400 dark:hover:text-white hover:text-gray-500 transition">Contato</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

            <div className='hidden lg:block'>
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;