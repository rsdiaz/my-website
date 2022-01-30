import { Fragment } from "react"
import NextLink from 'next/link'
import { Heading, Box, Text } from './elements'
import styled from '@emotion/styled'
import { useColorMode } from '@chakra-ui/color-mode';

const TitleLink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  background: ${props =>
    props.colorMode === 'dark' ? 'var(--chakra-colors-yellow-300)' : 'var(--chakra-colors-white)'};
  color: ${props =>
    props.colorMode === 'dark' ? 'var(--chakra-colors-gray-700)' : 'var(--chakra-colors-gray-700)'};
  text-decoration: none;
  padding: 0px var(--chakra-space-3) 0px var(--chakra-space-3);
  transition: background var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);
  
  &:hover {
    background: var(--chakra-colors-gray-700);
    color: var(--chakra-colors-white);
  }
`

const SubTitle = styled(Text)`
  padding: 0px var(--chakra-space-3) 0px var(--chakra-space-3);
  font-weight: 500;
`

export const Logo = () => {
  const { colorMode } = useColorMode()

  return (
    <Fragment>
      <Box pt={[4, 0, 0, 0]}>
        <Heading>
          <NextLink href='/' passHref>
            <TitleLink colorMode={colorMode}>Roberto Serrano Díaz-Grande</TitleLink>
          </NextLink>
        </Heading>
        <SubTitle fontSize="lg">Desarrollador web fullstack</SubTitle>
      </Box>
    </Fragment>
  )
}