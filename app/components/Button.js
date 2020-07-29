import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  icon,
  color = "primary",
  fontSize,
  sizeIcon,
  borderRadius,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], borderRadius: borderRadius },
      ]}
      onPress={onPress}
    >
      <View style={styles.detailButton}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={sizeIcon}
            color={colors.white}
          />
        )}
        <Text style={[styles.text, { fontSize: fontSize }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  detailButton: {
    flexDirection: "row",
  },
});

export default AppButton;
