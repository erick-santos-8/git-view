import {Box, Flex, useToast} from "@chakra-ui/react"
import Search from "../components/Search";
import SortRepos from "../components/SortRepos"
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"
import { useCallback, useEffect, useState } from "react";


const Home = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recents");

  const toast = useToast();
  const getProfileAndRepos = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch("https://api.github.com/users/erick-santos-8")
      const data = await res.json();
      setUserProfile(data);
      
      
      const resRepos = await fetch(userProfile.repos_url);
      const dataRepos = await resRepos.json();
      setRepos(dataRepos);

      console.log("user", userProfile)
      console.log("repos", repos);
      
    } catch (error) {
      toast({
        title: 'Erro',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }finally{
      setLoading(false);
    }
  },[])

  useEffect(()=>{
    getProfileAndRepos();
  },[getProfileAndRepos])
  return (
    <Box m={"4"}>
      <Search/>
      <SortRepos/>

      <Flex gap={"4"} flexDir={{base: "column", lg:"row"}} justifyContent={"center"} alignItems={"center"}>
        <ProfileInfo/>
        <Repos/>
      </Flex>
    </Box>
  )
}

export default Home