# Trenches - Financial Literacy Game

Trenches is an innovative web-based game that helps users improve their financial literacy by analyzing their real transaction data and creating personalized financial challenges. The game uses the Knot API to fetch real transaction data and leverages Google's Gemini AI to provide intelligent insights and recommendations.

## Features

- Real transaction data analysis using Knot API
- AI-powered financial insights using Google's Gemini
- Personalized financial challenges based on spending patterns
- Interactive learning moments with AI-generated explanations
- Progress tracking and scoring system
- Beautiful and intuitive user interface
- Secure OAuth-based authentication with Knot API

## Tech Stack

- Frontend:
  - React with TypeScript
  - ShadCN for UI components
  - Framer Motion for animations
  - React Three Fiber for 3D graphics
  - D3.js for data visualization

- Backend:
  - Node.js with Express
  - Google Gemini API for transaction analysis and insights
  - Knot API for secure transaction data access
  - OAuth 2.0 for secure authentication

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trenches.git
cd trenches
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
REACT_APP_KNOT_CLIENT_ID=your_knot_client_id
REACT_APP_KNOT_CLIENT_SECRET=your_knot_client_secret
```

4. Start the development server:
```bash
npm start
```

## Project Structure

```
src/
├── components/         # React components
│   ├── auth/          # Authentication components
│   ├── dashboard/     # Dashboard and game components
│   └── shared/        # Shared UI components
├── contexts/          # React contexts for state management
├── services/          # API and utility services
│   ├── knot/         # Knot API integration
│   └── gemini/       # Gemini API integration
├── types/            # TypeScript type definitions
├── assets/           # Static assets (images, 3D models)
└── styles/           # CSS styles
```

## Key Features

### Knot API Integration
- Secure OAuth-based authentication
- Real-time transaction data access
- Account linking and management
- Transaction categorization and analysis

### Gemini AI Analysis
- Intelligent spending pattern recognition
- Personalized financial recommendations
- Natural language explanations of financial concepts
- Dynamic challenge generation based on user behavior

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Knot API for providing secure transaction data access
- Google's Gemini API for intelligent financial analysis
- React Three Fiber for 3D graphics capabilities 