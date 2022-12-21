import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Alex P. Gates</title>
        <meta
          name="description"
          content="I’ve spoken at some conferences and been interviewed for some podcasts."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at some conferences and been interviewed for some podcasts."
        intro="Over the years I’ve had the pleasure of speaking at conferences and doing podcast interviews about topics including remote-work culture, smart lighting, email marketing, and more."
      >
        <div className="space-y-20">
          <SpeakingSection title="Meetups">
          <Appearance
              href="https://vimeo.com/90800707"
              title="Introducing Pack"
              description="Pack was invited to present at One Million Cups in Omaha on April 2, 2014. Here’s a video of our presentation."
              event="One Million Cups Omaha - April 2014"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=wsFSLDluypk"
              title="Voice controlled lighting using JavaScript"
              description="A presentation at NebraskaJS on voice controlled lighting using JavaScript."
              event="NebraskaJS - April 2013"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
          <Appearance
              href="https://www.youtube.com/watch?v=N9nBiWXWcoc"
              title="Practical applications for smart lighting in your home or office"
              description="I gave a talk about smart lighting at Infotec in April where I discussed five reasons why you’d want to consider smart lighting in your home or office, various smart lighting technologies available on the market, and some fun things I’ve built with Philips Hue lighting. After my talk I met up with Jim Collison from theaverageguy.tv to give a recap."
              event="Infotec 2015"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=VC2hNskgyH8"
              title="Interview: Cultivating a Fun &amp; Creative Culture with a Distributed Team"
              description="I sat down with Jim Collison from theaverageguy.tv after my talk at Heartland Developer Conference to talk about how we made Pack a fun place to work as a distributed team."
              event="Heartland Developer Conference - 2014"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
