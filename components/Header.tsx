import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import tw from "twrnc";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={tw`flex flex-row items-center justify-between`}>
      <Ionicons name="menu-outline" size={34} color="white" />

      <View style={tw`flex flex-row items-center`}>
        <Ionicons name="search" size={34} color="white" style={tw`mr-2`} />
        <EvilIcons name="bell" size={34} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
