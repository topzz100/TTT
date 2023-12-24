import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Header from '@/components/header'
import Services from '@/components/services'
import ConnectCustomers from '@/components/connectCustomers'
import EnterpriseTemplate from '@/components/enterpriseTemplate'
import Connect from '@/components/connect'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Header/>
        <Services/>
        <ConnectCustomers/>
        <EnterpriseTemplate/>
        <Connect/>
        <Blog/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}
