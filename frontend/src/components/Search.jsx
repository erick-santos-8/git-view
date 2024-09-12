/* eslint-disable react/prop-types */
import {Button, FormControl, Input, InputGroup, InputRightElement, useColorModeValue} from "@chakra-ui/react";
import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";

const Search = ({onSearch}) => {

  const [username, setUsername] = useState("");

  return (
    <form onSubmit={(e) => onSearch(e, username)}>
    <InputGroup maxW={"xl"} mx={"auto"} w={{sm:"80"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Input placeholder="Buscar" type="search" id="default-search" focusBorderColor="#a6e3a1" value={username} onChange={(e) => setUsername(e.target.value)} />
      <InputRightElement w={"15"}>
        <Button bg={useColorModeValue("#a6e3a1","#a6e3a1")} color={"black"} _hover={{bg:"#B0E3AC"}} borderLeftRadius={"none"} h={"100%"} w={"100%"} type="submit">
          <TfiSearch/>
        </Button>
      </InputRightElement>
    </InputGroup>
    </form>
  )
}

export default Search