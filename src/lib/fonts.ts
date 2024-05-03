import { Quicksand, Syncopate } from 'next/font/google';

export const quickSandRegular = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand-reg',
  weight: '400',
  display: 'swap',
});
export const quickSandSmBold = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand-smbold',
  weight: '600',
  display: 'swap',
});

export const syncopateRegular = Syncopate({
  subsets: ['latin'],
  variable: '--font-syncopate-reg',
  weight: '400',
  display: 'swap',
});

export const syncopateBold = Syncopate({
  subsets: ['latin'],
  variable: '--font-syncopate-bold',
  weight: '700',
  display: 'swap',
});
