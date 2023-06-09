import Navbar from "../CommonComponents/Navbar/Navbar";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import { Card, Container, Flex, Grid, Box } from "@chakra-ui/react";
import CardCom from "../CommonComponents/Card/Card";
import RecentlyPayed from "./HomeComponents/RecentlyPayed";
import styles from "./home.module.css";
import Preview from "./HomeComponents/Preview";
import SpotifyPlaylist from "./HomeComponents/SpotifyPlaylist";
import { Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimatedPages from "../../AinmatedPages";
const Home = () => {
  return (
    <AnimatedPages>
      <Box ml={["80px","80px" ,"196px","196px","196px","196px"]} mb="80px" className={styles.homeContainer}>
        <Navbar bgColor="black" />
        <AnimatedPages>
        <SpotifyPlaylist artist={'Arjit Singh'} heading={"Arjit Singh"} />
        <SpotifyPlaylist artist={'Suggested Artists'} heading={"Suggested Artists"} />
        <SpotifyPlaylist artist={'Badshah'} heading={"Badshah"} />
        </AnimatedPages>
        <Sidebar />
        <Preview />
      </Box>
       </AnimatedPages>
  );
};

export { Home };
