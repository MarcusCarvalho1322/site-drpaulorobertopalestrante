
import { NextResponse } from 'next/server';
import { saveLeadToSheet } from '@/lib/google-sheets';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.company) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const leadData = {
            ...body,
            date: new Date().toLocaleDateString('pt-BR'),
        };

        // Attempt to save to sheet, but don't block response if it fails (optional, but good for UX)
        // For now, we await it to ensure it works.
        await saveLeadToSheet(leadData);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in /api/leads:', error);
        // Return success even if sheet fails, so user flow isn't interrupted? 
        // Or return error? Let's return error for now so we can debug.
        return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }
}
