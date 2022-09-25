import ky from "ky";
import { useEffect, useState } from "react";
import { Flex, Center } from "@chakra-ui/react";
import DetailInformation from "./DetailInformation";

export default function InformationCard() {
  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ky.get("https://rickandmortyapi.com/api/character")
      .json()
      .then((resp) => {
        setCharacters(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Center>Loading app...</Center>;
  }
  console.log(characters.results);
  return (
    <Flex padding="16px" gap="8px" flexWrap="wrap">
      {characters.results.map((item) => (
        <DetailInformation key={item.id} item={item} />
      ))}
    </Flex>
  );
}
