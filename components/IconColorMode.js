import { useColorMode } from '@chakra-ui/color-mode'
import { IconSun, IconMoon } from './icons'
import styled from '@emotion/styled'

const Icon = styled.i`
  font-size: var(--chakra-fontSizes-md);
  cursor: pointer;
  transition: var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    color: var(--chakra-colors-gray-400)
  }

  @media screen and (min-width: 700px) {
    font-size: var(--chakra-fontSizes-xl);
  }
`

export const IconColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Icon onClick={toggleColorMode}>
      {colorMode === 'light' ? <IconMoon /> : <IconSun />}
    </Icon>
  )
}