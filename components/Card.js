import PropTypes from 'prop-types'
import { elements as Ui } from '@/components'
import { useColorMode } from '@chakra-ui/color-mode'

export const Card = ({title,  children }) => {
  const { colorMode } = useColorMode()

  return (
    <Ui.Box
      w="100%" 
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'  }
      padding='12'
      border='4px solid var(--chakra-colors-gray-700);'
      boxShadow='-6px 8px var(--chakra-colors-gray-700);'
    >
      <Ui.Text
        as='h2'
        fontSize='3xl'
        fontFamily='heading'
        fontWeight='bold'
      >
        {title}
      </Ui.Text>
      {children}
    </Ui.Box>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired
}