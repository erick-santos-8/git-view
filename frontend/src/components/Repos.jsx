import {Container, OrderedList, useColorModeValue} from '@chakra-ui/react';
import Repo from "./Repo";

const Repos = () => {
  return (
    <Container w={{base:"100%", lg:"2/3"}} rounded={"lg"} px={"4"} py={"6"} >
      <OrderedList position={"relative"} styleType={"none"} borderLeft={useColorModeValue("1px solid #dce0e8", "1px solid #313244")}>
        <Repo/>
        <Repo/>
      </OrderedList>
    </Container>
  )
}

export default Repos