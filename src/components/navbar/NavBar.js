import { Box, Flex } from "@chakra-ui/react";

export default function NavBar({ page, setPage }) {
  function NextPage() {
    setPage(page + 1);
  }
  function PreviousPage() {
    if (page >= 2) {
      setPage(page - 1);
    }
  }

  return (
    <Flex padding="16px" gap="32px" color="white" bg="#202329">
      <Box>Ricky & Morty</Box>
      <Box
        as="Button"
        isDisabled={page === 1 ? true : false}
        onClick={() => PreviousPage()}
      >
        Previous Page
      </Box>
      <Box as="Button" onClick={() => NextPage()}>
        Previous Page
      </Box>
      <Box>Search</Box>
    </Flex>
  );
}
