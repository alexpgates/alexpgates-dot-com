import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import novaImage from '@/images/nova.jpg'
import shed1Image from '@/images/photos/shed/1.jpg'
import shed2Image from '@/images/photos/shed/2.jpg'
import shed3Image from '@/images/photos/shed/3.jpg'
import shed4Image from '@/images/photos/shed/4.jpg'
import shed5Image from '@/images/photos/shed/5.jpg'
import shed6Image from '@/images/photos/shed/6.jpg'
import shed7Image from '@/images/photos/shed/7.jpg'


export default function About() {
  return (
    <>
      <Head>
        <title>About - Alex P. Gates</title>
        <meta
          name="description"
          content="Alex P. Gates is an experienced web and product developer specializing in rapid prototyping, ideation, launching, and scaling websites and SaaS applications."
        />
        <meta property="og:title" content="Alex P. Gates" />
        <meta
          property="og:description"
          content="Alex P. Gates is an experienced web and product developer specializing in rapid prototyping, ideation, launching, and scaling websites and SaaS applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <meta property="og:image" content="https://www.alexpgates.com/default-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alex P. Gates" />
        <meta
          name="twitter:description"
          content="Alex P. Gates is an experienced web and product developer specializing in rapid prototyping, ideation, launching, and scaling websites and SaaS applications."
        />
        <meta name="twitter:image" content="https://www.alexpgates.com/default-og-image.jpg" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={novaImage}
                alt="Alex and Nova"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover hover:rotate-3 dark:bg-zinc-800"
              />
              <div className="md:text-center block mt-2 text-sm text-zinc-600 dark:text-zinc-400">That's my dog, Nova.</div>
            </div>

          </div>
          <div className="prose lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Alex.{' '}
              <span className="text-cyan-500">I live in Omaha</span> and work on
              the internet.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m an experienced web and product developer specializing
                in validating, prototyping, launching, and scaling websites
                and SaaS applications.
              </p>
              <p>
                I&apos;m a <Link href="https://www.raspberrypi.org/training/rce/">Raspberry Pi Certified Educator</Link> and teach STEAM-focused afternoon enrichment classes for elementary students. I'm also Chair of the <Link href="https://www.iowaabi.org/business-horizons/">Iowa Business Horizons</Link> committee, a week-long summer program  for high school students interested in business and entrepreneurship.
              </p>
            </div>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                    I work in a tiny 8'x8' shed next to my house. It used to be where I kept my lawnmower in the winter and snowblower in the summer.
                </p>
                <div className="grid grid-cols-1 gap-4">
                    <Image src={shed1Image} alt="Shed 1" className="rounded-lg" />
                    <Image src={shed2Image} alt="Shed 2" className="rounded-lg" />
                    <Image src={shed3Image} alt="Shed 3" className="rounded-lg" />
                    <Image src={shed4Image} alt="Shed 4" className="rounded-lg" />
                    <Image src={shed5Image} alt="Shed 5" className="rounded-lg" />
                    <Image src={shed6Image} alt="Shed 6" className="rounded-lg" />
                    <Image src={shed7Image} alt="Shed 7" className="rounded-lg" />
                </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
