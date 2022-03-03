import React, { useState } from "react";
import { Box, Center, Icon, Text, Pressable, HStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const [selected, setSelected] = useState(1);
  const navigation = useNavigation();
  return (
    <Box
      bg="transparent"
      safeAreaTop
      width="80%"
      minW="300px"
      alignSelf="center"
      position="absolute"
      bottom="0"
    >
      <HStack
        bg="primary.50"
        alignItems="center"
        mb="10"
        shadow={6}
        borderRadius="50"
      >
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={<FontAwesome name="calendar-check-o" />}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Badge
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            setSelected(1);
            navigation.navigate("Badge");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={<FontAwesome name="video-camera" />}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Meeting
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              as={<FontAwesome name={"link"} />}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Links
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
