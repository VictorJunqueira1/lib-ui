import React, { useState, useEffect } from 'react';
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
                className={`bg-slate-900 ${
                    isOpen ? 'w-[250px]' : 'w-[80px]'
                } h-screen transition-all duration-300 shrink-0`}
            >
                <ul className="list-none p-4 h-screen">
                    <li className="flex justify-between items-center mb-4">
                        <span
                            className={`${isOpen ? 'font-semibold' : 'hidden'} text-white text-lg ml-4`}
                        >
                            SIX UI
                        </span>
                        <button onClick={toggleSidebar} id="toggle-btn">
                            {isOpen ? (
                                <ChevronLeft size={24} className="text-white" />
                            ) : (
                                <ChevronRight size={24} className="text-white ml-3" />
                            )}
                        </button>
                    </li>

                    {menuItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            {item.subItems ? (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(item.label)}
                                        className="flex items-center justify-between gap-4 p-3 rounded hover:bg-gray-800 w-full text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            {item.icon}
                                            <span
                                                className={`${isOpen ? 'block' : 'hidden'} text-gray-200`}
                                            >
                                                {item.label}
                                            </span>
                                        </div>
                                        {isOpen &&
                                            (openSubMenu === item.label ? (
                                                <ChevronUp size={20} className="text-white" />
                                            ) : (
                                                <ChevronDown size={20} className="text-white" />
                                            ))}
                                    </button>
                                    <ul
                                        className={`pl-8 transition-all ${
                                            openSubMenu === item.label ? 'block' : 'hidden'
                                        }`}
                                    >
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href={subItem.href}
                                                    className="block py-4 px-4 hover:bg-gray-800 rounded text-gray-200"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link href={item.href}>
                                    <p className="flex items-center gap-4 p-3 rounded hover:bg-gray-800">
                                        {item.icon}
                                        <span
                                            className={`${isOpen ? 'block' : 'hidden'} text-gray-200`}
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

export default Sidebar;