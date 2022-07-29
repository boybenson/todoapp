import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import tw from "twrnc";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  return (
    <SafeAreaView style={[styles.background, tw`h-full `]}>
      <View style={tw`p-4`}>
        <Header />

        <View style={tw`mt-8`}>
          <Text style={tw`text-3xl text-white font-semibold`}>
            What's up, Benson! 👋
          </Text>
        </View>

        <InputForm />

        <View style={tw`mt-8`}>
          <TodoItem title="Meeting with the team" id="1" />
          <TodoItem title="Learn to write bash scripts" id="2" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#344FA1",
  },
});
