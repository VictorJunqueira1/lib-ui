'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Book, Boxes, HeartHandshake, Menu, X } from 'lucide-react'
import "@/app/globals.css"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ModeToggle } from "@/components/ModeToggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function InnoTechUILayout() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <div className="flex h-screen flex-col bg-gradient-to-br from-background to-secondary/10">
            {/* Navbar */}
            <nav className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm lg:px-6">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                    <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
                        InnoTech UI
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/docs" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Documentação</Link>
                    <Link href="/integration" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Integração</Link>
                    <Link href="/components" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Componentes</Link>
                    <Link href="/support" className="hidden text-sm font-medium hover:text-primary transition-colors lg:block">Suporte</Link>
                    <ModeToggle />
                </div>
            </nav>

            {/* Main content area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto border-r bg-background/80 backdrop-blur-md transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
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
                                        <Link href="/components/buttons" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Botões
                                        </Link>
                                        <Link href="/components/tables" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Tabelas
                                        </Link>
                                        <Link href="/components/forms" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Formulários
                                        </Link>
                                        <Link href="/components/modals" className="block rounded-lg px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                                            Modais
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
                        <section className="mb-16 text-center">
                            <h1 className="mb-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 md:text-5xl lg:text-6xl">
                                Bem-vindo ao InnoTech UI
                            </h1>
                            <p className="mb-6 text-xl text-muted-foreground md:text-2xl">
                                Uma biblioteca de UI moderna e flexível para criar interfaces bonitas e funcionais com facilidade.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Button size="lg" asChild>
                                    <Link href="#section-documentation">
                                        Começar <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="#section-components">Explorar Componentes</Link>
                                </Button>
                                <section className="mb-16 text-center">
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="https://github.com/seu-repositorio/inno-tech-ui" target="_blank">
                                            <GitHubLogoIcon className="mr-2 h-5 w-5 text-white" />
                                            Star on GitHub
                                        </Link>
                                    </Button>
                                </section>
                            </div>
                        </section>
                        <section className="mb-16">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <Book className="h-10 w-10 text-blue-600 mb-2" />
                                        <CardTitle>Documentação</CardTitle>
                                        <CardDescription>Aprenda como usar o InnoTech UI com nossa documentação detalhada.</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button variant="link" asChild>
                                            <Link href="#section-documentation">Leia a documentação completa</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <Boxes className="h-10 w-10 text-blue-600 mb-2" />
                                        <CardTitle>Componentes</CardTitle>
                                        <CardDescription>Explore nossa vasta biblioteca de componentes reutilizáveis.</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button variant="link" asChild>
                                            <Link href="#section-components">Veja os componentes disponíveis</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <HeartHandshake className="h-10 w-10 text-blue-600 mb-2" />
                                        <CardTitle>Suporte</CardTitle>
                                        <CardDescription>Obtenha ajuda e suporte da nossa comunidade ativa.</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button variant="link" asChild>
                                            <Link href="#section-support">Fale com o suporte</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </section>
                        <section id="section-support" className="mb-16">
                            <h2 className="text-3xl font-bold mb-6">Suporte</h2>
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="mb-4 text-lg text-muted-foreground">
                                        Se você tiver alguma dúvida ou precisar de ajuda, nossa comunidade está pronta para te ajudar. Você pode encontrar a documentação completa, tutoriais, e um fórum de suporte para compartilhar suas dúvidas e soluções.
                                    </p>
                                    <p className="text-lg text-muted-foreground">
                                        Para entrar em contato com a equipe de suporte, acesse nossa página de ajuda ou entre no fórum da comunidade.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild>
                                        <Link href="/support">Acessar Suporte</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}