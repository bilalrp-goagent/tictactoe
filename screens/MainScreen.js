import { View,Image,StyleSheet} from "react-native"
import PrimaryButton from "../components/PrimaryButton";
  

function MainScreen({nextScreen}){
    return(
      <View style={styles.container}>
          <Image source={require("../assets/images/homeimg.png")}></Image>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={nextScreen}>Play</PrimaryButton>
      </View>
      </View>
    )

}
const styles=StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: "70%",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default MainScreen