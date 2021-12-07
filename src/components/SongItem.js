import { Flex, Link, Avatar, Text } from "@chakra-ui/react";

const SongItem = ({
  song,
  songs,
  setCurrentSong,
  songsDrawerOnClose,
  audioRef,
}) => {
  const handleSelectSong = (id) => {
    const selectedSong = songs.filter((song) => song.id === id)[0];
    audioRef.current.pause();
    setCurrentSong(selectedSong);
    audioRef.current.play();
    songsDrawerOnClose();
  };

  return (
    <Link onClick={() => handleSelectSong(song.id)}>
      <Flex w="full" p={4}>
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
