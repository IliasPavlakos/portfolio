import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IliasPavlakos/Portfolio',
  description: 'Ilias Pavlakos personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-gray-50 text-gray-950 relative'}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.15rem] w-[31.15rem] 
        rounded-full blur-[10rem] sm:w-[68.75]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.15rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
