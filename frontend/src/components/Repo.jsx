/* eslint-disable react/prop-types */
import { Flex, Img, Link, ListItem, Text, useBreakpointValue, useColorModeValue, useToast } from '@chakra-ui/react'
import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from '../utils/functions';
import { PROGRAMMING_LANGUAGES } from '../utils/constants';

const Repo = ({ repo }) => {
  const isSmallScreen = useBreakpointValue({base: true, md: false});
  const formattedDate = formatDate(repo.created_at);
  const toast = useToast();

  const handleCloneClick = async (repo) => {
    await navigator.clipboard.writeText(repo.clone_url);
    toast({
      title: 'Copiado',
      description: 'Link copiado para a área de transferência',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <ListItem mb={"10"} ms={"7"} borderRight={useColorModeValue("1px solid #dce0e8", "1px solid #313244")}>
      <Text as={"span"} position={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} w={{base:"3", md:"6"}} h={{base:"3", md:"6"}} rounded={"full"} ring={{base:"5", md:"8"}} ringColor={"#a6e3a1"} bg={"#a6e3a1"} insetInlineStart={"-0.75rem"}>
        <FaCodeBranch width={{base:"2", md:"5"}} height={{base:"2", md:"5"}} color='#4c4f69' />
      </Text>
      <Flex gap={"2"} alignItems={"center"} flex={"wrap"}>
        <Link href={repo.html_url}
          target='_blank'
          rel='noreferrer'
          display={"flex"}
          alignItems={"center"}
          gap={"2"}
          fontSize={{base:"md", md:"lg"}}
          fontWeight={"semibold"}
        > 
          {isSmallScreen ? repo.name.substring(0,10) + "..." : repo.name}
          {/* {repo.name.substring(0,10)}... */}
        </Link>

        <Text as={"span"} bg={"#f9e2af"} color={"#4c4f69"} fontSize={{base:"xs", lg:"md"}} px={"1"} py={"-0.5"} rounded={"full"} display={"flex"} alignItems={"center"} gap={"1"} >
          <FaRegStar /> {repo.stargazers_count}
        </Text>
        <Text as={"span"} bg={"#94e2d5"} color={"#4c4f69"} fontSize={{base:"xs", lg:"md"}} px={"1"} py={"-0.5"} rounded={"full"} display={"flex"} alignItems={"center"} gap={"1"} >
          <FaCodeFork /> {repo.forks_count}
        </Text>
        <Text as={"span"} bg={"#cba6f7"} color={"#4c4f69"} fontSize={{base:"sm", lg:"md"}} px={{base:"1", md:"1"}} py={{base:"0.5", md:"-0.5"}} rounded={"full"} display={"flex"} alignItems={"center"} gap={"1"} cursor={"pointer"} onClick={() => handleCloneClick(repo)} >
          <FaCopy /> <Text>{isSmallScreen ? "": "Clone"}</Text>
        </Text>

      </Flex>

      <Text as={"time"} my={"1"} fontSize={"2xs"} >
        Criado em {formattedDate}
      </Text>

      <Text as={"p"} mb={"4"} fontSize={"md"}>
        {repo.description ? repo.description.substring(0, 60) + "..." : "Não possui descrição"}
      </Text>
      {PROGRAMMING_LANGUAGES[repo.language] && <Img src={PROGRAMMING_LANGUAGES[repo.language]} alt='Linguagem utilizada ícone' h={"8"} />}
      {/* <Img src={'/javascript.svg'} alt='Linguagem utilizada ícone' h={"8"} /> */}
    </ListItem>
  )
}

export default Repo