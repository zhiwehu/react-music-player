import { Box, VStack, Image, Heading, Text } from "@chakra-ui/react";

const Song = ({ currentSong }) => {
  return (
    <VStack spacing={10} p={4} align="center" w="full" direction="column">
      <Box>
        <Image
          boxSize="300px"
          boxShadow="lg"
          borderRadius="full"
          src={currentSong.cover}
          alt={currentSong.title}
        />
      </Box>
      <Box>
        <Heading>{currentSong.title}</Heading>
      </Box>
      <Box>
        <Text>{currentSong.artist}</Text>
      </Box>
    </VStack>
  );
};

export default Song;
