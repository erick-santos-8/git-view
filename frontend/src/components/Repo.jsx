import {Flex, Img, Link, ListItem, Text, useColorModeValue} from '@chakra-ui/react'
import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const Repo = () => {
  return (
    <ListItem mb={"10"} ms={"7"} borderRight={useColorModeValue("1px solid #dce0e8","1px solid #313244")}>
      <Text as={"span"} position={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} w={"6"} h={"6"} rounded={"full"} ring={"8"} ringColor={"#a6e3a1"} insetInlineStart={"-0.75rem"}>
        <FaCodeBranch width={"5"} height={"5"} />
      </Text>
      <Flex gap={"2"} alignItems={"center"} flex={"wrap"}>
        <Link href={"https://github.com/burakorkmez/mern-chat-app"}
					target='_blank'
					rel='noreferrer'
          display={"flex"}
          alignItems={"center"}
          gap={"2"}
          fontSize={"lg"}
          fontWeight={"semibold"}
          >
          mern-chat-app
        </Link>

      <Text as={"span"} bg={"#f9e2af"} color={"#4c4f69"} fontSize={"md"} px={"1"} py={"-0.5"} rounded={"full"} display={"flex"} alignItems={"center"} gap={"1"} >
        <FaRegStar /> 167
      </Text>
      <Text as={"span"} bg={"#94e2d5"} color={"#4c4f69"} fontSize={"md"} px={"1"} py={"-0.5"} rounded={"full"} display={"flex"} alignItems={"center"} gap={"1"} >
        <FaCodeFork /> 25
      </Text>
      <Text as={"span"} bg={"#cba6f7"} color={"#4c4f69"} fontSize={"md"} px={"1"} py={"-0.5"} rounded={"full"} display={"flex"} alignItems={"center"} gap={"1"} >
        <FaCopy /> 25
      </Text>

      </Flex>

      <Text as={"time"} my={"1"} fontSize={"xs"}>
        Criado em Jan 1, 2021
      </Text>

      <Text as={"p"} mb={"4"} fontSize={"md"}>
      Real Time Chat App | MERN && Socket.io && JWT
      </Text>
      <Img src={'/javascript.svg'} alt='Linguagem utilizada ícone' h={"8"}/>
    </ListItem>
  )
}

export default Repo