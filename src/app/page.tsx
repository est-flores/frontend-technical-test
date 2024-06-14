import Head from 'next/head'
import SubscribeForm from '../components/SubscribeForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Newsletter Subscription</title>
        <meta name="description" content="Subscribe to our newsletter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Subscribe to our Newsletter</h1>
        <SubscribeForm />
      </main>
    </div>
  )
}
