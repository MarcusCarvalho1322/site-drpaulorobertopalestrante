
import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name, company, role, employees, avgSalary,
            estimatedLoss, potentialSavings
        } = body;

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Relatório ROI');

        // Styles
        const titleStyle = {
            font: { name: 'Arial', size: 16, bold: true, color: { argb: 'FFFFFFFF' } },
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF005A8D' } },
            alignment: { horizontal: 'center' }
        };
        const headerStyle = {
            font: { name: 'Arial', size: 12, bold: true },
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEEEEEE' } }
        };

        // Header Title
        worksheet.mergeCells('A1:B1');
        const titleCell = worksheet.getCell('A1');
        titleCell.value = 'Relatório de Impacto Financeiro - Saúde Corporativa';
        // @ts-ignore
        titleCell.style = titleStyle;
        worksheet.getRow(1).height = 30;

        // Spacer
        worksheet.addRow([]);

        // User Info Section
        worksheet.addRow(['Dados da Simulação']);
        worksheet.getRow(3).font = { bold: true, color: { argb: 'FF00A99D' }, size: 14 };

        worksheet.addRow(['Nome:', name]);
        worksheet.addRow(['Empresa:', company]);
        worksheet.addRow(['Cargo:', role]);
        worksheet.addRow(['Data:', new Date().toLocaleDateString('pt-BR')]);

        worksheet.addRow([]);

        // Inputs Section
        worksheet.addRow(['Parâmetros Utilizados']);
        worksheet.getRow(9).font = { bold: true, color: { argb: 'FF00A99D' }, size: 14 };

        worksheet.addRow(['Número de Funcionários:', employees]);
        worksheet.addRow(['Salário Médio:', `R$ ${parseFloat(avgSalary).toLocaleString('pt-BR')}`]);
        worksheet.addRow(['Prevalência Considerada:', '8% (Média de Mercado)']);

        worksheet.addRow([]);

        // Results Section
        worksheet.addRow(['Resultados Estimados']);
        worksheet.getRow(14).font = { bold: true, color: { argb: 'FF00A99D' }, size: 14 };

        const lossRow = worksheet.addRow(['Perda Anual Estimada (Absenteísmo):', `R$ ${parseFloat(estimatedLoss).toLocaleString('pt-BR')}`]);
        lossRow.font = { color: { argb: 'FFCC0000' }, bold: true };

        const savingsRow = worksheet.addRow(['Economia Potencial (Prevenção):', `R$ ${parseFloat(potentialSavings).toLocaleString('pt-BR')}`]);
        savingsRow.font = { color: { argb: 'FF009900' }, bold: true };

        // Formatting columns
        worksheet.getColumn(1).width = 40;
        worksheet.getColumn(2).width = 30;

        // Buffer
        const buffer = await workbook.xlsx.writeBuffer();

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': `attachment; filename="Relatorio_ROI_${company.replace(/\s/g, '_')}.xlsx"`
            }
        });

    } catch (error) {
        console.error("Error generating Excel:", error);
        return NextResponse.json({ error: 'Failed to generate report' }, { status: 500 });
    }
}
