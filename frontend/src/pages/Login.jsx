import React from 'react';
import {Box, Button, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} py={{base:"0", sm:"8"}} px={{base:"3",sm:"6"}} mx={"auto"} h={"100vh"} >
      <Box w={"100%"} borderRadius={"1rem"} shadow={"2xl"} maxW={{sm:"md"}} bg={useColorModeValue("gray.300", "#313244")}>
        <Box p={{base:"6", sm:"8"}}>
          <Heading as={"h1"} fontSize={{base:"xl", md:"2xl"}} textAlign={"center"} mb={"5"}>Acessar conta</Heading>
          <Button fontSize={"medium"} borderRadius={"1rem"} display={"flex"} gap={"2"} p={"2"} alignItems={"center"} w={"100%"} justifyContent={"center"} textAlign={"center"}>
            <FaGithub size={"30"}/>
            Entre com GitHub
          </Button>

          <Text as={"p"} mt={"4"}>
            Não possui uma conta? <Text as={"span"} textDecoration={"underline"}><Link to={"/signup"}>Cadastre-se</Link></Text>
          </Text> 
        </Box>
      </Box>
    </Flex>
  )
}

export default Login