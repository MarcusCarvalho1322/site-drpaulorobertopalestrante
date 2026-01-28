"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Imagem do Livro */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                        style={{ perspective: "1000px" }}
                    >
                        <div className="relative">
                            {/* Sombra/Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur-xl"></div>
                            
                            {/* Imagem */}
                            <img
                                src="/book-coração-equilibrio.jpg"
                                alt="Coração em Equilibrio - Hábitos que salvam Vidas"
                                className="relative w-full max-w-sm h-auto rounded-lg shadow-2xl border border-white/20"
                            />
                        </div>
                    </motion.div>

                    {/* Conteúdo */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
                            <BookOpen className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-accent tracking-widest uppercase">
                                Lançamento Fev/25
                            </span>
                        </div>

                        {/* Título */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                                Coração em <span className="text-accent">Equilíbrio</span>
                            </h2>
                            <p className="text-xl text-white/80 font-medium">
                                Hábitos que Salvam Vidas
                            </p>
                        </div>

                        {/* Descrição */}
                        <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                            <p>
                                Uma obra revolucionária que combina décadas de experiência médica com ciência do comportamento. Dr. Paulo Roberto Souza revela os hábitos fundamentais que transformam a saúde do coração e da mente.
                            </p>
                            <p>
                                Descubra como pequenas mudanças diárias podem prevenir doenças cardíacas e criar uma vida plena baseada no equilíbrio real.
                            </p>
                        </div>

                        {/* Benefícios */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-white/10 rounded-lg border border-white/20 backdrop-blur">
                                <p className="text-sm font-bold text-accent mb-1">+500</p>
                                <p className="text-xs text-white/70">Páginas de conteúdo exclusivo</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-lg border border-white/20 backdrop-blur">
                                <p className="text-sm font-bold text-accent mb-1">17</p>
                                <p className="text-xs text-white/70">Anos de pesquisa clínica</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4 pt-8">
                            <Button
                                size="default"
                                className="bg-accent hover:bg-accent/90 text-slate-900 font-medium px-8 py-3 h-auto rounded-lg transition-all hover:scale-105"
                            >
                                Pré-Encomendar Agora <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="default"
                                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 h-auto rounded-lg"
                            >
                                Saiba Mais
                            </Button>
                        </div>

                        {/* Quote */}
                        <div className="pt-8 border-t border-white/20">
                            <p className="text-sm italic text-white/60">
                                "Este livro é mais que leitura. É um guia prático para transformar sua vida através de hábitos que funcionam."
                            </p>
                            <p className="text-xs font-bold text-accent mt-4 tracking-widest uppercase">
                                — Dr. Paulo Roberto Souza
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
