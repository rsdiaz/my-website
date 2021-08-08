import { Fragment } from 'react'
import styled from "@emotion/styled"
import { getAllFilesMetaData } from '../lib/mdx'
import { elements as UI,
  Hero,
  OpenGraph,
  Header,
} from '@/components'

export default function Home({ posts }) {
  return (
    <Fragment>
      <OpenGraph />
      <UI.Box>
        <Header />
        <Hero />
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