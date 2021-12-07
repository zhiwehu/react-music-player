import { useSelector, useDispatch } from "react-redux";
import { Flex, Link, Avatar, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import playAduo from "../playAudio";

const SongItem = ({ song, songsDrawerOnClose, audioRef }) => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const currentSong = useSelector((state) => state.currentSong);
  const isPlaying = useSelector((state) => state.isPlaying);
  const handleSelectSong = (id) => {
    const selectedSong = songs.filter((song) => song.id === id)[0];
    dispatch({
      type: "SET_CURRENT_SONG",
      preload: selectedSong,
    });
    const a = playAduo(isPlaying, audioRef);
    console.log(a);
    songsDrawerOnClose();
  };
  const bg = colorMode === "light" ? "cyan.100" : "cyan.500";
  return (
    <Link onClick={() => handleSelectSong(song.id)}>
      <Flex w="full" p={4} bg={currentSong.id === song.id ? bg : "none"}>
        <Flex pr={4}>
          <Avatar src={song.cover} />
        </Flex>
        <Flex direction="column">
          <Text fontWeight="bold">{song.title}</Text>
          <Text>{song.artist}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default SongItem;
