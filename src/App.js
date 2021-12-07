import { useSelector, useDispatch } from "react-redux";
import { Container, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import SongList from "./components/SongList";

const App = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const currentSong = useSelector((state) => state.currentSong);

  const handlePlayingSongTimeInfo = (e) => {
    dispatch({
      type: "SET_PLAYING_SONG_TIME_INFO",
      preload: {
        currentTime: e.target.currentTime,
        duration: e.target.duration,
      },
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
        <SongList audioRef={audioRef} />
        <Song />

        <Player audioRef={audioRef} />
        <audio
          onLoadedMetadata={handlePlayingSongTimeInfo}
          onTimeUpdate={handlePlayingSongTimeInfo}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </Flex>
    </Container>
  );
};

export default App;
