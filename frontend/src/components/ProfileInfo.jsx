/* eslint-disable react/prop-types */
import {Box, Flex, Image, Link, Spinner, Text, useColorModeValue} from '@chakra-ui/react';
import { TfiEye, TfiThought, TfiMapAlt } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { RiUserFollowLine, RiUserFollowFill, RiGitRepositoryFill } from "react-icons/ri";
import { formatMemberSince } from '../utils/functions';

const ProfileInfo = ({userProfile}) => {

  if(!userProfile){
    return(
      <Spinner/>
    )
  }
  else{
  const formattedMemberSince = formatMemberSince(userProfile?.created_at);

  return (
    <Flex position={{md:"sticky"}} w={{base:"100%", lg:"33%"}} flexDir={"column"} gap={"2"} top={{md:"10"}}>
      <Box rounded={"lg"} p={"4"} bg={useColorModeValue("gray.50", "#313244")} shadow={"lg"}>
        <Flex alignItems={"center"} gap={"3"}>
          <Link href={userProfile?.html_url} target='_blank' rel='noreferrer'>
            <Image src={userProfile?.avatar_url} rounded={"md"} w={"24"} h={"24"} mb={"2"} alt='' border={"solid 1px #9399b2"}/>
          </Link>

          <Flex gap={"2"} alignItems={"center"} flexDir={"column"}>
            <Link href={userProfile?.html_url} target='_blank' rel='noreferrer' display={"flex"} alignItems={"center"} bg={useColorModeValue("#ccd0da","#585b70")} gap={"2"} cursor={"pointer"} border={"1px solid gray"} rounded={"md"} p={"2"} fontSize={"md"} w={"100%"} >
              <TfiEye size={"16"}/>
              Veja no Github
            </Link>
          </Flex>
        </Flex>

        {userProfile?.bio && (
          <Flex alignItems={"center"} gap={"2"} mb={"2"}>
            <TfiThought/>
            <Text fontSize={"sm"}>{userProfile?.bio.substring(0,60)}...</Text>
          </Flex>
        )}

        {userProfile?.location && (
          <Flex alignItems={"center"} gap={"2"} mb={"2"}>
            <TfiMapAlt/>
            <Text fontSize={"sm"} p={"none"}>{userProfile?.location}</Text>
          </Flex>
        )}

        {userProfile?.twitter_username && (
          <Link href={`https://twitter.com/${userProfile.twitter_username}`} mb={"2"} target='_blank' rel='noreferrer' display={"flex"} alignItems={"center"} gap={"2"} _hover={{color:"#89dceb"}}>
            <FaXTwitter/>
            {userProfile.twitter_username}
          </Link>
        )}

        <Box my={"2"}>
          <Text fontWeight={"bold"} fontSize={"sm"} opacity={".7"}>Membro desde:</Text>
          <Text>{formattedMemberSince}</Text>
        </Box>

        {userProfile.email && (
          <Box my={"2"}>
            <Text fontWeight={"bold"} fontSize={"sm"} opacity={".7"}>Email:</Text>
            <Text>{userProfile.email}</Text>
        </Box>
        )}

        {userProfile.name && (
          <Box my={"2"}>
            <Text fontWeight={"bold"} fontSize={"sm"} opacity={".7"}>Nome:</Text>
            <Text>{userProfile.name}</Text>
          </Box>
        )}

        <Box mt={"2"}>
          <Text fontWeight={"bold"} fontSize={"sm"} opacity={".7"}>Usuário:</Text>
          <Text>{userProfile.login}</Text>
        </Box>
        
      </Box>
      <Flex flexWrap={"wrap"} gap={"2"} mx={"4"} bg={"#a6e3a1"} rounded={"md"} color={"#4c4f69"} shadow={"md"} py={"1"}>
        <Flex alignItems={"center"} gap={"2"} rounded={"lg"} p={"2"} flex={"1"} minW={"24"}>
          <RiUserFollowLine width={"5"} h={"5"} />
          <Text fontSize={"sm"} >Seguindo: {userProfile?.following}</Text>
        </Flex>

        <Flex alignItems={"center"} gap={"2"} rounded={"lg"} p={"2"} flex={"1"} minW={"24"}>
          <RiUserFollowFill width={"5"} h={"5"} />
          <Text fontSize={"sm"} >Seguidores: {userProfile?.followers}</Text>
        </Flex>

        <Flex alignItems={"center"} gap={"2"} rounded={"lg"} p={"2"} flex={"1"} minW={"24"}>
          <RiGitRepositoryFill width={"5"} h={"5"} />
          <Text fontSize={"sm"} >Repositórios públicos: {userProfile?.public_repos}</Text>
        </Flex>

        <Flex alignItems={"center"} gap={"2"} rounded={"lg"} p={"2"} flex={"1"} minW={"24"}>
          <RiGitRepositoryFill width={"5"} h={"5"} />
          <Text fontSize={"sm"} >Gists públicos: {userProfile?.public_gists}</Text>
        </Flex>

      </Flex>
    </Flex>
  )
}
}

export default ProfileInfo