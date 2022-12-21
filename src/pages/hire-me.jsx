import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
    MailIcon,
    PhoneIcon,
    TextIcon,
  } from '@/components/SocialIcons'
import portraitImage from '@/images/alex-p-gates-avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
    return (
      <li className={clsx(className, 'flex')}>
        <Link
          href={href}
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500 mb-4"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500" />
          <span className="ml-4">{children}</span>
        </Link>
      </li>
    )
  }

export default function HireMe() {
    return (
      <>
        <Head>
          <title>Hire - Alex P. Gates</title>
          <meta
            name="description"
            content="Let’s work together."
          />
        </Head>
        <Container className="mt-16 sm:mt-32">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Let’s work together.
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
              </div>
            </div>
            <div className="lg:pl-20">
            <ul role="list">
            <SocialLink
                href="mailto:alexpgates@gmail.com"
                icon={MailIcon}
              >
                alexpgates@gmail.com
            </SocialLink>
            <SocialLink
                href="tel:402-514-7535"
                icon={PhoneIcon}
              >
                (402) 514-7535
            </SocialLink>
            <SocialLink
                href="sms:402-514-7535"
                icon={TextIcon}
              >
                (402) 514-7535
            </SocialLink>
            </ul>
            </div>
          </div>
        </Container>
      </>
    )
  }
