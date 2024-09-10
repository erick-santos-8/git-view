import {Flex, Img, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Likes = () => {
  return (
    <TableContainer overflowX={"auto"} shadow={"2xl"} px={"4"} borderRadius={"1rem"} >
      <Table variant='simple' w={"100%"} fontSize={"md"} textAlign={{base:"left",rtl:"right"}} overflow={"hidden"}>
        <Thead>
          <Tr>
            <Th >Num</Th>
            <Th >Usuário</Th>
            <Th >Data</Th>
            <Th >Ação</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td >1</Td>
            <Td >
              <Flex>
              <Img src='https://avatars.githubusercontent.com/u/137582518?v=4&size=64' alignSelf={"center"} w={"20px"} h={"20px"} rounded={"full"} border={"1px"}/>
              <Text ml={"2"}  fontWeight={"semibold"}>erick-santos-8</Text>
              </Flex>
            </Td>
            <Td >25 novembro de 2024</Td>
            <Td  display={"flex"} flexDirection={"row"} alignItems={"center"} >
              <Flex >
                <FaHeart size={"16"}  color='#f38ba8' />
                <Text ml={"2"} >Deu like no seu perfil</Text>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
</TableContainer>
  )
}

export default Likes