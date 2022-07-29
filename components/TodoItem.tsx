import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import tw from "twrnc";

type Iprops = {
  title: string;
  id: string;
};

const TodoItem = ({ title, id }: Iprops) => {
  return (
    <View
      style={[
        styles.background,
        tw`py-3 px-4 rounded-md flex flex-row items-center justify-between mt-4`,
      ]}
    >
      <View>
        <Text style={tw`text-white text-lg`}>{title}</Text>
      </View>
      <MaterialIcons name="delete" size={34} style={[styles.pinkBg]} />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#031A55",
  },
  pinkBg: {
    color: "#EB06FE",
  },
});
