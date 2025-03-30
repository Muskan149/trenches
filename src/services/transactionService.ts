import { Transaction, FinancialFauxPas } from '../types/game';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY || '');

export async function fetchTransactions(): Promise<Transaction[]> {
  try {
    // Replace with actual Knot API endpoint and authentication
    const response = await fetch('https://api.knot.com/v1/transactions', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_KNOT_API_KEY}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }

    const data = await response.json();
    return data.transactions.map((t: any) => ({
      id: t.id,
      amount: t.amount,
      date: t.date,
      category: t.category,
      description: t.description,
      merchant: t.merchant,
    }));
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
}

export async function analyzeTransactions(transactions: Transaction[]): Promise<FinancialFauxPas[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
      Analyze these financial transactions and identify potential financial faux pas:
      ${JSON.stringify(transactions, null, 2)}
      
      For each identified issue, provide:
      1. Type of issue (subscription, food_delivery, retail_therapy, credit_card, other)
      2. Description of the issue
      3. Total amount involved
      4. A question to test financial literacy
      5. The correct answer
      6. A learning moment/explanation
      
      Format the response as a JSON array of objects with these fields.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse the response and validate the structure
    const fauxPas: FinancialFauxPas[] = JSON.parse(text);
    
    return fauxPas.map((fauxPas, index) => ({
      ...fauxPas,
      id: `faux-pas-${index}`,
      transactions: transactions.filter(t => 
        // Filter transactions relevant to this faux pas
        // This is a simplified example - you'd want more sophisticated matching
        t.category.toLowerCase().includes(fauxPas.type.toLowerCase())
      ),
    }));
  } catch (error) {
    console.error('Error analyzing transactions:', error);
    return [];
  }
}

export function calculateTrenchDepth(fauxPas: FinancialFauxPas[]): number {
  // Calculate trench depth based on the number and severity of faux pas
  return Math.min(5, Math.floor(fauxPas.length / 2));
} 