import {
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Text,
  Image,
  KeyboardAvoidingView,
  Icon,
} from "native-base";
import { Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Login = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  useEffect(() => faceId(), []);

  const faceId = async () => {
    await LocalAuthentication.hasHardwareAsync()
      .then((res) => {
        if (res) {
          LocalAuthentication.authenticateAsync().then((res) => {
            if (res.success) {
              setIsEnrolled(true);
            }
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Center w="100%" bg="primary.50" height="100%" justifyContent="center">
          <Box w="90%" maxW="290">
            <Box alignItems="center">
              <Image
                source={{
                  uri: "https://cdn.octavianlab.com/octavianlab/bo/favicon.ico?t=1639734060331",
                }}
                alt="OC-logo"
                width="30%"
                height="10"
                resizeMode="contain"
                style={{ shadowOpacity: 0.2 }}
                ml="1"
              />
              <Heading
                size="lg"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
              >
                Welcome
              </Heading>
              <Heading
                mt="1"
                _dark={{
                  color: "warmGray.200",
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
              >
                Sign in to continue!
              </Heading>
            </Box>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input borderColor="#6b6b6b" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input borderColor="#6b6b6b" type="password" />
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "blue.800",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Forget Password?
                </Link>
              </FormControl>
              <Box flexDirection="row">
                <Button
                  mt="2"
                  width="80%"
                  colorScheme="darkBlue"
                  _text={{
                    color: "white",
                  }}
                >
                  Sign in
                </Button>
                <Button
                  width="20%"
                  ml="1"
                  mt="2"
                  colorScheme="darkBlue"
                  _text={{
                    color: "white",
                  }}
                  onPress={faceId}
                >
                  <Icon
                    as={<MaterialCommunityIcons name="face-recognition" />}
                    color="white"
                    size="xs"
                  />
                </Button>
              </Box>

              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  I'm a new user.{" "}
                </Text>
                <Link
                  _text={{
                    color: "blue.800",
                    fontWeight: "medium",
                    fontSize: "sm",
                  }}
                  href="#"
                >
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
