import { StyleSheet, View, Image } from "react-native";
import Tictactoe from "./screens/Tictactoe";
import { useState } from "react";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const [newScreen, setNewScreen] = useState(false);
  function nextScreen() {
    setNewScreen(true);
  }
  return (
    <View style={styles.container}>
     
      {newScreen? <Tictactoe />:<MainScreen nextScreen={nextScreen}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
