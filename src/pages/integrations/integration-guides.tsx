'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Moon, Menu, ArrowLeft } from 'lucide-react'
import HTMLCSSJSIntegration from './html-css-js'
import NextJSTailwindIntegration from './next-tailwind'
import VueNuxtIntegration from './vue-nuxtjs'
import "@/app/globals.css"
import Image from 'next/image'

export default function IntegrationGuides() {
    const [activeTab, setActiveTab] = useState('html-css-js')
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const tabs = [
        { id: 'html-css-js', label: 'HTML/CSS/JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { id: 'nextjs-tailwind', label: 'Next.js & Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { id: 'vue-nuxtjs', label: 'Vue & Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'html-css-js':
                return <HTMLCSSJSIntegration />
            case 'nextjs-tailwind':
                return <NextJSTailwindIntegration />
            case 'vue-nuxtjs':
                return <VueNuxtIntegration />
            default:
                return <p>Selecione um guia de integração para começar.</p>
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
                <nav className={`w-64 bg-white dark:bg-slate-900 border-r border-t border-slate-200 dark:border-slate-950 p-4 space-y-2 fixed inset-y-0 left-0 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 overflow-y-auto`}>
                    <Button
                        variant="ghost"
                        onClick={() => router.push('/')}
                        className="w-full justify-start text-left mb-4"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para Início
                    </Button>
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
                            <Image src={tab.icon} alt={`${tab.label} icon`} className="mr-2 h-4 w-4" />
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
                                    <h2 className="text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400 flex items-center">
                                        {tabs.find(tab => tab.id === activeTab)?.icon && (
                                            <Image
                                                src={tabs.find(tab => tab.id === activeTab)?.icon!}
                                                alt={`${tabs.find(tab => tab.id === activeTab)?.label} icon`}
                                                className="mr-3 h-8 w-8"
                                                width={32}
                                                height={32}
                                            />
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