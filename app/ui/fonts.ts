// nextjs-dashboard\app\ui\fonts.ts

import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google'; // Import Lusitana

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] }); // Specify the font weights you need, for example, '400' for regular and '700' for bold
