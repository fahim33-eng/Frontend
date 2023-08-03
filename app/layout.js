import Hero from '@/components/Hero'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-hidden'>
      <body className={montserrat.className}>
        
        {children}
        </body>
    </html>
  )
}
