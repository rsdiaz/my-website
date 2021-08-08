import NextLink from 'next/link'
import { Box, Flex, Heading, HStack } from './elements'
import styled from '@emotion/styled'
import { NavLinks } from './NavLinks'
import { IconGithub, IconTwitter } from "./icons";
import { IconColorMode } from './IconColorMode';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';


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
const IconStyle = styled.a`
  font-size: var(--chakra-fontSizes-md);
  color: '';
  transition: var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    color: var(--chakra-colors-gray-400)
  }

  @media screen and (min-width: 700px) {
    font-size: var(--chakra-fontSizes-2xl);
  }
`


export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const color = useColorModeValue('var(--chakra-colors-gray-700)', "white")

  return (
    <Box as='header' py='10' px={[0, 0, 0, 8]}>
      <Flex
        fontWeight='bold'
        direction={["column", "column", "column", "row"]}
        justify='space-between'
        align='center'
      >
        <Heading>
          <NextLink href='/' passHref>
            <TitleLink colorMode={colorMode}>&lt;RS&gt;</TitleLink>
          </NextLink>
        </Heading>
        <NavLinks />
        <HStack spacing="40px">
          <IconStyle href='#'>
            <IconGithub />
          </IconStyle>
          <IconStyle href='#'>
            <IconTwitter />
          </IconStyle>
          <IconColorMode />
        </HStack>
      </Flex>
    </Box>
  )
}
