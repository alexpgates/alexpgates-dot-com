import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
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
          content="I’m Alex P. Gates. I live in Omaha, Nebraska."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Alex's Headshot"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square hover:rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2 prose">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Alex P. Gates. <span className="text-cyan-500">I live in Omaha</span> and work on the internet.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">

            <p>As a freelance web developer and technology consultant with over 26 years of experience building for the web, I am focused on creating software that helps good people do great things.</p>

            <p>My upbringing in Iowa was a blend of small-town values and leading-edge technology, beginning with a <a className="underline" href="https://en.wikipedia.org/wiki/Commodore_64">Commodore 64</a> and followed by every iteration of computer and internet technology along the way - from 9600 baud dial-up to 28.8 to 56k, 3 1/2” floppies, zip drives, CD burners, and more.</p>

            <p>I began writing HTML in 1996 when I was 14 years old and grew a small business helping people in my community connect to the internet and learn how to send and receive email.</p>

            <p>As a foreign exchange student in Denmark in 1999, I learned how to build Flash websites and games at Odense Tekniske College.</p>

            <p>Upon returning to the United States, I enrolled at the <a className="underline" href="https://uni.edu/">University of Northern Iowa</a> where I studied business, social and behavioral sciences, humanities, and fine arts, including a study abroad in St. Petersburg Russia focused on photography and Russian history.</p>

            <p>My professional journey began as a front-end and back-end developer at a small publishing company in Eastern Iowa where I built a PHP application that allowed customers to design fundraising cookbooks online, invite collaborators to submit recipes, and place orders.</p>

            <p>Shortly after moving to Omaha in 2008, I took a back-end developer job and later became a partner at What Cheer, a small web design and development studio that worked with businesses and non-profits in Omaha, including Saddle Creek Records, Union Pacific Railroad, and The Post Punk Kitchen.</p>

            <p>In 2013, What Cheer joined Pack, a social network startup for people who love dogs. While at Pack, I built custom email marketing software that delivered over 1.6 million personalized email newsletters in over 3,800 campaigns.</p>

            <p>As a freelance consultant, I have helped a variety of businesses and non-profits use technology wisely to achieve their goals. For example, I built a large WordPress Multisite network for <a className="underline" href="https://www.techstars.com/communities/startup-weekend">Startup Weekend</a> and a custom scores and statistics API for <a className="underline" href="https://d1baseball.com">D1Baseball.com</a> that integrated with their WordPress website.</p>

            <p>As a consultant (and later the second full-time employee) I developed the complete technology infrastructure (including a customer-facing website, subscription management, customer support tools, and custom order fulfillment) for <a href="https://petfriendlybox.com">PetFriendly</a>, a subscription-based e-commerce pet-wellness company.</p>

            <p>In addition to my professional work, I have a strong commitment to volunteering and giving back to my community. As a certified Raspberry Pi Educator, I have helped hundreds of Omaha Public Schools students write their first line of code and fall in love with computer programming and STEAM-focused approaches to problem-solving.</p>

            <p>I’m also a long-time volunteer for <a href="https://www.iowaabi.org/business-horizons/">Iowa Business Horizons</a>, a week-long summer program for high school students interested in business and entrepreneurship (that I attended as a student in 1997). As committee chair for Iowa Business Horizons, I also serve on the board for the Iowa Association of Business and Industry Foundation.</p>

            <p>I want to continue helping good people do great things. <Link legacyBehavior href="/hire-me"><a>Please reach out</a></Link> if you are interested in working together.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/alexpgates" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/alexpgates" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/alexpgates" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/alexpgates" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
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
