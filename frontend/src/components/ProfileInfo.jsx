import {Box, Flex, Image, Link, Text, useColorModeValue} from '@chakra-ui/react';
import { TfiEye, TfiThought, TfiMapAlt } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const ProfileInfo = () => {
  const userProfile = {
		avatar_url: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
		bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
		email: "johndoe@gmail.com",
		followers: 100,
		following: 200,
		html_url: "https://github.com/burakorkmez",
		location: "Somewhere, Earth",
		name: "John Doe",
		public_gists: 100,
		public_repos: 100,
		twitter_username: "johndoe",
		login: "johndoe",
	};

  return (
    <Flex position={{md:"sticky"}} w={{base:"100%", lg:"33%"}} flexDir={"column"} gap={"2"} top={{md:"10"}}>
      <Box rounded={"lg"} p={"4"} bg={useColorModeValue("gray.50", "#313244")} shadow={"2xl"}>
        <Flex alignItems={"center"} gap={"3"}>
          <Link href={userProfile?.html_url} target='_blank' rel='noreferrer'>
            <Image src={userProfile?.avatar_url} rounded={"md"} w={"24"} h={"24"} mb={"2"} alt=''/>
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
          <Text>22 Jan, 2021</Text>
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

        <Box my={"2"}>
          <Text fontWeight={"bold"} fontSize={"sm"} opacity={".7"}>Usuário:</Text>
          <Text>{userProfile.login}</Text>
        </Box>
        
    
      </Box>

    </Flex>
  )
}

export default ProfileInfo