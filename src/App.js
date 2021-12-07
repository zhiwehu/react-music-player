import { Container, Flex } from "@chakra-ui/react";
import { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import SongList from "./components/SongList";
import { songs } from "./data";

const App = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  const audioRef = useRef(null);

  const handleSongInfo = (e) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const handleChangeTime = (value) => {
    audioRef.current.currentTime = value;
    setSongInfo({
      ...songInfo,
      currentTime: value,
    });
  };

  return (
    <Container>
      <Flex
        w="full"
        h="100vh"
        direction="column"
        align="center"
        justifyContent="space-between"
        pb={20}
      >
        <SongList
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
        />
        <Song currentSong={currentSong} />

        <Player
          songInfo={songInfo}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          handleChangeTime={handleChangeTime}
        />
        <audio
          onLoadedMetadata={handleSongInfo}
          onTimeUpdate={handleSongInfo}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </Flex>
    </Container>
  );
};

export default App;
