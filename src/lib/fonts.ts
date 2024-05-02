import { Quicksand, Syncopate } from 'next/font/google';

export const quickSandRegular = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand-regular',
  weight: '400',
});
export const quickSandSmBold = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand-smbold',
  weight: '600',
});

export const syncopateRegular = Syncopate({
  subsets: ['latin'],
  variable: '--font-syncopate',
  weight: '400',
});

export const syncopateBold = Syncopate({
  subsets: ['latin'],
  variable: '--font-syncopate',
  weight: '700',
});
