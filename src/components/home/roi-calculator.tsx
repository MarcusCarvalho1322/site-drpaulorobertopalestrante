"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function RoiCalculator() {
    const [step, setStep] = useState<"inputs" | "lead-capture" | "results">("inputs");
    const [calcData, setCalcData] = useState({
        employees: "",
        avgSalary: "",
    });
    const [leadData, setLeadData] = useState({
        name: "",
        role: "",
        company: "",
        whatsapp: "",
        email: "",
    });

    const handleCalcInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCalcData({ ...calcData, [e.target.name]: e.target.value });
    };

    const handleLeadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLeadData({ ...leadData, [e.target.name]: e.target.value });
    };

    const proceedToLead = () => {
        if (!calcData.employees || !calcData.avgSalary) return;
        setStep("lead-capture");
    };

    const calculateAndShow = async (e: React.FormEvent) => {
        e.preventDefault();

        const numFuncionarios = parseInt(calcData.employees) || 0;
        const salarioMedio = parseFloat(calcData.avgSalary) || 0;
        const PREVALENCIA_DCV = 0.08;
        const DIAS_FALTA_POR_ANO = 15;
        const MULTIPLICADOR_CUSTO_FALTA = 1.5;
        const PERCENTUAL_PREVENIVEL = 0.80;

        const custoDiarioFuncionario = (salarioMedio / 22) * MULTIPLICADOR_CUSTO_FALTA;
        const funcionariosComRisco = numFuncionarios * PREVALENCIA_DCV;
        const perdaAnualTotal = funcionariosComRisco * DIAS_FALTA_POR_ANO * custoDiarioFuncionario;
        const potencialEconomiaAnual = perdaAnualTotal * PERCENTUAL_PREVENIVEL;

        // Send to API
        try {
            await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...leadData,
                    employees: calcData.employees,
                    avgSalary: calcData.avgSalary,
                    estimatedLoss: perdaAnualTotal.toFixed(2),
                    potentialSavings: potencialEconomiaAnual.toFixed(2)
                })
            });
        } catch (error) {
            console.error("Failed to save lead", error);
        }

        setStep("results");
    };

    // Calculation Logic (from User's Script)
    const numFuncionarios = parseInt(calcData.employees) || 0;
    const salarioMedio = parseFloat(calcData.avgSalary) || 0;
    const PREVALENCIA_DCV = 0.08;
    const DIAS_FALTA_POR_ANO = 15;
    const MULTIPLICADOR_CUSTO_FALTA = 1.5;
    const PERCENTUAL_PREVENIVEL = 0.80;

    const custoDiarioFuncionario = (salarioMedio / 22) * MULTIPLICADOR_CUSTO_FALTA;
    const funcionariosComRisco = numFuncionarios * PREVALENCIA_DCV;
    const perdaAnualTotal = funcionariosComRisco * DIAS_FALTA_POR_ANO * custoDiarioFuncionario;
    const potencialEconomiaAnual = perdaAnualTotal * PERCENTUAL_PREVENIVEL;

    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const handleDownloadExcel = async () => {
        const numFuncionarios = parseInt(calcData.employees) || 0;
        const salarioMedio = parseFloat(calcData.avgSalary) || 0;
        const PREVALENCIA_DCV = 0.08;
        const DIAS_FALTA_POR_ANO = 15;
        const MULTIPLICADOR_CUSTO_FALTA = 1.5;
        const PERCENTUAL_PREVENIVEL = 0.80;

        const custoDiarioFuncionario = (salarioMedio / 22) * MULTIPLICADOR_CUSTO_FALTA;
        const funcionariosComRisco = numFuncionarios * PREVALENCIA_DCV;
        const perdaAnualTotal = funcionariosComRisco * DIAS_FALTA_POR_ANO * custoDiarioFuncionario;
        const potencialEconomiaAnual = perdaAnualTotal * PERCENTUAL_PREVENIVEL;

        try {
            const response = await fetch('/api/generate-excel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...leadData,
                    employees: calcData.employees,
                    avgSalary: calcData.avgSalary,
                    estimatedLoss: perdaAnualTotal.toFixed(2),
                    potentialSavings: potencialEconomiaAnual.toFixed(2)
                })
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Relatorio_ROI_${leadData.company.replace(/\s/g, '_')}.xlsx`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            } else {
                console.error("Failed to generate Excel");
            }
        } catch (error) {
            console.error("Error downloading excel", error);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" id="calculadora">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="max-w-7xl mx-auto space-y-12">

                    <div className="text-center space-y-6">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-2">
                            <Calculator className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                            Calculadora de Impacto Financeiro
                        </h2>
                        <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                            Descubra o custo oculto do absenteísmo na sua empresa e quanto você poderia economizar investindo em saúde corporativa estratégica.
                        </p>
                    </div>

                    <Card className="border-none shadow-2xl relative overflow-hidden bg-white dark:bg-card">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent"></div>

                        <CardContent className="p-8">
                            <AnimatePresence mode="wait">

                                {/* STEP 1: CALCULATOR INPUTS */}
                                {step === "inputs" && (
                                    <motion.div
                                        key="inputs"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="employees" className="text-base">Número de Funcionários</Label>
                                                <Input
                                                    id="employees"
                                                    name="employees"
                                                    type="number"
                                                    placeholder="Ex: 500"
                                                    className="h-12 text-lg"
                                                    value={calcData.employees}
                                                    onChange={handleCalcInput}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="avgSalary" className="text-base">Salário Médio (R$)</Label>
                                                <Input
                                                    id="avgSalary"
                                                    name="avgSalary"
                                                    type="number"
                                                    placeholder="Ex: 4500"
                                                    className="h-12 text-lg"
                                                    value={calcData.avgSalary}
                                                    onChange={handleCalcInput}
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            size="default"
                                            className="w-full h-12 text-base bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-primary font-medium rounded-lg shadow-lg transition-all"
                                            onClick={proceedToLead}
                                            disabled={!calcData.employees || !calcData.avgSalary}
                                        >
                                            Simular Economia <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </motion.div>
                                )}

                                {/* STEP 2: LEAD CAPTURE GATE */}
                                {step === "lead-capture" && (
                                    <motion.div
                                        key="lead-capture"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        className="space-y-6 text-center"
                                    >
                                        <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 p-4 rounded-lg flex items-center justify-center gap-3 mb-6">
                                            <Lock className="w-5 h-5" />
                                            <span className="font-medium">O resultado da sua simulação está pronto.</span>
                                        </div>

                                        <form onSubmit={calculateAndShow} className="space-y-4 text-left">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Nome Completo</Label>
                                                    <Input id="name" name="name" required onChange={handleLeadInput} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">Empresa</Label>
                                                    <Input id="company" name="company" required onChange={handleLeadInput} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="role">Cargo</Label>
                                                    <Input id="role" name="role" required onChange={handleLeadInput} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="whatsapp">WhatsApp</Label>
                                                    <Input id="whatsapp" name="whatsapp" required onChange={handleLeadInput} placeholder="(00) 00000-0000" />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <Label htmlFor="email">E-mail Corporativo</Label>
                                                    <Input id="email" name="email" type="email" required onChange={handleLeadInput} />
                                                </div>
                                            </div>
                                            <Button type="submit" size="lg" className="w-full h-14 text-lg bg-[#005A8D] hover:bg-[#004a75] transition-all">
                                                Ver Relatório Completo
                                            </Button>
                                        </form>
                                    </motion.div>
                                )}

                                {/* STEP 3: RESULTS */}
                                {step === "results" && (
                                    <motion.div
                                        key="results"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-8"
                                    >
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 space-y-2">
                                                <p className="text-sm text-red-600 dark:text-red-400 font-medium uppercase tracking-wide">
                                                    Perda Anual Estimada
                                                </p>
                                                <p className="text-3xl font-bold text-red-700 dark:text-red-300">
                                                    {formatCurrency(perdaAnualTotal)}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-2">
                                                    Custo invisível com absenteísmo e produtividade.
                                                </p>
                                            </div>

                                            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/50 space-y-2">
                                                <p className="text-sm text-green-600 dark:text-green-400 font-medium uppercase tracking-wide">
                                                    Economia Potencial
                                                </p>
                                                <p className="text-3xl font-bold text-green-700 dark:text-green-300">
                                                    {formatCurrency(potencialEconomiaAnual)}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-2">
                                                    Recuperável com programas de saúde preventiva (80%).
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-center space-y-4 pt-4 border-t border-border">
                                            <p className="font-medium">
                                                Gostaria de entender como aplicar essa economia na sua empresa?
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-3 justify-center">
                                                <Button
                                                    variant="default"
                                                    size="default"
                                                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex-1 text-sm font-medium rounded-lg"
                                                    onClick={() => window.open('https://wa.me/5571999814033', '_blank')}
                                                >
                                                    Falar com Dr. Paulo Roberto Souza no WhatsApp
                                                </Button>

                                                {/* Excel Download */}
                                                <Button
                                                    variant="outline"
                                                    size="default"
                                                    className="flex-1 border-primary text-primary hover:bg-primary/10 text-sm font-medium rounded-lg"
                                                    onClick={handleDownloadExcel}
                                                >
                                                    Baixar Relatório em Excel
                                                </Button>
                                            </div>

                                            <p className="text-xs text-muted-foreground">
                                                *Cálculos baseados em estatísticas de mercado. Resultados podem variar.
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setStep("inputs")}
                                            className="text-sm text-muted-foreground underline w-full text-center hover:text-primary"
                                        >
                                            Refazer simulação
                                        </button>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
