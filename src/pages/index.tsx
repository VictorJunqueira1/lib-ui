'use client'

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Book, Boxes, HeartHandshake } from 'lucide-react'
import "@/app/globals.css"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import MainLayout from "@/components/MainLayout"

export default function InnoTechUILayout() {

    return (
        <>
            <MainLayout>
                <main className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8">
                        <section className="mb-16 text-center">
                            <h1 className="mb-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 md:text-5xl lg:text-6xl">
                                Bem-vindo ao InnoTech UI
                            </h1>
                            <p className="mb-6 text-xl text-muted-foreground md:text-2xl">
                                Uma biblioteca de UI moderna e flexível para criar interfaces bonitas e funcionais com facilidade.
                            </p>
                            <div className="flex flex-col gap-4 md:flex-row justify-center space-x-4">
                                <Button size="lg" asChild>
                                    <Link href="#section-documentation">
                                        Começar <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="#section-components">Explorar Componentes</Link>
                                </Button>
                                <section className="mb-16 text-center">
                                    <Button size="lg" variant="outline" className="w-full" asChild>
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
            </MainLayout>
        </>
    )
}