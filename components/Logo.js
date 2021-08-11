import { Fragment } from "react"
import NextLink from 'next/link'
import { Heading } from './elements'
import styled from '@emotion/styled'
import { useColorMode } from '@chakra-ui/color-mode';

const TitleLink = styled.a`
  background: ${props => 
    props.colorMode === 'dark' ? 'var(--chakra-colors-yellow-300)' : 'var(--chakra-colors-white)'};
  color: ${props =>
    props.colorMode === 'dark' ? 'var(--chakra-colors-gray-700)' : 'var(--chakra-colors-gray-700)'};
  text-decoration: none;
  border: 4px solid;
  padding: 0px var(--chakra-space-3) 0px var(--chakra-space-3);
  transition: background var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);
  box-shadow: -3px 5px var(--chakra-colors-gray-700);
  
  &:hover {
    background: var(--chakra-colors-gray-700);
    color: var(--chakra-colors-white);
    border: 4px solid var(--chakra-colors-gray-700);
  }
`


export const Logo = () => {
  const { colorMode } = useColorMode()

  return (
    <Fragment>
      <Heading>
          <NextLink href='/' passHref>
            <TitleLink colorMode={colorMode}>&lt;RS&gt;</TitleLink>
          </NextLink>
        </Heading>
    </Fragment>
  )
}