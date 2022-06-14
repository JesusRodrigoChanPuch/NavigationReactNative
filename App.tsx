import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
//import { BasicSideMenu } from './src/navigator/BasicSideMenu';
import { LateralMenu } from './src/navigator/LateralMenu';

const App = () => {
  return(
    <NavigationContainer>
      <LateralMenu/>
    </NavigationContainer>
  );
}
export default App;
