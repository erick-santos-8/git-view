import { Button, Flex, useColorMode, useColorModeValue} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { TfiGithub, TfiHeart, TfiHome, TfiPalette, TfiUser, TfiWorld, TfiWrite } from "react-icons/tfi";
import Logout from "./Logout"

const Sidebar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  const authUser = true;

  return (
    <Flex as={"aside"} bg={useColorModeValue("#e6e9ef", "#313244")} h={"100vh"} flexDir={"column"} alignItems={"center"} position={"sticky"} pt={"0"} mt={"0"} py={"10"} ml={"0"} minW={{base: "12", md: "16"}} overflowY={"auto"} borderRight={"1px solid"} borderRightColor={"#bcc0cc"}  transition={".5s"} top={"0"} left={"0"}>
      <Flex h={"full"} flexDir={"column"} gap={"3"}>

        <Flex justifyContent={"center"} _hover={{color:useColorModeValue("black", "white")}} transition={".5s"}>
          <Link to={"/"} >
            <TfiGithub size={"30px"}  />
          </Link>
        </Flex>

        <Flex justifyContent={"center"} p={"2"} borderRadius={"2px"} _hover={{shadow:("md"), bg:useColorModeValue("#ccd0da", "#cdd6f4"), color:("black")}} transition={".5s"}>
          <Link to={"/"} >
            <TfiHome size={"20"} />
          </Link>
        </Flex>

        <Flex >
          <Button onClick={toggleColorMode} color={useColorModeValue("#4c4f69", "#cdd6f4")} bg={"transparent"}  justifyContent={"center"}  borderRadius={"2px"} _hover={{shadow:("md"), bg:useColorModeValue("gray.100", "#cdd6f4"), color:("black")}}  transition={".5s"}>
            <TfiPalette size={"20"} />
          </Button>
        </Flex>

        {authUser && (
          <Flex justifyContent={"center"} p={"2"} borderRadius={"2px"} _hover={{shadow:("md"), bg:"#f38ba8", color:("black")}} transition={".5s"}>
            <Link to={"/likes"} >
              <TfiHeart size={"20"} />
            </Link>
        </Flex>
        )}

        {authUser && (
          <Flex justifyContent={"center"} p={"2"} borderRadius={"2px"} _hover={{shadow:("md"), bg:"#89b4fa", color:("black")}} transition={".5s"}>
            <Link to={"/explore"} >
              <TfiWorld size={"20"} />
            </Link>
        </Flex>
        )}

        {!authUser && (
          <Flex justifyContent={"center"} p={"2"} borderRadius={"2px"} _hover={{shadow:("md"), bg:useColorModeValue("gray.100", "#cdd6f4"), color:("black")}} transition={".5s"}>
            <Link to={"/login"} >
              <TfiUser size={"20"} />
            </Link>
        </Flex>
        )}

        {!authUser && (
          <Flex justifyContent={"center"} p={"2"} borderRadius={"2px"} _hover={{shadow:("md"), bg:useColorModeValue("gray.100", "#cdd6f4"), color:("black")}} transition={".5s"}>
            <Link to={"/signup"} >
              <TfiWrite size={"20"} />
            </Link>
        </Flex>
        )}

        {authUser &&(
          <Logout/>
        )}
      </Flex>
    </Flex>
  )
}

export default Sidebar