import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SessionSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Session({ title, description, session, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Davinci() {
  return (
    <>
      <Head>
        <title>da Vinci’s Workshop</title>
        <meta
          name="description"
          content="Sort of unorganized (but improving) notes for my enrichment class"
        />
      </Head>
      <SimpleLayout
        title="da Vinci’s Workshop"
        intro="Sort of unorganized (but improving) notes for my enrichment class"
      >
        <div className="space-y-20">

           <Session
              href="https://docs.google.com/presentation/d/1N-lnnCJv0WpYCilb5b3dRepzlUmC9zWWOpAJtg4FA7w/edit?usp=sharing"
              title="da Vinci’s Workshop: Introduction"
              description="Who is da Vinci’s, when and where did he live? What did he do?"
              cta="Google Slides"
           >
          </Session>
          <Session
              href="https://docs.google.com/presentation/d/1ZHE_6UidbS6v-bAV1n34eI2iF1k6vNoGKyjl5aufwpE/edit#slide=id.p"
              title="da Vinci’s Notebooks"
              description="Learn about da Vinci’s journaling habits and practice mirror writing"
              cta="Google Slides"
           >
          </Session>

          <Session
              href="https://docs.google.com/presentation/d/15w6ppVk0bHA6R7tkXT2LqmiumYV2LC3Va77XkPTgej4/edit?usp=sharing"
              title="Biomimicry"
              description="The design and production of materials, structures, and systems that are modeled on biological entities and processes."
              cta="Google Slides"
           >
          </Session>

          <Session
              href="https://www.youtube.com/watch?v=USCBCmwMCDA"
              title="How Computers Work: Binary and Data"
              description="Learn about the binary counting system, how it compares to a decimal, and how it relates to how computers store information."
              cta="YouTube"
           >
          </Session>

        </div>
      </SimpleLayout>
    </>
  )
}
