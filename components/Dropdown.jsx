import { Platform, Text } from "react-native";
import AndroidDropdown from "./AndroidDropdown";

const Dropdown = () => {
  if (Platform.OS === "ios") {
    return <Text>IOS</Text>;
  } else if (Platform.OS === "android") {
    return <AndroidDropdown />;
  }
};
export default Dropdown;
