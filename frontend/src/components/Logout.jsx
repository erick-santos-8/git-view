import {Box, Button, Flex, Image, useColorModeValue} from "@chakra-ui/react"
import { CiLogout } from "react-icons/ci";
const Logout = () => {
  return (
    <Flex flexDir={"column"} mt={"auto"} gap={"2"} align={"center"}>
        <Image borderRadius='full'
    w={"10"}
    h={"10"}
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'/>

    <Button color={useColorModeValue("#4c4f69", "#cdd6f4")} bg={"transparent"}  justifyContent={"center"}  borderRadius={"2px"} _hover={{shadow:("md"), bg:"#f38ba8", color:("black")}}  transition={".5s"}>
        <CiLogout size={"20"} _hover={{color:("black")}}/>
    </Button>
    </Flex>
  )
}

export default Logout