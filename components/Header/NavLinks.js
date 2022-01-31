import NextLink from 'next/link'
import siteLinks from '@/data/site-links'
import { Flex } from '../elements'
import styled from '@emotion/styled'
import { useColorMode } from '@chakra-ui/color-mode';

const NavLinkItem = styled.a`
  padding: var(--chakra-space-1) var(--chakra-space-4);
  margin: 0 auto;
  background: ${props =>
    props.colorMode === 'dark'
      ? 'var(--chakra-colors-primary);'
      : 'var(--chakra-colors-white);'
  };
  color: ${props =>
    props.colorMode === 'dark'
    ? 'var(--chakra-colors-white)'
    : 'var(--chakra-colors-gray-700)'
  };
  transition: background var(--chakra-transition-duration-slow)
  var(--chakra-transition-easing-ease-in);
  font-family: var(--chakra-fonts-heading);
  font-size: 12px;
  text-transform: uppercase;

  &:hover {
    color: ${props =>
    props.colorMode === 'dark' ? 'var(--chakra-colors-white)' : 'var(--chakra-colors-primary)'
    };
    background-color: ${props =>
      props.colorMode === 'dark'
      ? 'var(--chakra-colors-secondary)'
      : ''
    };
  }

  @media screen and (min-width: 700px) {
    margin: 0 var(--chakra-space-4);
  }

  @media screen and (min-width: 1023px) {
    font-size: var(--chakra-fontSizes-xl);
  }

  @media screen and (min-width: 1439px) {
    font-size: var(--chakra-fontSizes-1xl);
  }

`

export const NavLinks = () => {
  const { colorMode } = useColorMode()

  return (
    <nav>
      <Flex direction='row' my={[5, 0, 0, 0]}>
        {siteLinks.map(({ name, url }) => (
          <NextLink key={name} href={url} passHref>
            <NavLinkItem colorMode={colorMode}>{name}</NavLinkItem>
          </NextLink>
        ))}
      </Flex>
    </nav>
  )
}