import { Flex } from "@chakra-ui/react"


export function Container({ children, ...rest }) {
  return (
    <Flex
      w='100%'
      h='50%'
      bgColor='#E1F8FC'
      justify='center'
      align='center'
      {...rest}
    >
      {children}
    </Flex>
  )

}