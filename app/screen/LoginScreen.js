import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Formik from "formik";
import colors from "../config/colors";

const iconShowPassword = [
  {
    type: "show",
    icon: "eye",
    show: true,
  },
  {
    type: "hide",
    icon: "eye-off",
    show: false,
  },
];

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [showPassword, setShowPassword] = useState(iconShowPassword[0]);
  const btnShowPassword = () => {
    var show =
      showPassword.show === true ? iconShowPassword[1] : iconShowPassword[0];
    setShowPassword(show);
  };

  const scrollEnd = () => {};

  return (
    <Screen>
      <ScrollView style={styles.scrollview}>
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
            autoFocus={true}
          />

          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
            icon="lock"
            icon2={showPassword.icon}
            onFocus={scrollEnd}
            onPress={btnShowPassword}
            placeholder="Password"
            secureTextEntry={showPassword.show}
            textContentType="password"
          />

          <AppButton title="Login" onPress={() => alert(email + password)} />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  scrollview: {
    backgroundColor: colors.secondary,
  },
});
