import { useState } from "react";
import { StyleSheet, Text, View ,ActivityIndicator, Button} from "react-native";

const App = () =>{
  const [show,setShow] =useState(false);
  const displayLoader = () =>{
    setShow(true);
    // api call in 3 seconds
    setTimeout(() =>{
      setShow(false);
    },3000)
  }
  return(
    <View style={styles.main}>
      {/* <Text style={{fontSize:30}}>Activity Indicator</Text> */}
      <ActivityIndicator size={100} color={'purple'} animating={show}/>
      {
       show ? <ActivityIndicator size={100} color={'red'} animating={show}/> : null
      }
      <Button title="Show Loader" onPress={displayLoader}/>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App;
