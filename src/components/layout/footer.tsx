import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex flex-col mb-4">
                            <span className="text-2xl font-bold text-white">
                                Dr. Paulo Roberto Souza
                            </span>
                            <span className="text-sm text-white/70 mt-1">
                                Médico, Palestrante e Escritor
                            </span>
                        </div>
                        <p className="text-primary-foreground/80 text-sm max-w-xs leading-relaxed">
                            Transformando eventos corporativos com palestras impactantes sobre saúde, bem-estar e liderança.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-accent">Navegação</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="#sobre" className="text-sm hover:text-white transition-colors">Sobre</Link>
                            <Link href="#palestras" className="text-sm hover:text-white transition-colors">Palestras</Link>
                            <Link href="#midia" className="text-sm hover:text-white transition-colors">Mídia</Link>
                            <Link href="#contato" className="text-sm hover:text-white transition-colors">Orçamento</Link>
                        </nav>
                    </div>

                    {/* Social / Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-accent">Contato</h4>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/drpaulorobertosouza" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:scale-110 transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="mailto:prs.filho@hotmail.com" aria-label="Email" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:scale-110 transition-all">
                                <Mail size={20} />
                            </a>
                            <a href="https://wa.me/5571999814033" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:scale-110 transition-all">
                                <Phone size={20} />
                            </a>
                        </div>
                        <p className="text-xs opacity-70 mt-4">
                            prs.filho@hotmail.com
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
                    <p>&copy; {new Date().getFullYear()} Dr. Paulo Roberto Souza. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
                </div>
            </div>
        </footer>
    );
}
