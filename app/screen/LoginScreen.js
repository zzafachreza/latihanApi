import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Formik from "formik";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <View
        style={{
          padding: 10,
        }}
      >
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />

        <AppButton title="Login" onPress={() => alert(email + password)} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
