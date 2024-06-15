import Head from 'next/head'
import SubscribeForm from '../components/SubscribeForm'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Technical Test</title>
        <meta name="test" content="landscapes" />
      </Head>

      <main className='flex flex-col'>
        <Carousel autoSlide={true} autoSlideInterval={3000} />
        <SubscribeForm />
      </main>
    </div>
  )
}
