'use client'

import "@/app/globals.css"
import Sidebar from "@/pages/docs/components/Sidebar";
import MainLayout from "@/components/MainLayout"
import React, { useState } from "react";

export default function NextTailwind() {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(
            `import React, { useState, useEffect } from 'react';
            import Link from 'next/link';
            import {
                Home,
                Grid,
                FolderPlus,
                ListChecks,
                Calendar,
                User,
                ChevronLeft,
                ChevronRight,
                Settings,
                ChevronDown,
                ChevronUp,
            } from 'lucide-react';
            
            interface MenuItem {
                label: string;
                href: string;
                icon?: React.ReactNode;
                subItems?: MenuItem[];
            }
            
            interface SidebarProps {
                children: React.ReactNode;
            }
            
            const Sidebar: React.FC<SidebarProps> = ({ children }) => {
                const [isOpen, setIsOpen] = useState(true);
                const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
            
                const menuItems: MenuItem[] = [
                    { label: 'Home', icon: <Home size={24} className='text-blue-500' />, href: '/' },
                    { label: 'Dashboard', icon: <Grid size={24} className='text-blue-500' />, href: '/' },
                    {
                        label: 'Criar',
                        icon: <FolderPlus size={24} className='text-blue-500' />,
                        href: '#',
                        subItems: [
                            { label: 'Pasta', href: '#' },
                            { label: 'Documento', href: '#' },
                            { label: 'Projeto', href: '#' },
                        ],
                    },
                    {
                        label: 'Lista de Tarefas',
                        icon: <ListChecks size={24} className='text-blue-500' />,
                        href: '#',
                        subItems: [
                            { label: 'Pessoal', href: '#' },
                            { label: 'Trabalho', href: '#' },
                        ],
                    },
                    { label: 'Calendário', icon: <Calendar size={24} className='text-blue-500' />, href: '/' },
                    { label: 'Perfil', icon: <User size={24} className='text-blue-500' />, href: '/' },
                    { label: 'Configurações', icon: <Settings size={24} className='text-blue-500' />, href: '/' },
                ];
            
                const updateSidebarState = () => {
                    const width = window.innerWidth;
                    if (width < 1024) {
                        setIsOpen(false);
                    } else {
                        setIsOpen(true);
                    }
                };
            
                useEffect(() => {
                    updateSidebarState();
                    window.addEventListener('resize', updateSidebarState);
            
                    return () => {
                        window.removeEventListener('resize', updateSidebarState);
                    };
                }, []);
            
                const toggleSidebar = () => {
                    setIsOpen((prev) => {
                        const newState = !prev;
                        if (!newState) {
                            setOpenSubMenu(null);
                        }
                        return newState;
                    });
                };
            
                const toggleSubMenu = (menu: string) => {
                    if (!isOpen) {
                        setIsOpen(true);
                    }
                    setOpenSubMenu(openSubMenu === menu ? null : menu);
                };
            
                return (
                    <div className="flex">
                        <nav
                            className={\`dark:bg-slate-900 bg-slate-50 \${isOpen ? 'w-[250px]' : 'w-[80px]'} h-screen transition-all duration-300 shrink-0\`}
                        >
                            <ul className="list-none p-4 h-screen">
                                <li className="flex justify-between items-center mb-4">
                                    <span
                                        className={\`\${isOpen ? 'font-semibold' : 'hidden'} dark:text-white text-lg ml-4\`}
                                    >
                                        InnoTech UI
                                    </span>
                                    <button onClick={toggleSidebar} id="toggle-btn">
                                        {isOpen ? (
                                            <ChevronLeft size={24} className="dark:text-white" />
                                        ) : (
                                            <ChevronRight size={24} className="dark:text-white ml-3" />
                                        )}
                                    </button>
                                </li>
            
                                {menuItems.map((item, index) => (
                                    <li key={index} className="mb-4">
                                        {item.subItems ? (
                                            <>
                                                <button
                                                    onClick={() => toggleSubMenu(item.label)}
                                                    className="flex items-center justify-between gap-4 p-3 rounded dark:hover:bg-gray-800 w-full text-left"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        {item.icon}
                                                        <span
                                                            className={\`\${isOpen ? 'block' : 'hidden'} dark:text-gray-200\`}
                                                        >
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                    {isOpen &&
                                                        (openSubMenu === item.label ? (
                                                            <ChevronUp size={20} className="dark:text-white" />
                                                        ) : (
                                                            <ChevronDown size={20} className="dark:text-white" />
                                                        ))}
                                                </button>
                                                <ul
                                                    className={\`pl-8 transition-all \${openSubMenu === item.label ? 'block' : 'hidden'}\`}
                                                >
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link
                                                                href={subItem.href}
                                                                className="block py-4 px-4 dark:hover:bg-gray-800 rounded dark:text-gray-200"
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link href={item.href}>
                                                <p className="flex items-center gap-4 p-3 rounded dark:hover:bg-gray-800">
                                                    {item.icon}
                                                    <span
                                                        className={\`\${isOpen ? 'block' : 'hidden'} dark:text-gray-200\`}
                                                    >
                                                        {item.label}
                                                    </span>
                                                </p>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <main className="flex-grow p-4 overflow-auto">{children}</main>
                    </div>
                );
            };
            
            export default Sidebar;`
        )
        alert("Código copiado!")
    }

    return (
        <>
            <MainLayout>
                <main className="flex-1 overflow-y-auto">
                    <h1 className="text-3xl mb-12">Guia de Integração - Next.js, Tailwind e TypeScript</h1>
                    <h1 className="text-xl mb-4">Exemplo do componente:</h1>
                    <div className="max-w-7xl mx-auto bg-gray-800 px-2 py-4">
                        <Sidebar>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium praesentium nulla reiciendis, expedita ea ex quasi quo veniam asperiores et quam ullam nobis? Sed quisquam necessitatibus eveniet facere alias provident.
                        </Sidebar>
                    </div>

                    <p className="py-2 mt-4">Basta apenas clicar no "Copiar" e colar no seu código.</p>
                    <div className="mx-auto bg-gray-900 text-white rounded-lg shadow-md p-6">
                        <div className="flex justify-between items-center">
                            <button onClick={toggleExpand} className="text-blue-400 hover:underline">
                                {isExpanded ? "Recolher código" : "Expandir código"}
                            </button>
                            <button onClick={handleCopy} className="text-green-400 hover:underline">
                                Copiar
                            </button>
                        </div>
                        {isExpanded && (
                            <pre className="whitespace-pre-wrap text-sm overflow-auto mt-4">
                                <code>
                                    {
                                        `import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Home,
    Grid,
    FolderPlus,
    ListChecks,
    Calendar,
    User,
    ChevronLeft,
    ChevronRight,
    Settings,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';

interface MenuItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    subItems?: MenuItem[];
}

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const menuItems: MenuItem[] = [
        { label: 'Home', icon: <Home size={24} className='text-blue-500' />, href: '/' },
        { label: 'Dashboard', icon: <Grid size={24} className='text-blue-500' />, href: '/' },
        {
            label: 'Criar',
            icon: <FolderPlus size={24} className='text-blue-500' />,
            href: '#',
            subItems: [
                { label: 'Pasta', href: '#' },
                { label: 'Documento', href: '#' },
                { label: 'Projeto', href: '#' },
            ],
        },
        {
            label: 'Lista de Tarefas',
            icon: <ListChecks size={24} className='text-blue-500' />,
            href: '#',
            subItems: [
                { label: 'Pessoal', href: '#' },
                { label: 'Trabalho', href: '#' },
            ],
        },
        { label: 'Calendário', icon: <Calendar size={24} className='text-blue-500' />, href: '/' },
        { label: 'Perfil', icon: <User size={24} className='text-blue-500' />, href: '/' },
        { label: 'Configurações', icon: <Settings size={24} className='text-blue-500' />, href: '/' },
    ];

    const updateSidebarState = () => {
        const width = window.innerWidth;
        if (width < 1024) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    useEffect(() => {
        updateSidebarState();
        window.addEventListener('resize', updateSidebarState);

        return () => {
            window.removeEventListener('resize', updateSidebarState);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen((prev) => {
            const newState = !prev;
            if (!newState) {
                setOpenSubMenu(null);
            }
            return newState;
        });
    };

    const toggleSubMenu = (menu: string) => {
        if (!isOpen) {
            setIsOpen(true);
        }
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    return (
        <div className="flex">
            <nav
                className={\`dark:bg-slate-900 bg-slate-50 \${isOpen ? 'w-[250px]' : 'w-[80px]'} h-screen transition-all duration-300 shrink-0\`}
            >
                <ul className="list-none p-4 h-screen">
                    <li className="flex justify-between items-center mb-4">
                        <span
                            className={\`\${isOpen ? 'font-semibold' : 'hidden'} dark:text-white text-lg ml-4\`}
                        >
                            InnoTech UI
                        </span>
                        <button onClick={toggleSidebar} id="toggle-btn">
                            {isOpen ? (
                                <ChevronLeft size={24} className="dark:text-white" />
                            ) : (
                                <ChevronRight size={24} className="dark:text-white ml-3" />
                            )}
                        </button>
                    </li>

                    {menuItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            {item.subItems ? (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(item.label)}
                                        className="flex items-center justify-between gap-4 p-3 rounded dark:hover:bg-gray-800 w-full text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            {item.icon}
                                            <span
                                                className={\`\${isOpen ? 'block' : 'hidden'} dark:text-gray-200\`}
                                            >
                                                {item.label}
                                            </span>
                                        </div>
                                        {isOpen &&
                                            (openSubMenu === item.label ? (
                                                <ChevronUp size={20} className="dark:text-white" />
                                            ) : (
                                                <ChevronDown size={20} className="dark:text-white" />
                                            ))}
                                    </button>
                                    <ul
                                        className={\`pl-8 transition-all \${openSubMenu === item.label ? 'block' : 'hidden'}\`}
                                    >
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href={subItem.href}
                                                    className="block py-4 px-4 dark:hover:bg-gray-800 rounded dark:text-gray-200"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link href={item.href}>
                                    <p className="flex items-center gap-4 p-3 rounded dark:hover:bg-gray-800">
                                        {item.icon}
                                        <span
                                            className={\`\${isOpen ? 'block' : 'hidden'} dark:text-gray-200\`}
                                        >
                                            {item.label}
                                        </span>
                                    </p>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="flex-grow p-4 overflow-auto">{children}</main>
        </div>
    );
};

export default Sidebar;`
                                    }
                                </code>
                            </pre>
                        )}
                    </div>
                </main>
            </MainLayout>
        </>
    )
}