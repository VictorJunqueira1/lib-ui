'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Download, Puzzle, Layers, Headphones, ChevronRight, Sun, Moon, Menu } from 'lucide-react'
import "@/app/globals.css"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    const [activeTab, setActiveTab] = useState('documentation')
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const tabs = [
        { id: 'documentation', label: 'Documentação', icon: BookOpen },
        { id: 'installation', label: 'Instalação', icon: Download },
        { id: 'integration', label: 'Integração', icon: Puzzle },
        { id: 'components', label: 'Componentes', icon: Layers },
        { id: 'support', label: 'Suporte', icon: Headphones },
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'documentation':
                return (
                    <div className="space-y-4">
                        <p className="text-lg">Bem-vindo à documentação completa da InnoTech UI. Aqui você encontrará tudo o que precisa para começar:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['Guias para iniciantes', 'Referência da API', 'Exemplos de código', 'Tutoriais em vídeo'].map((item) => (
                                <li key={item} className="flex items-center space-x-2">
                                    <ChevronRight className="h-5 w-5 text-purple-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-6">
                            Explorar Documentação <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )
            case 'installation':
                return (
                    <div className="space-y-4">
                        <p className="text-lg">Bem-vindo à documentação completa da InnoTech UI. Aqui você encontrará tudo o que precisa para começar:</p>
                        <p>...</p>

                        <Button className="mt-6">
                            Explorar Documentação <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                );
            case 'integration':
                return (
                    <div className="space-y-4">
                        <p className="text-lg">A InnoTech UI é flexível e pode ser integrada com várias tecnologias:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { tech: 'HTML, CSS e JavaScript', icons: ['html5', 'css3', 'javascript'], url: '/integrations/html-css-js' },
                                { tech: 'Next.js e Tailwind', icons: ['nextjs', 'tailwindcss'], url: '/integrations/next-tailwind' },
                                { tech: 'Vue e Nuxt.js', icons: ['vuejs', 'nuxtjs'], url: '/integrations/vue-nuxt' },
                            ].map(({ tech, icons, url }) => (
                                <Link href={url} key={tech}>
                                    <Card
                                        className="p-4 text-center hover:shadow-md transition-shadow bg-slate-950 flex flex-col items-center justify-center h-40 w-full max-w-[200px] mx-auto"
                                    >
                                        <CardContent className="p-0 flex flex-col items-center">
                                            <div className="flex justify-center space-x-2 mb-3">
                                                {icons.map((icon) => (
                                                    <Image
                                                        key={icon}
                                                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                                                        width={1}
                                                        height={1}
                                                        alt={`${icon} icon`}
                                                        className="h-8 w-8 hover:scale-110 duration-300 transition-all"
                                                    />
                                                ))}
                                            </div>
                                            <p className="font-semibold text-sm text-center">{tech}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                        <Button className="mt-6">
                            Ver Guias de Integração <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                );
            case 'components':
                return (
                    <div className="space-y-4">
                        <p className="text-lg">Explore nossa biblioteca de componentes ricos e personalizáveis:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['Botões', 'Formulários', 'Navegação', 'Layouts', 'Tabelas', 'Modais'].map((comp) => (
                                <Card key={comp} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 duration-300 transition-colors cursor-pointer">
                                    <CardContent className="p-0 text-center">
                                        <h3 className="font-semibold mb-2">{comp}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Clique para explorar</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Button className="mt-6">
                            Ver Todos os Componentes <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )
            case 'support':
                return (
                    <div className="space-y-4">
                        <p className="text-lg">Precisa de ajuda? Nossa equipe de suporte está aqui para você:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: '📧', label: 'Email', desc: 'innotechui@gmail.com' },
                                { icon: '💬', label: 'Chat ao vivo', desc: 'Disponível 24/7' },
                                { icon: '📚', label: 'FAQ', desc: 'Respostas rápidas' },
                                { icon: '🤝', label: 'Comunidade', desc: 'Fórum de desenvolvedores' }
                            ].map((item) => (
                                <Card key={item.label} className="p-4 hover:shadow-md transition-shadow">
                                    <CardContent className="p-0 flex items-center space-x-4">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h3 className="font-semibold">{item.label}</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Button className="mt-6">
                            Contatar Suporte <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )
            default:
                return <p>Selecione uma guia para ver o conteúdo.</p>
        }
    }

    if (!mounted) return null

    return (
        <div className="h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300 overflow-hidden">
            <header className="bg-white dark:bg-slate-900 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-4"
                    >
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            InnoTech UI
                        </span>
                    </motion.div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                            <span className="sr-only">Alternar tema</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="h-[1.2rem] w-[1.2rem]" />
                            <span className="sr-only">Abrir menu</span>
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex-grow flex overflow-hidden">
                <nav className={`w-64 bg-white dark:bg-slate-900 border-r  border-t border-slate-200 dark:border-slate-950 p-4 space-y-2 fixed inset-y-0 left-0 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 overflow-y-auto`}>
                    {tabs.map((tab) => (
                        <Button
                            key={tab.id}
                            variant={activeTab === tab.id ? "default" : "ghost"}
                            onClick={() => {
                                setActiveTab(tab.id)
                                setMobileMenuOpen(false)
                            }}
                            className="w-full justify-start text-left"
                        >
                            <tab.icon className="mr-2 h-4 w-4" />
                            {tab.label}
                        </Button>
                    ))}
                </nav>

                <main className="flex-grow p-6 md:p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="bg-white dark:bg-slate-900 shadow-lg border-0">
                                <CardContent className="p-6 md:p-8">
                                    <h2 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400 flex items-center">
                                        {tabs.find(tab => tab.id === activeTab)?.icon && (
                                            React.createElement(tabs.find(tab => tab.id === activeTab)!.icon, { className: "mr-3 h-8 w-8" })
                                        )}
                                        {tabs.find(tab => tab.id === activeTab)?.label}
                                    </h2>
                                    {renderContent()}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    )
}