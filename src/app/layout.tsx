import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/sidebar';
import MixpanelProvider from '@/components/mixpanel-provider';

export const metadata: Metadata = {
  title: "Dota 2's Best Knowledge Base",
  description: "Hero stats, item database, lane matchup analysis, and more for Dota 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        <MixpanelProvider />
        <Sidebar />
        <main className="flex-1 ml-[220px] max-md:ml-0">
          {children}
        </main>
      </body>
    </html>
  );
}
