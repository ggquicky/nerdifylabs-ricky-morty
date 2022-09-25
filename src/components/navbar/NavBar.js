import { Box, Flex } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex padding="16px" gap="32px" color="white" bg="#202329">
      <Box>Ricky & Morty</Box>
      <Box>Previous Page</Box>
      <Box>Next Page</Box>
      <Box>Search</Box>
    </Flex>
  );
}
