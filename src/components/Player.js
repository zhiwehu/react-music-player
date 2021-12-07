import { useEffect } from "react";
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

const Player = ({
  songInfo,
  isPlaying,
  setIsPlaying,
  audioRef,
  handleChangeTime,
}) => {
  useEffect(() => {
    console.log(isPlaying);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const formatTime = (t) => {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
  };

  return (
    <Flex w="full" direction="column" p={4}>
      <HStack spacing={4}>
        <Text>{formatTime(songInfo.currentTime)}</Text>
        <Slider
          onChange={handleChangeTime}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime || 0}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{formatTime(songInfo.duration)}</Text>
      </HStack>
      <HStack justifyContent="center" spacing={10}>
        <Icon fontSize="4xl" cursor="pointer" as={MdSkipPrevious} />
        <Icon
          fontSize="4xl"
          cursor="pointer"
          as={isPlaying ? FaPause : FaPlay}
          onClick={handlePlayPause}
        />
        <Icon fontSize="4xl" cursor="pointer" as={MdSkipNext} />
      </HStack>
    </Flex>
  );
};

export default Player;
