import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
      <h1 className="mb-4 text-green-500 text-3xl">サンプル</h1>
      <p className="mb-2 text-center">sample text</p>
      <button className="btn-blue">Let's Start!!</button>
      <button className="btn-blue">Start!!</button>

    </section >

  )
}
