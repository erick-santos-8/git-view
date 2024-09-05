import {Flex, useColorModeValue} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Likes from "./pages/Likes";

import Sidebar from "./components/Sidebar"

function App() {
  return (
    <Flex bg={useColorModeValue("#eff1f5", "#1e1e2e")}>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>          
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/likes" element={<Likes/>}/>
      </Routes>
    </Flex>
  )
}

export default App
