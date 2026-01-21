"use client";

import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function SocialProofSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            name: "Fabia Gama",
            role: "Engenheira Ambiental",
            company: "Moeve Química Brasil S.A.",
            text: "Palestra incrível! Conteúdo claro, relevante e inspirador, reforçando a importância da prevenção e do cuidado diário com a saúde do coração. ❤️❤️",
            avatar: "FG"
        },
        {
            name: "Rita Auxiliadora Miranda",
            role: "Justiça Federal",
            company: "Seção Judiciária da Bahia",
            text: "Excelente, uma palestra motivadora para cuidarmos da própria saúde",
            avatar: "RM"
        },
        {
            name: "Rafaela Viana",
            role: "Assistente Social",
            company: "Serviço Geológico do Brasil",
            text: "Muito mais que uma palestra, uma reflexão. Como pequenos hábitos podem mudar nossa vida. Agradeço pelo conhecimento compartilhado",
            avatar: "RV"
        },
        {
            name: "Angeval Brito",
            role: "Engenheiro de Minas",
            company: "Serviço Geológico do Brasil",
            text: "Uma verdadeira aula de prevenção",
            avatar: "AB"
        },
        {
            name: "Fabiane Medrado",
            role: "Gerente Geral",
            company: "AMG Day Hospital",
            text: "Quero agradecer pelo conteúdo enriquecedor sobre a Mente é o Coração de toda empresa",
            avatar: "FM"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <section className="py-24 bg-background">
            <div className="container px-6 md:px-12 mx-auto space-y-12">

                {/* Decorative Elements */}
                <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                </div>

                {/* Testimonials Carousel */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Depoimentos sobre Palestras</h2>
                        <div className="w-16 h-1 bg-accent rounded-full mx-auto"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Main Testimonial Card */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-white border-primary/20 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Quote className="w-24 h-24 text-primary" />
                                </div>
                                <CardContent className="p-12 md:p-16 space-y-8">
                                    {/* Testimonial Text */}
                                    <p className="text-primary text-xl md:text-2xl font-medium leading-relaxed italic relative z-10 text-center">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                    
                                    {/* Author Info */}
                                    <div className="text-center space-y-2 pt-6 border-t border-primary/20">
                                        <p className="text-primary font-bold text-lg">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-primary/80 text-base">
                                            {testimonials[currentIndex].role}
                                        </p>
                                        <p className="text-primary/60 text-sm">
                                            {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-16">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevTestimonial}
                                className="rounded-full bg-white hover:bg-primary hover:text-white border-primary/20 shadow-lg"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-16">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextTestimonial}
                                className="rounded-full bg-white hover:bg-primary hover:text-white border-primary/20 shadow-lg"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToTestimonial(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        idx === currentIndex 
                                            ? 'bg-primary w-8' 
                                            : 'bg-primary/30 hover:bg-primary/50'
                                    }`}
                                    aria-label={`Ir para depoimento ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
