import {Button, Flex, Text, useColorModeValue} from '@chakra-ui/react';

const SortRepos = ({onSort, sortType}) => {
  return (
    <Flex justifyContent={{base:"center", lg:"end"}} my={"2"}>
      <Text me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}}>
        Mais:
      </Text>
      <Button me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}} bg={useColorModeValue("#dce0e8")} _hover={{bg:useColorModeValue("#f5c2e7", "#ea76cb")}} onClick={()=>onSort("recents")}>
        {sortType === "recents"? <Text color={useColorModeValue("#ea76cb","#f5c2e7")}>recentes</Text> :"recentes"}
      </Button>

      <Button me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}} bg={useColorModeValue("#dce0e8")} _hover={{bg:useColorModeValue("#f9e2af","#df8e1d")}} onClick={()=>onSort("stars")}>
        {sortType === "stars"? <Text color={useColorModeValue("#df8e1d","#f9e2af")}>estrelas</Text> :"estrelas"}
      </Button>

      <Button me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}} bg={useColorModeValue("#dce0e8")} _hover={{bg:useColorModeValue("#04a5e5","#89dceb")}} onClick={()=>onSort("forks")}> 
        {sortType === "forks"? <Text color={useColorModeValue("#89dceb","#04a5e5")}>forks</Text> :"forks"}
      </Button>
    </Flex>
  )
}

export default SortRepos