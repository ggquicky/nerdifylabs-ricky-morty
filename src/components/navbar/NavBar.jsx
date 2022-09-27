import { Box, Flex, Input } from "@chakra-ui/react";
import ky from "ky";
import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import { useDebouncedCallback } from "use-debounce";

export default function NavBar() {
  const { page, setPage, setLoading, setCharacters } =
    useContext(CharacterContext);
  function NextPage() {
    setPage(page + 1);
  }
  function PreviousPage() {
    if (page >= 2) {
      setPage(page - 1);
    }
  }

  const debounce = useDebouncedCallback((value) => {
    ky.get(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .json()
      .then((resp) => {
        console.log(resp);
        setCharacters(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, 350);

  return (
    <Flex
      padding="16px"
      gap="32px"
      color="white"
      bg="#202329"
      justifyContent="space-between"
    >
      <Box>Ricky & Morty</Box>
      <Flex gap="16px">
        <Box as="button" onClick={() => PreviousPage()}>
          Previous Page
        </Box>

        <Box as="button" onClick={() => NextPage()}>
          Next Page
        </Box>
        <Input
          onChange={(e) => debounce(e.target.value)}
          w="200px"
          placeContent="Search your Character"
        />
      </Flex>
    </Flex>
  );
}
