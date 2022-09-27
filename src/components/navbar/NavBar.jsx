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
      gap={{ base: "8px", md: "32px" }}
      color="white"
      bg="#202329"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>Ricky & Morty</Box>
      <Flex gap={{ base: "8px", md: "16px" }}>
        <Box
          as="button"
          w={{ base: "36px", md: "60px" }}
          onClick={() => PreviousPage()}
          border="1px solid white"
          borderRadius="6px"
        >
          &#60;
        </Box>

        <Box
          as="button"
          w={{ base: "36px", md: "60px" }}
          onClick={() => NextPage()}
          border="1px solid white"
          borderRadius="6px"
        >
          &#62;
        </Box>
        <Input
          onChange={(e) => debounce(e.target.value)}
          w={{ base: "100px", md: "200px" }}
          placeContent="Search"
        />
      </Flex>
    </Flex>
  );
}
