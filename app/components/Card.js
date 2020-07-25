import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";
import AppButton from "./AppButton";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      <View style={styles.detailsContainerButton}>
        <AppButton
          title="Add To Cart"
          icon="cart-plus"
          borderRadius={10}
          height={10}
          color="white"
          Fontcolor="primary"
          borderColor="primary"
          borderStyle="solid"
          borderWidth={1}
          fontSize={15}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: colors.medium,
    elevation: 5,

    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  detailsContainerButton: {
    paddingHorizontal: 5,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
