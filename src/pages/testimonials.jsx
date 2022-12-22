import Head from 'next/head'

import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import annie from '@/images/photos/testimonials/annie.jpg'

function SingleTestimonial({ name, title, org, quote, photo, href }) {
  return (
    <Card as="article">
        <blockquote className="overflow-hidden rounded-xl bg-zinc-50 p-10 dark:bg-black border">
            <div className="text-center text-2xl font-medium leading-9 text-zinc-700 dark:text-zinc-100 prose">
                <p>&ldquo;{quote}&rdquo;</p>
            </div>
            <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                    <Image
                        src={photo}
                        alt=""
                        sizes="6rem"
                        className="mx-auto h-20 w-20 rounded-full"
                    />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-zinc-600 dark:text-zinc-100">{name}</div>

                    <svg className="mx-1 hidden h-5 w-5 text-cyan-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-zinc-500">{title}, {org}</div>
                    </div>
                </div>
            </footer>
        </blockquote>
    </Card>
  )
}

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonials - Alex P. Gates</title>
        <meta
          name="description"
          content="Some nice things people have said about working with Alex."
        />
      </Head>
      <SimpleLayout
        title="Some nice things people have said about working with Alex"
        intro="I’ve been incredibly fortunate to work with some really fantastic people during my career. Here are a few things some of them have had to say."
      >
        <div className="space-y-20">
            <SingleTestimonial
                name="Annie Tandy"
                title="Owner"
                org="MyKidlist.com"
                quote="I absolutely love working with Alex. He is knowledgeable and efficient, always a problem solver, and ready to tackle any project I dream up. He uses creativity and common sense to work smarter and implements changes to our site that makes my life easier as a business owner and team leader."
                photo={annie}
                href="https://mykidlist.com"
                />
        </div>
      </SimpleLayout>
    </>
  )
}
