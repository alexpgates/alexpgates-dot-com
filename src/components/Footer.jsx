import Link from 'next/link'
import Image from 'next/image'
import baloo from '@/images/baloo.png'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-cyan-500 dark:hover:text-cyan-400"
    >
      {children}
    </Link>
  )
}

function Baloo() {
    return (
        <div onClick={toggleBaloo} id="baloo-container" className="invisible z-40 fixed mt-6 inset-0 grid place-items-center h-screen">
        <div id="sneaky-baloo" className="absolute top-full ease-in-out transition-full duration-1000">
        <Image
                src={baloo}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className=""
            />
        </div>
        </div>
    )
}

function toggleBaloo() {
    document.getElementById('baloo-container').classList.toggle('invisible');
    document.getElementById('sneaky-baloo').classList.toggle('top-0');
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/hire-me">Hire Me</NavLink>
                <span onClick={toggleBaloo} className="transition cursor-pointer hover:text-cyan-500 dark:hover:text-cyan-400" tabIndex="-1">Pspspspsp!</span>
              </div>
              <p className="text-sm text-zinc-400">
                &copy; {new Date().getFullYear()} Alex P. Gates. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
        <Baloo />
      </Container.Outer>
    </footer>
  )
}
