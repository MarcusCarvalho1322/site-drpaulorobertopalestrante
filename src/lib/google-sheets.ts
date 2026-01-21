
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

interface LeadData {
    name: string;
    email: string;
    company: string;
    role: string;
    whatsapp: string;
    employees: string;
    avgSalary: string;
    estimatedLoss: string;
    potentialSavings: string;
    date: string;
}

export async function saveLeadToSheet(lead: LeadData) {
    if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        console.error("Missing Google Sheets Credentials");
        throw new Error("Missing Google Sheets Credentials");
    }

    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

    try {
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0]; // Assumes first sheet
        await sheet.addRow({
            Data: lead.date,
            Nome: lead.name,
            Email: lead.email,
            Empresa: lead.company,
            Cargo: lead.role,
            WhatsApp: lead.whatsapp,
            Funcionarios: lead.employees,
            SalarioMedio: lead.avgSalary,
            PerdaEstimada: lead.estimatedLoss,
            EconomiaPotencial: lead.potentialSavings
        });
        return true;
    } catch (error) {
        console.error("Error saving to Google Sheet:", error);
        throw error;
    }
}
