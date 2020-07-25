import React from "react";
import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 20,
    width: "80%",
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
