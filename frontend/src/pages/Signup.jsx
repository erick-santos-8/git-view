import {Box, Button, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} px={{base:"3",sm:"6"}} py={{bse:"8", lg:"0" }} mx={"auto"} h={"100vh"}>
      <Box w={"100%"} borderRadius={"1rem"} shadow={"2xl"} mt={{md:"0"}}  maxW={{sm:"md"}} p={{xl:"0"}} bg={useColorModeValue("gray.300", "#313244")}>
        <Box p={{base:"6",sm:"8"}} >
          <Heading as={"h1"} fontSize={{base:"xl", md:"2xl"}} textAlign={"center"} mb={"5"}>Criar conta</Heading>
          <Button fontSize={"medium"} borderRadius={"1rem"} display={"flex"} gap={"2"} p={"2"} alignItems={"center"} w={"100%"} justifyContent={"center"} textAlign={"center"}>
            <FaGithub size={"30"}/>
            Cadastre-se com GitHub
          </Button>

          <Text as={"p"} mt={"2"}>
            Ao se cadstrar, você terá acesso à todos os recursos do app 😉
          </Text>
          <Text as={"p"} mt={"1"}>
            Já possui uma conta? <Text as={"span"} textDecoration={"underline"}><Link to={"/login"}>Login</Link></Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default Signup