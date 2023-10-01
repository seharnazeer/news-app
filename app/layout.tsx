
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })
import { ThemeProvider } from '@/lib/themeprovider'
export const metadata: Metadata = {
  title: 'News App',
  description: 'Created By Sehar ',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <body className='flex flex-col justify-center items-center'>
        <Header />
        <div className='md:w-3/5 w-4/5 '>
        {children}
        </div>
        </body>
        </ThemeProvider>
    </html>
  )
}

