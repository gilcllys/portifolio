'use client'
import { useTranslations } from 'next-intl';
import { useState } from 'react'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
    const t = useTranslations('NavBar');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold font-display1">
                    <h1>GILCLLYS COSTA</h1>
                </Link>

                <div className="hidden md:flex space-x-6">
                    <NavLink href="/">{t('work')}</NavLink>
                    <NavLink href="/sobre">{t('about')}</NavLink>
                    <NavLink href="/contato">{t('contact')}</NavLink>
                    <LocaleSwitcher />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-expanded={isOpen}
                    aria-label="Menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menu Mobile com animação */}
            <div className={`
                md:hidden bg-black overflow-hidden
                transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
                ${isOpen ? 'max-h-96 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}
            `}>
                <div className="flex flex-col items-center justify-center">
                    <MobileNavLink href="/">Trabalho</MobileNavLink>
                    <MobileNavLink href="/sobre">Sobre</MobileNavLink>
                    <MobileNavLink href="/contato">Contato</MobileNavLink>
                    <LocaleSwitcher />
                </div>
            </div>
        </nav>
    )
}

// Componente auxiliar para links desktop
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="transition font-special hover:text-gray-300">
            {children}
        </Link>
    )
}

// Componente auxiliar para links mobile
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="block py-3 px-4 font-special w-full text-center hover:bg-gray-800 transition-colors">
            {children}
        </Link>
    )
}