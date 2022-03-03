import React from "react";
import { Box, Container, Image, Badge, Text } from "native-base";

const Header = () => {
  return (
    <Box
      bg="primary.50"
      py="10"
      px="5"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        source={{
          uri: "https://cdn.octavianlab.com/octavianlab/bo/favicon.ico?t=1639734060331",
        }}
        alt="OC-logo"
        width="20%"
        height="10"
        resizeMode="contain"
        style={{ shadowOpacity: 0.2 }}
      />

      <Container>
        <Badge colorScheme="success" variant="solid" fontSize="sm" rounded="md">
          <Text fontSize="sm" color="white">
            a.flore
          </Text>
        </Badge>
      </Container>
    </Box>
  );
};

export default Header;
