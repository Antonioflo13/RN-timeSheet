import { Badge, Text, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('UserInfo')}>
      <Badge
        mr="1"
        colorScheme="success"
        variant="solid"
        fontSize="sm"
        rounded="md"
      >
        <Text fontSize="sm" color="white">
          a.flore
        </Text>
      </Badge>
    </Pressable>
  );
};

export default HeaderRight;
