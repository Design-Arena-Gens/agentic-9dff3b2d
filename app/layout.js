import './globals.css';

export const metadata = {
  metadataBase: new URL('https://agentic-9dff3b2d.vercel.app'),
  title: 'Le Cercle Scale ? Mastermind dirigeants d\'ambulance',
  description: "Mastermind ferm? pour g?rants d'ambulance : passer de l'artisanat ? l'entreprise digitalis?e et pilot?e par la data.",
  openGraph: {
    title: 'Le Cercle Scale ? Mastermind dirigeants d\'ambulance',
    description: "Mastermind ferm? pour g?rants d'ambulance : passer de l'artisanat ? l'entreprise digitalis?e et pilot?e par la data.",
    url: 'https://agentic-9dff3b2d.vercel.app',
    siteName: 'Le Cercle Scale',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Cercle Scale',
    description: "Mastermind ferm? pour g?rants d'ambulance.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased selection:bg-brand-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
