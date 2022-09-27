import ky from "ky";
import { useEffect, useContext } from "react";
import { Flex, Center } from "@chakra-ui/react";
import DetailInformation from "./DetailInformation";
import { CharacterContext } from "../context/CharacterContext";

export default function InformationCard() {
  const { page, characters, setCharacters, loading, setLoading } =
    useContext(CharacterContext);

  useEffect(() => {
    ky.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .json()
      .then((resp) => {
        setCharacters(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <Center>Loading app...</Center>;
  }

  return (
    <Flex padding="16px" gap="8px" flexWrap="wrap">
      {characters.results.map((item) => (
        <DetailInformation key={item.id} item={item} />
      ))}
    </Flex>
  );
}
