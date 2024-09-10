import {Box, Flex} from "@chakra-ui/react"
import Search from "../components/Search";
import SortRepos from "../components/SortRepos"
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"

const Home = () => {
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