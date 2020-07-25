import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { FlatList } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";

const listings = [
  {
    id: 1,
    title: "Greenfields Full Cream",
    price: 100,
    image: {
      uri:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//88/MTA-3470127/greenfields_susu-uht-green-field-250-ml-full-cream_full02.jpg",
    },
  },
  {
    id: 2,
    title: "Indomie Mie Goreng",
    price: 5,
    image: {
      uri:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//83/MTA-2902004/indomie_indomie-mie-goreng-rasa-rendang-91gr_full02.jpg",
    },
  },
  {
    id: 3,
    title: "Apple Macbook Pro MVVK2",
    price: 3500,
    image: {
      uri:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//109/MTA-5968549/apple_apple_macbook_pro_mvvk2_notebook_-16_inch-intel_core_i9-16_gb-1_tb-radeon_pro_5500m-_full04_jjg6l15c.jpg",
    },
  },
  {
    id: 4,
    title: "Canon EOS 3000D",
    price: 500,
    image: {
      uri:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//79/MTA-2211810/canon_canon-eos-3000d-kit-18-55mm-iii-kamera-dslr---black_full03.jpg",
    },
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="feature-search-outline"
        placeholder="search"
        textContentType="name"
      />
      <FlatList
        style={{
          padding: 10,
        }}
        numColumns={2}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={
              "$ " + item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
            }
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 1,
    backgroundColor: colors.light,
  },
});
