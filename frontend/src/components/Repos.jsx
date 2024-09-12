/* eslint-disable react/prop-types */
import {Container, OrderedList, Text, useColorModeValue} from '@chakra-ui/react';
import Repo from "./Repo";

const Repos = ({repos}) => {
  return (
    <Container w={{base:"100%", lg:"2/3"}} rounded={"lg"} px={"4"} py={"6"} >
      <OrderedList position={"relative"} styleType={"none"} borderLeft={useColorModeValue("1px solid #dce0e8", "1px solid #313244")}>
        {repos.map(repo => (
          <Repo key={repo.id} repo={repo}/>
        ))}
        {repos.length === 0 && <Text fontSize={"xl"} alignSelf={"center"} justifySelf={"center"} >Nenhum repositório encontrado</Text>}
      </OrderedList>
    </Container>
  )
}

export default Repos