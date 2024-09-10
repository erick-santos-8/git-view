import {Box, Container, Flex, Heading, Image, useColorModeValue} from "@chakra-ui/react";

const Explore = () => {
  return (
    <Container px={"4"}>
      <Box maxW={"2xl"} mx={"auto"} rounded={"md"} p={"4"} bg={useColorModeValue("gray.50", "gray.900")} shadow={"2xl"}>
        <Heading fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>Explore os repositórios mais populares</Heading>
        <Flex gap={"2"} my={"2"} justifyContent={"center"}>
          <Image src="/javascript.svg" alt="javascript logo" h={{base:"11", sm:"20"}} cursor={"pointer"}/>
          <Image src="/typescript.svg" alt="javascript logo" h={{base:"11", sm:"20"}} cursor={"pointer"}/>
          <Image src="/java.svg" alt="javascript logo" h={{base:"11", sm:"20"}} cursor={"pointer"}/>
          <Image src="/c++.svg" alt="javascript logo" h={{base:"11", sm:"20"}} cursor={"pointer"}/>
          <Image src="/python.svg" alt="javascript logo" h={{base:"11", sm:"20"}} cursor={"pointer"}/>
        </Flex>
      </Box>
    </Container>
  )
}

export default Explore