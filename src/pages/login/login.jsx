import { Flex, Input, Text, Link, Button, useToast, Image, Grid, GridItem, Box } from '@chakra-ui/react';
import { Main } from '../../layout/main'
import { Container } from '../../layout/container'
import { useState } from 'react';

export function Login() {
  const toast = useToast()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const changeValue = (e) => {
    const { name, value } = e.target

    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  const comeIn = () => {
    if (password && email === '') {
      return toast({
        title: "Erro",
        description:
          "Preencha os campos em vermelhos",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Main>
      <Container direction='column'>
        <Flex w='30%' direction='column'>
          <Box>
            <Text>Login</Text>
            <Input
              type='email'
              name='email'
              placeholder='seu email'
              mt='1rem'
              value={email}
              onChange={() => changeValue}
            />
            <Input
              type='password'
              name='password'
              placeholder='sua senha'
              mt='1rem'
              value={password}
              onChange={() => changeValue}
            />
            <Button
              w='100%'
              mt='2rem'
              onClick={comeIn}>Entrar</Button>
          </Box>
          <Box> <Text mt='1.5rem' ><Link>esqueceu sua senha?</Link></Text></Box>

          <Text mt='3rem' textAlign='center' color='GrayText'>não tem cadastro?<Link color='blue'><strong>Cadastrar</strong> </Link></Text>
        </Flex>
      </Container>
    </Main >
  )
}