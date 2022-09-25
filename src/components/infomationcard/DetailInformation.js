import { useState } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

export default function DetailInformation({ item }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Box
      key={item.id}
      onMouseEnter={(e) => {
        setIsVisible(true);
      }}
      onMouseLeave={(e) => {
        setIsVisible(false);
      }}
      h="300px"
    >
      <Image src={item.image} alt={item.name} />
      <Flex
        display={isVisible ? "flex" : "none"}
        position="relative"
        top="-300px"
        left="0px"
        w="300px"
        h="300px"
        bg="#3c3e44"
        color="#f5f5f5"
        padding="12px"
        flexDirection="column"
        rowGap="16px"
      >
        <Text>Name:{item.name}</Text>
        <Text>Status:{item.status}</Text>
        <Text>Gender:{item.gender}</Text>
        <Text>Origin{item.origin.name}</Text>
        <Text>Location:{item.location.name}</Text>
      </Flex>
    </Box>
  );
}
