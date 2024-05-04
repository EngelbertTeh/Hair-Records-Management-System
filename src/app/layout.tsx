import {
  quickSandRegular,
  quickSandSmBold,
  syncopateBold,
  syncopateRegular,
} from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RIMIX',
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
      <head>
        <link rel="stylesheet" />
      </head>
      <body
        className={`${syncopateRegular.variable} ${syncopateBold.variable} ${quickSandRegular.variable} ${quickSandSmBold.variable}  `}
      >
        {children}
      </body>
    </html>
  );
}
