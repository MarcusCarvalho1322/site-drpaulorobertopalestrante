"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Brain, HeartPulse, Activity, UserCheck } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";
import { Button } from "@/components/ui/button";

export function TalksSection() {
    const ref = useRef(null);

    const galleryData: GalleryItem[] = [
        {
            common: 'Conexão com o Público',
            binomial: 'Palestras Interativas',
            photo: {
                url: '/talks/talk-1.jpg',
                text: 'Dr. Paulo Roberto Souza interagindo com plateia',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        },
        {
            common: 'Conhecimento Compartilhado',
            binomial: 'Educação Corporativa',
            photo: {
                url: '/talks/talk-2.jpg',
                text: 'Dr. Paulo Roberto Souza palestrando em auditório',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        },
        {
            common: 'Inspiração e Motivação',
            binomial: 'Liderança',
            photo: {
                url: '/talks/talk-3.jpg',
                text: 'Dr. Paulo Roberto Souza com microfone',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        },
        {
            common: 'Autoridade Médica',
            binomial: 'Ciência e Prática',
            photo: {
                url: '/talks/talk-4.jpg',
                text: 'Dr. Paulo Roberto Souza em apresentação',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        },
        {
            common: 'Impacto Real',
            binomial: 'Transformação',
            photo: {
                url: '/talks/talk-5.jpg',
                text: 'Dr. Paulo Roberto Souza olhando para cima em palestra',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        },
        {
            common: 'A Mente é o Coração',
            binomial: 'Essência da Empresa',
            photo: {
                url: '/talks/talk-6.png',
                text: 'Banner motivacional Dr. Paulo Roberto Souza',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        },
        {
            common: 'Performance Máxima',
            binomial: 'Foco e Resultados',
            photo: {
                url: '/talks/talk-7.jpg',
                text: 'Dr. Paulo Roberto Souza em momento de fala intensa',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        },
        {
            common: 'Ciência do Bem-estar',
            binomial: 'Evidência Médica',
            photo: {
                url: '/talks/talk-8.jpg',
                text: 'Dr. Paulo Roberto Souza apresentando dados',
                pos: 'center',
                by: 'Acervo Dr. Paulo Roberto Souza'
            }
        }
    ];

    return (
        <section id="palestras" className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
                    <h2 className="text-heading-lg mb-4 relative inline-block text-white">
                        Palestras
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="text-body text-white/90 pt-4">
                        Conteúdo baseado em ciência e adaptado para a realidade corporativa. Cada palestra é uma experiência imersiva desenhada para gerar impacto.
                    </p>
                </div>

                <div className="h-[850px] w-full relative">
                    <CircularGallery items={galleryData} radius={450} />
                </div>
            </div>
        </section>
    );
}
