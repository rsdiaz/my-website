import NextLink from 'next/link'
import siteLinks from '@/data/site-links'
import { Flex } from './elements'
import styled from '@emotion/styled'
import { useColorMode } from '@chakra-ui/color-mode';

const NavLinkItem = styled.a`
  font-family: var(--chakra-fonts-heading);
  padding: var(--chakra-space-1) var(--chakra-space-4);
  margin: 0 auto;
  border: 3px solid var(--chakra-colors-gray-700);
  background: ${props =>
    props.colorMode === 'dark'
    ? 'var(--chakra-colors-yellow-300);'
    : 'var(--chakra-colors-white);'
  };
  color: var(--chakra-colors-gray-700);
  box-shadow: -3px 5px var(--chakra-colors-gray-700);
  transition: background var(--chakra-transition-duration-slow)
  var(--chakra-transition-easing-ease-in);
  font-size: 12px;

  &:hover {
    background: ${props => 
      props.colorMode === 'dark'
      ? 'var(--chakra-colors-whiteAlpha-300);'
      : 'var(--chakra-colors-yellow-300);'
    }; 
    color: ${props =>
      props.colorMode === 'dark' ? 'var(--chakra-colors-white)' : ''
    };
    border: 3px solid var(--chakra-colors-gray-700);
    box-shadow: -3px 5px var(--chakra-colors-gray-700);
  }

  @media screen and (min-width: 700px) {
    margin: 0 var(--chakra-space-4);
  }

  @media screen and (min-width: 1023px) {
    font-size: var(--chakra-fontSizes-xl);
  }

  @media screen and (min-width: 1439px) {
    font-size: var(--chakra-fontSizes-2xl);
  }

`

export const NavLinks = () => {
  const { colorMode } = useColorMode()

  return (
    <nav>
      <Flex direction='row'>
        {siteLinks.map(({name, url}) => (
          <NextLink key={name} href={url} passHref>
            <NavLinkItem colorMode={colorMode}>{name}</NavLinkItem>
          </NextLink>
        ))}
      </Flex>
    </nav>
  )
}