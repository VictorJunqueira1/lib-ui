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
        <nav className={`flex justify-between items-center max-w-7xl mx-auto px-6 md:px-20 py-6 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-950 text-white'}`}>
            <h1 className="text-3xl font-bold">InnoTech UI</h1>

            <div className="hidden lg:flex gap-8">
                <Link href="/docs" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Documentação</Link>
                <Link href="/components" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Componentes</Link>
                <Link href="/tutorials" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Tutoriais</Link>
                <Link href="/contact" className="text-black hover:text-slate-600 dark:text-gray-100 dark:hover:text-gray-400 transition">Contato</Link>
            </div>

            <div className="block lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <button className="text-gray-400 hover:text-white transition">
                            <Component className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 p-4">
                            <Link href="/docs" className="text-gray-300 hover:text-white transition">Documentação</Link>
                            <Link href="/components" className="text-gray-300 hover:text-white transition">Componentes</Link>
                            <Link href="/tutorials" className="text-gray-300 hover:text-white transition">Tutoriais</Link>
                            <Link href="/contact" className="text-gray-300 hover:text-white transition">Contato</Link>
                        </nav>
                        <ModeToggle />
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