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
        <SessionSection title="Session 3">
          <Session
              href="https://docs.google.com/presentation/d/1ZHE_6UidbS6v-bAV1n34eI2iF1k6vNoGKyjl5aufwpE/edit#slide=id.p"
              title="da Vinci’s Notebooks"
              description="Learn about da Vinci’s journaling habits and practice mirror writing"
              cta="Google Slides"
           >
          </Session>
        </SessionSection>
        </div>
      </SimpleLayout>
    </>
  )
}