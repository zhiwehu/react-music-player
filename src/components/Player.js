import { useSelector, useDispatch } from "react-redux";

import {
  Flex,
  HStack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
} from "@chakra-ui/react";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa";
import playVideo from "../playAudio";

const Player = ({ audioRef }) => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.currentSong);
  const songs = useSelector((state) => state.songs);
  const isPlaying = useSelector((state) => state.isPlaying);
  const playingSongTimeInfo = useSelector((state) => state.playingSongTimeInfo);

  const handleChangeTime = (value) => {
    dispatch({
      type: "SET_PLAYING_SONG_TIME_INFO",
      preload: {
        currentTime: value,
      },
    });
    audioRef.current.currentTime = value;
  };

  const handleSkipPrevious = () => {
    let index = songs.map((song) => song.id).indexOf(currentSong.id);
    if (index > 0) index = index - 1;
    else index = songs.length - 1;
    const previousSong = songs[index];
    dispatch({
      type: "SET_CURRENT_SONG",
      preload: previousSong,
    });
  };

  const handleNext = () => {
    let index = songs.map((song) => song.id).indexOf(currentSong.id);
    if (index < songs.length - 1) index = index + 1;
    else index = 0;
    const nextSong = songs[index];
    dispatch({
      type: "SET_CURRENT_SONG",
      preload: nextSong,
    });
  };

  const handlePlayPause = () => {
    dispatch({
      type: "SET_IS_PLAYING",
      preload: {
        isPlaying: !isPlaying,
      },
    });

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      playVideo(true, audioRef);
    }
  };

  const formatTime = (t) => {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
  };

  return (
    <Flex w="full" direction="column" p={4}>
      <HStack spacing={4} pb={10}>
        <Text>{formatTime(playingSongTimeInfo.currentTime)}</Text>
        <Slider
          onChange={handleChangeTime}
          min={0}
          max={playingSongTimeInfo.duration || 0}
          value={playingSongTimeInfo.currentTime || 0}
          step={1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{formatTime(playingSongTimeInfo.duration || 0)}</Text>
      </HStack>
      <HStack justifyContent="center" spacing={10}>
        <Icon
          onClick={handleSkipPrevious}
          fontSize="4xl"
          cursor="pointer"
          as={MdSkipPrevious}
        />
        <Icon
          fontSize="4xl"
          cursor="pointer"
          as={isPlaying ? FaPause : FaPlay}
          onClick={handlePlayPause}
        />
        <Icon
          onClick={handleNext}
          fontSize="4xl"
          cursor="pointer"
          as={MdSkipNext}
        />
      </HStack>
    </Flex>
  );
};

export default Player;
