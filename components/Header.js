import { Box, Flex, HStack } from './elements'
import styled from '@emotion/styled'
import { NavLinks } from './NavLinks'
import { IconGithub, IconTwitter } from "./icons";
import { IconColorMode } from './IconColorMode';
import { Logo } from '@/components';

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

  return (
    <Box as='header' p={[2, 0, 0, 4]} w='100%'>
      <Flex
        fontWeight='bold'
        direction={["column", "column", "column", "row"]}
        justify='space-between'
        align='center'
        h={[150, 150, 'auto', 'auto']}
      >
        <Logo />
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
