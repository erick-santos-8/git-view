import {Button, Input, InputGroup, InputRightElement, useColorModeValue} from "@chakra-ui/react";
import { TfiSearch } from "react-icons/tfi";

const Search = () => {
  return (
    <InputGroup maxW={"xl"} mx={"auto"} w={{sm:"80"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Input placeholder="Buscar" type="search" id="default-search" focusBorderColor="#a6e3a1"/>
      <InputRightElement w={"15"}>
        <Button bg={useColorModeValue("#a6e3a1","#a6e3a1")} color={"black"} _hover={{bg:"#B0E3AC"}} borderLeftRadius={"none"} h={"100%"} w={"100%"}>
          <TfiSearch/>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default Search