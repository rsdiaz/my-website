import { Fragment } from 'react'
import styled from "@emotion/styled"
import { getAllFilesMetaData } from '../lib/mdx'
import { elements as UI,
  OpenGraph,
  Header,
  Hero,
  Container,
} from '@/components'

export default function Home({ posts }) {
  return (
    <Fragment>
      <OpenGraph />
      <UI.Box>
        <UI.Box marginX='8.5'>
          <UI.Container maxW='container.xl'>
            <UI.Flex
              direction='column'
              align='center'
              h='100vh'
              justify='space-evenly'
            >
              <Header />
              <Hero />
            </UI.Flex>
          </UI.Container>
        </UI.Box>
      </UI.Box>
    </Fragment>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetaData()
  console.log(posts)
  return {
    props: { posts }
  }
}