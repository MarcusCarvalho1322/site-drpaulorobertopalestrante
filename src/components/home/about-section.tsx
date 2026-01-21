"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function AboutSection() {
    const credentials = [
        "Graduação em Medicina - UFBA 2007",
        "Residência em Cardiologia - Hospital Sírio Libanês (SP)",
        "Pós-graduação em Medicina do Estilo de Vida (MG)",
        "MBA em Gestão, Inovação e Serviços em Saúde (PUC RS)",
        "Membro Titular da Sociedade Brasileira de Cardiologia",
        "Membro Titular da Sociedade Brasileira de Ecocardiografia",
        "Diretor Médico na Clínica EVAB",
    ];

    return (
        <section id="sobre" className="py-24 bg-background relative overflow-hidden noise-texture">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Imagem Flutuante */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center items-center"
                    >
                        <img
                            src="/dr-paulo-about.png"
                            alt="Dr. Paulo Roberto Souza"
                            className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Texto e Formação */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">Sobre Dr. Paulo Roberto Souza</h2>
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                        </div>

                        <div className="space-y-4 text-primary/80">
                            <p className="font-medium text-sm md:text-base leading-relaxed">
                                Médico pela UFBA, com mais de 17 anos de experiência, o Dr. Paulo Roberto Souza é uma das vozes mais respeitadas em Saúde Mental e Psicologia Positiva no Brasil.
                            </p>
                            <p className="text-sm md:text-base">
                                Autor, ele combina rigor científico com uma abordagem humanizada, ajudando líderes e organizações a construírem culturas de alto desempenho baseadas no bem-estar real.
                            </p>
                        </div>

                        {/* Credentials List */}
                        <div className="space-y-5">
                            {credentials.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <GraduationCap className="text-primary w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm md:text-base text-primary/90">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Doctor's Quote */}
                        <div className="pt-10 border-t border-primary/10 text-center md:text-left">
                            <p className="text-base md:text-lg italic text-primary/90 leading-relaxed">
                                "A verdadeira transformação começa quando unimos a precisão da ciência com a sensibilidade humana."
                            </p>
                            <p className="text-xs font-bold text-muted-foreground mt-6 tracking-widest uppercase">
                                — Dr. Paulo Roberto Souza
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
