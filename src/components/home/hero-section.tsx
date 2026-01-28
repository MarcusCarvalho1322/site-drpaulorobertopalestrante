"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
            {/* Full-Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/hero-speaker.png')" }}
                ></div>

                {/* Dark Overlays - Photo Visible, Text Readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent"></div>

                {/* Subtle Dark Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,22,40,0.25)_100%)]"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 md:px-12 pb-20 md:pb-32 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-3xl space-y-8"
                >
                    {/* Tagline Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-white/80 border border-white/30 rounded-full backdrop-blur-sm">
                            Palestrante
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                        A Mente é o Coração<br />
                        <span className="text-white/80">de toda Empresa</span>
                    </h1>

                    {/* Subtle Divider Line */}
                    <div className="w-24 h-[2px] bg-gradient-to-r from-white/60 to-transparent"></div>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
                        Transforme a performance da sua empresa através da conexão entre mente e coração, que gera mais de 1 Trilhão em prejuízo, por ano, em todo o mundo.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="#contato">
                            <Button
                                size="default"
                                className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-white hover:to-gray-100 text-primary font-medium text-sm px-8 py-3 h-auto rounded-lg shadow-xl transition-all hover:scale-105 border border-white/30"
                            >
                                Agende sua Palestra <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="#sobre">
                            <button
                                className="btn-blue-border text-white border-white/30 hover:border-accent hover:text-white"
                            >
                                Conhecer Dr. Paulo Roberto Souza
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center gap-2 text-white/50">
                    <span className="text-xs tracking-widest uppercase">Role para explorar</span>
                    <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
                </div>
            </motion.div>
        </section>
    );
}
