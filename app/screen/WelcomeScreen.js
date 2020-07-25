import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What you Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="LOGIN" icon="login" />
        <AppButton
          title="REGISTER"
          color="secondary"
          icon="book-open-page-variant"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginVertical: 70,
  },
});
