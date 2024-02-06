import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/nova.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

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
                src={portraitImage}
                alt="Alex's Headshot"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover hover:rotate-3 dark:bg-zinc-800"
              />
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
                in rapid prototyping, ideation, launching, and scaling websites
                and SaaS applications. I get super jazzed about helping good
                people use custom software to do great things.
              </p>
              <p>
                I&apos;m also a certified Raspberry Pi Educator and public
                school enrichment teacher.
              </p>
              <p>That&apos;s my dog, Nova.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/alexpgates"
                icon={GitHubIcon}
                className="mt-4"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/alexpgates"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:alexpgates@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                alexpgates@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
