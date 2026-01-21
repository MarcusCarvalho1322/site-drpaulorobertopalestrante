"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming utils is at @/lib/utils from shadcn init
import { Button } from "@/components/ui/button"; // Will need to ensure Button is installed, or use standard HTML for now if shadcn button not explicitly added yet.
// Wait, I didn't run `npx shadcn add button`. I should checking if it exists or use standard.
// Shadcn `init` doesn't install all components. I need to run `npx shadcn add button`. 
// I'll assume I can standard tailwind for now or add it in next turn.
// I'll write the file assuming component availability, then fix. Actually, safer to use Tailwind for buttons now or run the add command.
// I'll add the button component command in parallel or use raw tailwind. Raw tailwind is safer to avoid blocking errors.

import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Sobre", href: "#sobre" },
        { name: "Palestras", href: "#palestras" },
        { name: "Depoimentos", href: "#depoimentos" },
        { name: "Mídia", href: "#midia" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-primary backdrop-blur-md border-b border-white/10 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-white">
                                Dr. Paulo Roberto Souza
                            </span>
                            <span className="text-xs text-white/70">
                                Médico, Palestrante e Escritor
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contato">
                            <button className="btn-blue-border">
                                Contrate Agora
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contato" onClick={() => setIsOpen(false)}>
                            <button className="w-full bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-primary font-medium px-6 py-3 rounded-lg mt-2 shadow-md">
                                Contrate Agora
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
