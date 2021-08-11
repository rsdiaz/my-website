import { useEffect } from 'react';
import { Fragment } from 'react'
import { Text, Image, Box, Button } from './elements'
import { useDencrypt } from 'use-dencrypt-effect'
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/color-mode';

const StyledButton = styled(Button)`
  font-family: var(--chakra-fonts-heading);
  padding: var(--chakra-space-1) var(--chakra-space-4);
  margin: 0 auto;
  color: var(--chakra-colors-gray-700);
  transition: background var(--chakra-transition-duration-slow)
  var(--chakra-transition-easing-ease-in);
  background: var(--chakra-colors-yellow-300);
  border: 2px solid var(--chakra-colors-gray-700);
  border-radius: 0px;
  box-shadow: -3px 5px var(--chakra-colors-gray-700);

  &:hover {
    color: ${props =>
      props.colorMode === 'dark'
      ? 'var(--chakra-colors-white);'
      : ''
    }
  }
`
const values = ["Desarrollador Web", "FullStack", "JavaScript", " React", "NodeJs", "MongoDB"];

export const Hero = () => {
  const { result, dencrypt } = useDencrypt();
  const { colorMode } = useColorMode()

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return (
    <Fragment>
      <Box w='100%' textAlign='center'>
        <Text
          as='h1'
          fontFamily='heading'
          fontWeight='bold'
          fontSize={['3xl', '5xl']}
        >
          Roberto Serrano
        </Text>
      </Box>
      <Image
        boxSize={[100, 150]}
        objectFit='cover'
        my='30'
        src='https://res.cloudinary.com/rserrano/image/upload/v1628638945/blog/avataaars_xu13gj.png'
        alt='Roberto Serrano - Desarrollador Web'
      />
      <Text
        as='h2'
        fontFamily='heading'
        fontSize={['xl', '2xl']}
      >
        {result ? result : <br />}
      </Text>
      <br />
      <br />
      <Box w='xl' my='5'>
        <Text>
          Apasionado de las tecnologías web, el desarrollo y la seguridad informática. 
          Entusiasta de HTML, CSS, JavaScript, Node, Vue, etc... Comparto mi aprendizaje y 
          conocimiento a traves de mi blog, en el cual publico artículos sobre desarrollo web 
          y mi día a día tecnológico.
        </Text>
      </Box>
      <StyledButton colorMode={colorMode}>About</StyledButton>
    </Fragment>
  )
}