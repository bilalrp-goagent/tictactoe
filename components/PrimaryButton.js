import { Pressable, View, Text, StyleSheet } from "react-native";
import colors from '../variables/Colors'


function PrimaryButton({ children,onPress}) {
  function pressHander(){
    onPress()
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={{color:colors.rippleEffect}} style={styles.container} onPress={pressHander}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
 
  },
  buttonContainer:{
    width:200,
    backgroundColor:colors.blueColor,
    borderRadius:9,
    overflow:'hidden'
  },
  buttonText:{
    padding:7,
    overflow:'hidden',
    fontSize:20,
    textAlign:'center',
    color:'#fff'
  }
});
export default PrimaryButton;
