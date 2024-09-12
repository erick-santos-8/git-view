import {Box, Flex, Spinner, useToast} from "@chakra-ui/react"
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
  
  const getProfile = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://api.github.com/users/erick-santos-8")
      const data = await res.json();
      setUserProfile(data);
            
      
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
  }

  const getRepos = async (reposUrl) => {
    setLoading(true);
    try {
      const resRepos = await fetch(reposUrl);
      const dataRepos = await resRepos.json();
      setRepos(dataRepos);
      
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getProfile();
    console.log("profile")
  },[]);

  useEffect(()=>{
    if(userProfile && userProfile.repos_url){
      getRepos(userProfile.repos_url)
    }
  }, [userProfile])

  
  return (
    <Box m={"4"}>
      <Search/>
      <SortRepos/>
      <Flex gap={"4"} flexDir={{base: "column", lg:"row"}} justifyContent={"center"} alignItems={"start"}>
        {userProfile && !loading && <ProfileInfo userProfile={userProfile}/>}
        {repos.length > 0 && !loading && <Repos repos={repos}/>}
        {loading && <Spinner/>}
      </Flex>
    </Box>
  )
}

export default Home