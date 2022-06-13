import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ScreenPage2 = () => {
    const navigation = useNavigation();
    return(
        <View>
            <Text> Pagina 2 </Text>
            <Button title="Ir a pagina 3" onPress={()=>navigation.navigate('ScreenPage3')}/>
        </View>
    )}