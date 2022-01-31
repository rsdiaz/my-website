import { Box, Flex, HStack } from '../elements'
import { NavLinks } from './NavLinks'
import { IconGithub, IconTwitter } from "../icons";
import { IconColorMode } from '../IconColorMode';
import { Logo } from '@/components';
import { IconStyle } from './styles'

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
        <Flex flexDirection={['column', 'row']}>
          <NavLinks />
          <HStack spacing="40px" justifyContent='center'>
            <IconStyle href='#'>
              <IconGithub />
            </IconStyle>
            <IconStyle href='#'>
              <IconTwitter />
            </IconStyle>
            <IconColorMode />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}
