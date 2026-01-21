"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: 2000,
    });
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = new Intl.NumberFormat("pt-BR").format(Math.round(latest)) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
}

export function StatsSection() {
    return (
        <section className="py-20 bg-background border-b border-primary/5">
            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-12 text-center">

                    {/* Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="text-5xl md:text-6xl font-bold text-primary font-serif">
                            US$ <Counter value={1} suffix="" /> Trilhão
                        </div>
                        <p className="text-body text-primary/80 font-medium max-w-xs mx-auto">
                            A Organização Mundial da Saúde alerta que depressão e ansiedade causam perda anual de US$ 1 trilhão em produtividade no mundo
                        </p>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="text-5xl md:text-6xl font-bold text-primary font-serif">
                            +<Counter value={60} suffix="%" />
                        </div>
                        <p className="text-body text-primary/80 font-medium max-w-xs mx-auto">
                            Geração Z e millennials, mais de 60% desses profissionais preferem empresas com cultura saudável
                        </p>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <div className="text-5xl md:text-6xl font-bold text-primary font-serif">
                            <Counter value={70} suffix="%" />
                        </div>
                        <p className="text-body text-primary/80 font-medium max-w-xs mx-auto">
                            70% dos funcionários afirmam ser mais produtivos, após participarem de programas de saúde
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
