import { useState } from "react";
import { useSelector } from "react-redux";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

import {
  Flex,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { CgMoreVertical } from "react-icons/cg";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import SongItem from "../components/SongItem";

const SongList = ({ audioRef }) => {
  const songs = useSelector((state) => state.songs);
  const { toggleColorMode } = useColorMode();
  const [songsDrawerIsOpen, setSongsDrawerIsOpen] = useState(false);

  const songsDrawerOnOpen = () => {
    setSongsDrawerIsOpen(true);
  };

  const songsDrawerOnClose = () => {
    setSongsDrawerIsOpen(false);
  };

  return (
    <Flex justifyContent="space-between" w="full" p={4}>
      <Icon
        cursor="pointer"
        onClick={songsDrawerOnOpen}
        fontSize="4xl"
        as={CgMoreVertical}
      />
      <Icon
        onClick={toggleColorMode}
        cursor="pointer"
        fontSize="4xl"
        as={useColorModeValue(SunIcon, MoonIcon)}
      />
      <Drawer
        isOpen={songsDrawerIsOpen}
        placement="left"
        onClose={songsDrawerOnClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Songs</DrawerHeader>

          <DrawerBody p={0}>
            {/* TBD: NOT A GOOD WAY to push songs to item!! */}
            {songs.map((song, index) => (
              <SongItem
                key={index}
                song={song}
                songsDrawerOnClose={songsDrawerOnClose}
                audioRef={audioRef}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default SongList;
