import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

export default function AppButton({
  title,
  onPress,
  color = "primary",
  icon,
  height,
  Fontcolor = "white",
  fontSize = 20,
  borderStyle,
  borderWidth,
  borderColor,
  borderRadius = 25,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors[color],
          height: height,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderStyle: borderStyle,
          borderColor: colors[Fontcolor],
        },
      ]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={20} color={colors[Fontcolor]} />
      <Text
        style={[styles.text, { fontSize: fontSize, color: colors[Fontcolor] }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    flexDirection: "row",
  },
  text: {
    marginLeft: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
