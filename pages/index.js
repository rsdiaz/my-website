import { Fragment } from 'react'
import { getAllFilesMetaData } from '../lib/mdx'
import { useColorMode } from '@chakra-ui/color-mode';
import {
  elements as UI,
  OpenGraph,
  Header,
  Hero,
  Card,
} from '@/components'

export default function Home({ posts }) {
  const { colorMode } = useColorMode()

  return (
    <Fragment>
      <OpenGraph />
      <UI.Box>
        <Header />
        <UI.Box marginX={['2.5', '8.5']}>
          <UI.Container maxW='container.xl'>
            <UI.Flex
              direction='column'
              align='center'
              h='95vh'
              minHeight='800px'
              justify='space-evenly'
              marginTop={['5', '10']}
              marginBottom={['5', '10']}
              bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
              border='4px solid var(--chakra-colors-gray-700);'
              boxShadow='-6px 8px var(--chakra-colors-gray-700);'
            >
              <Header />
              <Hero />
            </UI.Flex>
            <UI.Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
              <Card title='Blog'>
                <UI.Text>
                  Desde 2012, llevo desarrollando aplicaciones web y he ayudado a muchas personas
                  a lograr cosas innovadoras en la web.
                  Principalmente trabajo con herramientas y frameworks modernos como
                  React, VueJs, NodeJs, MongoDB...
                  <br />
                  Actualmente trabajo como Desarrollador Web FullStack en
                  <a href=""> Grup Oliva Motor</a>
                </UI.Text>
              </Card>
              <Card title='Blog'>
                <UI.Text>
                  Desde 2012, llevo desarrollando aplicaciones web y he ayudado a muchas personas
                  a lograr cosas innovadoras en la web.
                  Principalmente trabajo con herramientas y frameworks modernos como
                  React, VueJs, NodeJs, MongoDB...
                  <br />
                  Actualmente trabajo como Desarrollador Web FullStack en
                  <a href=""> Grup Oliva Motor</a>
                </UI.Text>
              </Card>
              <Card title='Blog'>
                <UI.Text>
                  Desde 2012, llevo desarrollando aplicaciones web y he ayudado a muchas personas
                  a lograr cosas innovadoras en la web.
                  Principalmente trabajo con herramientas y frameworks modernos como
                  React, VueJs, NodeJs, MongoDB...
                  <br />
                  Actualmente trabajo como Desarrollador Web FullStack en
                  <a href=""> Grup Oliva Motor</a>
                </UI.Text>
              </Card>
            </UI.Grid>
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