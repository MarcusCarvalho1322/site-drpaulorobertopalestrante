"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contato" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/20 rounded-full"></div>
            </div>

            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Text Info */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">
                            Vamos criar algo <span className="text-accent underline decoration-primary decoration-4 underline-offset-4">memorável</span> juntos?
                        </h2>
                        <p className="text-lg text-primary-foreground/80 leading-relaxed">
                            Preencha o formulário para verificar disponibilidade e receber um orçamento personalizado.
                        </p>

                        <div className="space-y-6 pt-8">
                            <div className="border-l-4 border-accent pl-6 py-2">
                                <h4 className="text-xl font-bold text-white">Telefone / WhatsApp</h4>
                                <p className="text-white/80">(71) 99981-4033</p>
                            </div>
                            <div className="border-l-4 border-accent pl-6 py-2">
                                <h4 className="text-xl font-bold text-white">E-mail</h4>
                                <p className="text-white/80">prs.filho@hotmail.com</p>
                            </div>
                            <div className="border-l-4 border-accent pl-6 py-2">
                                <h4 className="text-xl font-bold text-white">Instagram</h4>
                                <p className="text-white/80">@drpaulorobertosouza</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-background text-foreground p-8 rounded-2xl shadow-2xl border-t-4 border-primary relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10"></div>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input id="name" placeholder="Seu nome" className="bg-muted/50" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Corporativo</Label>
                                    <Input id="email" type="email" placeholder="nome@empresa.com" className="bg-muted/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                                    <Input id="phone" placeholder="(11) 99999-9999" className="bg-muted/50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Empresa / Evento</Label>
                                <Input id="company" placeholder="Nome da empresa ou evento" className="bg-muted/50" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="date">Data Prevista</Label>
                                    <Input id="date" type="date" className="bg-muted/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="budget">Expectativa de Público</Label>
                                    <Input id="budget" placeholder="Ex: 500 pessoas" className="bg-muted/50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="details">Detalhes Adicionais</Label>
                                <Textarea id="details" placeholder="Conte um pouco sobre o objetivo do evento..." className="bg-muted/50 min-h-[100px]" />
                            </div>

                            <Button className="w-full bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-primary font-medium text-base py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]">
                                Solicitar Orçamento <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
