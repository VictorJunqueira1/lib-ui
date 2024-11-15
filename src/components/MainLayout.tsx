'use client'

import * as React from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import "@/app/globals.css"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ModeToggle } from "@/components/ModeToggle"

interface InnoTechUILayoutProps {
    children: React.ReactNode;
}

export default function InnoTechUILayout({ children }: InnoTechUILayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <div className="flex h-screen flex-col bg-gradient-to-br from-background to-secondary/10">
            {/* Navbar */}
            <nav className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm lg:px-6">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
                        InnoTech UI
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/docs" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Documentação</Link>
                    <Link href="/integration" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Integração</Link>
                    <Link href="/components" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Componentes</Link>
                    <Link href="/support" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Suporte</Link>
                    <ModeToggle />
                    <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                </div>
            </nav>

            {/* Main content area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto border-r bg-background/80 backdrop-blur-md transition-transform duration-200 ease-out lg:static lg:translate-x-0`}
                >
                    <div className={`${isSidebarOpen ? 'h-16' : 'h-0'} flex items-center justify-between px-4 lg:px-6`}>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 lg:hidden">InnoTech UI</span>
                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close Sidebar</span>
                        </Button>
                    </div>
                    <nav className="space-y-2 px-4 py-4">
                        <Link href="/docs" className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                            Documentação
                        </Link>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="integration">
                                <AccordionTrigger className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">Integração</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 px-4">
                                        <Link href="/integrations/html-css" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            HTML, CSS e JS
                                        </Link>
                                        <Link href="/integrations/next-tailwind" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Next.js e Tailwind
                                        </Link>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="components">
                                <AccordionTrigger className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">Componentes</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 px-4">
                                        <Link href="/docs/Navbar" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Navbar
                                        </Link>
                                        <Link href="/docs/Sidebar" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Sidebar
                                        </Link>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Link href="/support" className="block rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                            Suporte
                        </Link>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}