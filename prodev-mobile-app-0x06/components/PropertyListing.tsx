import { View, Text } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
// import { useState } from "react";
// Update the import path if the file is named 'interfaces.ts' or 'interfaces/index.ts'
import { PropertListing, PropertyListingProps } from "../interfaces/index";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;
