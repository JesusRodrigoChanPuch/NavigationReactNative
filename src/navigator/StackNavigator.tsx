import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenPage1 from '../screens/ScreenPage1';
import ScreenPage2 from '../screens/ScreenPage2';
import ScreenPage3 from '../screens/ScreenPage3';

const Stack = createStackNavigator();
export const StackNavigator = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="ScreenPage1" component={ScreenPage1} />
        <Stack.Screen name="ScreenPage2" component={ScreenPage2} />
        <Stack.Screen name="ScreenPage3" component={ScreenPage3} />
        </Stack.Navigator>
    )}