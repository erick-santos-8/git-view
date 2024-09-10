import {Button, Flex, Text, useColorModeValue} from '@chakra-ui/react';

const SortRepos = () => {
  return (
    <Flex justifyContent={{base:"center", lg:"end"}} my={"2"}>
      <Text me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}}>
        Mais:
      </Text>
      <Button me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}} bg={useColorModeValue("#dce0e8")} _hover={{bg:"#f5c2e7", color:"black"}}>
        recentes
      </Button>

      <Button me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}} bg={useColorModeValue("#dce0e8")} _hover={{bg:"#f9e2af",color:"black"}}>
        estrelas
      </Button>

      <Button me={"2"} mb={"2"} fontSize={{base: "xs", sm:"sm"}} bg={useColorModeValue("#dce0e8")} _hover={{bg:"#89dceb",color:"black"}}>
        forks
      </Button>
    </Flex>
  )
}

export default SortRepos