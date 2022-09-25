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
        rowGap="8px"
      >
        <Box color="#78959e">
          Name
          <br />
          <Text color="white" fontWeight="bold">
            {item.name}
          </Text>
        </Box>
        <Box color="#78959e">
          Status
          <br />
          <Flex columnGap="8px" color="white" fontWeight="bold">
            <Text
              color={item.status === "Alive" ? "green" : "red"}
              fontWeight="bold"
            >
              &#8226;
            </Text>
            {item.status}
          </Flex>
        </Box>
        <Box color="#78959e">
          Gender
          <br />
          <Text color="white" fontWeight="bold">
            {item.gender}
          </Text>
        </Box>
        <Box color="#78959e">
          Origin
          <br />
          <Text color="white" fontWeight="bold">
            {item.origin.name}
          </Text>
        </Box>
        <Box color="#78959e">
          Location
          <br />
          <Text color="white" fontWeight="bold">
            {item.location.name}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
