import type { Metadata } from 'next';

import {
  quickSandRegular,
  quickSandSmBold,
  syncopateBold,
  syncopateRegular,
} from '@/lib/fonts';
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
      <body
        className={`${[
          syncopateRegular.className,
          syncopateBold.className,
          quickSandRegular.className,
          quickSandSmBold.className,
        ]} `}
      >
        {children}
      </body>
    </html>
  );
}
