import styled from '@emotion/styled'

export const IconStyle = styled.a`
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