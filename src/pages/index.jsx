import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoPF from '@/images/logos/pf.svg'
import logoWhatCheer from '@/images/logos/whatcheer.png'
import logoAlexPGates from '@/images/logos/alex.png'
import logoBh from '@/images/logos/bh.png'
import logoWfs from '@/images/logos/wfs.png'
import logoAbif from '@/images/logos/abif.jpg'
import logoRPi from '@/images/logos/rpi.svg'
import logoPack from '@/images/logos/pack.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function toggleBaloo() {
  document.getElementById('baloo-container').classList.toggle('invisible')
  document.getElementById('sneaky-baloo').classList.toggle('top-0')
}

function CommunityIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Alex P. Gates',
      title: 'Freelance Consultant',
      logo: logoAlexPGates,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'PetFriendly',
      title: 'Head of Engineering',
      logo: logoPF,
      start: '2018',
      end: '2022',
    },
    {
      company: 'Alex P. Gates',
      title: 'Freelance Consultant',
      logo: logoAlexPGates,
      start: '2015',
      end: '2018',
    },
    {
      company: 'Pack',
      title: 'Web Developer',
      logo: logoPack,
      start: '2013',
      end: '2015',
    },
    {
      company: 'What Cheer',
      title: 'Partner / Web Developer',
      logo: logoWhatCheer,
      start: '2009',
      end: '2013',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-300"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time
                  className="dark:text-zinc-400"
                  dateTime={role.start.dateTime ?? role.start}
                >
                  {role.start.label ?? role.start}
                </time>{' '}
                <span className="dark:text-zinc-400" aria-hidden="true">
                  —
                </span>{' '}
                <time
                  className="dark:text-zinc-400"
                  dateTime={role.end.dateTime ?? role.end}
                >
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Community() {
  let organizations = [
    {
      name: 'Iowa Business Horizons',
      title: 'Industry Advisor & Committee Chair',
      logo: logoBh,
      start: '2012',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      name: 'Wilson Focus School',
      title: '3rd-6th grade Enrichment Teacher',
      logo: logoWfs,
      start: '2015',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      name: 'Iowa Association of Business and Industry Foundation',
      title: 'Board Member',
      logo: logoAbif,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      name: 'Raspberry Pi Educator',
      title: 'Certified',
      logo: logoRPi,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CommunityIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Community</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {organizations.map((org, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={org.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Organization</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {org.name}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {org.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
                aria-label={`${org.start.label ?? org.start} until ${
                  org.end.label ?? org.end
                }`}
              >
                <time dateTime={org.start.dateTime ?? org.start}>
                  {org.start.label ?? org.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={org.end.dateTime ?? org.end}>
                  {org.end.label ?? org.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image5, image3, image4, image2].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Alex P. Gates
        </title>
        <meta
          name="description"
          content="Alex P. Gates an experienced web and product developer specializing in rapid prototyping, ideation, launching, and scaling websites and SaaS applications."
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
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
            Scrappy technologist &amp; aspiring polymath.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Alex P. Gates is an experienced web and product developer specializing in
            rapid prototyping, ideation, launching, and scaling websites and
            SaaS applications.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/alexpgates"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/alexpgates"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <button className="cursor-pointer" onClick={toggleBaloo}>
              😻
            </button>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
            <Link href="/articles" className="text-sm font-medium text-cyan-700 hover:text-cyan-800 dark:text-cyan-400">More Articles &raquo;</Link>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Community />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 5)
        .map(({ component, ...meta }) => meta),
    },
  }
}
