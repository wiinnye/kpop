import { Flex } from '@chakra-ui/react';

export function Main({ children, ...rest }) {
  return (
    <Flex
      w='full'
      h='1000px'
      direction='column'
      {...rest}
    >
      {children}
    </Flex>
  )
}