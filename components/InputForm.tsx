import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const InputForm = (props: Props) => {
  return (
    <View style={tw`mt-4 flex flex-row`}>
      <TextInput
        placeholder="Enter Task..."
        style={tw`bg-white py-3 px-4 rounded-md w-11/12`}
      />
      <TouchableOpacity>
        <View>
          <Ionicons
            name="ios-add-circle-sharp"
            size={44}
            style={[styles.pinkBg]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  pinkBg: {
    color: "#EB06FE",
  },
});
