import type { Metadata } from 'next';
import { Quicksand, Syncopate } from 'next/font/google';
import './globals.css';

const quickSand = Quicksand({ subsets: ['latin'] });
const syncopate = Syncopate({ weight: '400', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Rimix',
  description: '美发沙龙和学院',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO: Understand NextFont
  return (
    <html lang="en">
      <body className={`${[syncopate.className, quickSand.className]}`}>
        {children}
      </body>
    </html>
  );
}
