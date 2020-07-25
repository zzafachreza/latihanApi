import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, icon2, onPress, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput {...otherProps} style={defaultStyles.text} />

      {icon2 && (
        <MaterialCommunityIcons
          name={icon2}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon2}
          onPress={onPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    padding: 15,
    marginVertical: 15,
  },
  icon: {
    marginRight: 10,
  },
  icon2: {
    width: "100%",
  },
});
